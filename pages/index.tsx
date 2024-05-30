import HomeLayout from "@/components/HomeLayout";
import { MovieListType } from "@/types/MovieList";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  movieResults: MovieListType[];
}

export default function Home({ movieResults }: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      // redirect to the homepage
      router.push({
        pathname: "/login",
      });
    }
    return () => {};
  }, []);

  if (status === "loading") return <p>Loading</p>;

  return (
    <>
      <HomeLayout movieResults={movieResults} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/movies");
  const movieResults = await response.json();

  return {
    props: {
      movieResults,
    },
  };
};

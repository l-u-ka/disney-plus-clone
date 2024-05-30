import { MovieListType } from "@/types/MovieList";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

type Props = {
  movieResults: MovieListType;
};

export default function MovieInformation({ movieResults }: Props) {
  console.log(movieResults);
  return <div>MovieInformation</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/movies");
  const movieData = await res.json();

  const paths = movieData?.map((movie: MovieListType) => ({
    params: {
      id: String(movie.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IParam extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParam;
  const res = await fetch(`http://localhost:3000/api/movies/${id}`);
  const movieResults = await res.json();

  return {
    props: {
      movieResults,
    },
    revalidate: 1000,
  };
};

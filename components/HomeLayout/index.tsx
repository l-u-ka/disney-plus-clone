import React from "react";
import SliderBanner from "./SliderBanner";
import { Container } from "./styles";
import Categories from "./Categories";
import { MovieListType } from "@/types/MovieList";

type Props = {
  movieResults: MovieListType[]
};

function HomeLayout({movieResults}: Props) {
  console.log(movieResults)
  return (
    <Container>
      <SliderBanner />
      <Categories />
      <h4>Recommended for You</h4>
      <h4>Trending</h4>
      <h4>New for You</h4>
    </Container>
  );
}

export default HomeLayout;

import React from 'react'
import SliderBanner from './SliderBanner'
import { Container } from './styles'
import Categories from './Categories'

type Props = {}

function HomeLayout({}: Props) {
  return (
    <Container>
      <SliderBanner/>
      <Categories/>
    </Container>
  )
}

export default HomeLayout
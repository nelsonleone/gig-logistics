"use client";

import { AboutUsServiceHighlightCard } from "../../types"
import { motion } from "framer-motion"
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem } from '@mantine/core';
import AboutUsCarouselCard from "./AboutUsCarouselCard";

interface IProps {
  aboutUsServiceHighlightCards: AboutUsServiceHighlightCard[]
}

const carouselAnimationVariants = {
  init: {
    y: 200,
    opacity: .4
  },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: .8,
      ease: "linear",
    }
  }
}

export default function AboutPageCards(props:IProps){

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const slides = props.aboutUsServiceHighlightCards.map((item) => (
    <Carousel.Slide key={item._key}>
      <AboutUsCarouselCard {...item} />
    </Carousel.Slide>
  ))

  return (
    <motion.div variants={carouselAnimationVariants} initial="init" whileInView="animate" viewport={{ margin: "-20px"}}>
      <Carousel
        slideSize="33.33%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }, { maxWidth: "md", slideSize: '50%'}]}
        slideGap={rem(50)}
        align="start"
        slidesToScroll={mobile ? 1 : 3}
        className="mt-20 mx-auto"
        controlSize={30} 
        loop 
        withIndicators
      >
        {slides}
      </Carousel>
    </motion.div>
  )
}
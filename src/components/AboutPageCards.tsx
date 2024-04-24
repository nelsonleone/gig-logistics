"use client";

import { AboutUsServiceHighlightCard } from "../../types"
import { motion } from "framer-motion"
import { Carousel } from 'flowbite-react'
import AboutUsCarouselCard from "./AboutUsCarouselCard";

interface IProps {
  aboutUsServiceHighlightCards: AboutUsServiceHighlightCard[] | undefined
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

export default async function AboutPageCards(props:IProps){

  const slides = props.aboutUsServiceHighlightCards && props.aboutUsServiceHighlightCards.map((item) => (
    <div key={item._key}>
      <AboutUsCarouselCard {...item} />
    </div>
  ))

  return (
    <motion.div variants={carouselAnimationVariants} initial="init" whileInView="animate" viewport={{ margin: "50px"}}>
      <Carousel>
        {slides ? slides : null}
      </Carousel>
    </motion.div>
  )
}
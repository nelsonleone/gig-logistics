"use client";

import { AboutUsServiceHighlightCard } from "../../types"
import { motion } from "framer-motion"
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

  return (
    <div className="md:flex flex-wrap justify-center gap-8">
      {
        props.aboutUsServiceHighlightCards && props.aboutUsServiceHighlightCards.map((item) => {
          return <motion.div  className="md:w-[40%] lg:w-[28%]" key={item._key} variants={carouselAnimationVariants} initial="init" whileInView="animate" viewport={{ margin: "50px", once: true}}>
            <AboutUsCarouselCard {...item} />
          </motion.div>
        })
      }
    </div>
  )
}
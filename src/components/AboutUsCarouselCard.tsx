import { inter } from '@/app/fonts';
import { Paper } from '@mui/material';
import React from 'react'

interface ICardProps {
    heading: string,
    textContent: string
}

function AboutUsCarouselCard({ heading, textContent }:ICardProps) {
  return (
        <Paper
            style={{ backgroundImage: `url('/images/carousel-card-bg.jpg')`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            className="min-h-auto h-[25em] shadow-lg rounded-sm px-8 py-4 text-center w-full flex justify-center items-center mx-auto mb-12 m-0"
        >
            <div>
                <h2 className={`${inter.className} text-base-color1  text-xl font-semibold uppercase mb-3`}>
                    {heading}
                </h2>
                <p className={`${inter.className} text-base-color1 text-sm leading-6`}>
                    {textContent}
                </p>
            </div>
        </Paper>
   )
}

export default AboutUsCarouselCard;
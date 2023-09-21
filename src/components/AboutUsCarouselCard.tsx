import { inter } from '@/app/fonts';
import { Title, Paper, Text } from '@mantine/core';
import React from 'react'

interface ICardProps {
    heading: string,
    textContent: string,
}

function AboutUsCarouselCard({ heading, textContent }:ICardProps) {
  return (
        <Paper
            sx={{ backgroundImage: `url('/images/carousel-card-bg.jpg')`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            className="min-h-auto h-[25em] shadow-lg rounded-sm p-8 text-center w-full mx-auto mb-12 m-0"
        >
            <div>
                <Title className={`${inter.className} text-[#FFFFFF]  text-2xl font-semibold uppercase mb-4`}>
                    {heading}
                </Title>
                <Text className={`${inter.className} text-[#FFFFFF] text-[.95rem] leading-6`}>
                    {textContent}
                </Text>
            </div>
        </Paper>
   )
}

export default AboutUsCarouselCard;
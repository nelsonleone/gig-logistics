import React from 'react'
import { TbArrowBigRightLinesFilled } from 'react-icons/tb';

function XpressDropOffClosetCenterOptionItem(city:string,addressLine:string) {
  return (
     <p className='flex justify-between'>
        <span>{city}</span>
        <TbArrowBigRightLinesFilled />
        <span>{addressLine}</span>
     </p>
  )
}

export default XpressDropOffClosetCenterOptionItem;
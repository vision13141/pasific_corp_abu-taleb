import React from 'react'
import Image from './Image'
import { HiArrowNarrowRight } from "react-icons/hi";




const ServiceCard = ({ htext, className, ptext, src, h4text, service=true, benifits = false}) => {
  return (
    <div className={`h-[377px] w-[320px] rounded-xl text-center ${benifits ? "hover:shadow-xl duration-500 shadow-blue-600 " : "shadow-2xl"}`}>
      <Image src={src} className={`ml-32 pt-10`} />
      <h3 className={`text-[25px] py-5 leading-8 ${className}`}>{htext}</h3>
      <p className={`text-base font-normal w-[260px] mx-auto leading-7 ${className}`}>{ptext}</p>
      {
        service && <div className="flex justify-center mt-3">
        <h4 className={`text-base  ${className}`}>{h4text}</h4>
         <HiArrowNarrowRight className='mt-[7px] ml-[3px]' />
       </div>
      }

    </div>
  )
}

export default ServiceCard
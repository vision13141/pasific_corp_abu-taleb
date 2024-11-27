import React from 'react'
import Image from './Image'
import Verification from '../../assets/icons/verification.svg'

const TestmonialCard = ({className, ptext, src, htext, h4text }) => {
    return (
        <div className="h-[377px] w-[300px] shadow-md lg:shadow-2xl rounded-xl">
            <Image src={src} className={`ml-14 pt-14`} />
            <p className={`text-base font-normal w-[240px] mx-auto leading-7 pt-5 ${className}`}>{ptext}</p>
            <div className="flex">
                <div className="h-11 w-11 rounded-full bg-ButtonBg ml-14 mt-10">
                    <Image />
                </div>
                <div className="mt-8">
                 <h3 className={`text-[20px] pl-4 ${className}`}>{htext}</h3>
                 <div className="flex">
                       <Image src={Verification} className={`h-4 w-4 mt-2 ml-2`}/>
                       <h4 className={`text-base font-normal italic leading-7 ${className}`}>{h4text}</h4>
                 </div>
                </div>

            </div>
        </div>
    )
}

export default TestmonialCard
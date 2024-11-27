import React from 'react'
import CommonHeadding from './Layouts/CommonHeadding'
import Image from './Layouts/Image'
import Tips_one from '../assets/images/tips_one.jpg'
import Tips_two from '../assets/images/tips_two.jpg'
import Tips_three from '../assets/images/tips_three.jpg'

const TipsPart = () => {
  return (
    <section className='w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20'>
      {/* Heading Section */}
      <div className="flex justify-center">
        <CommonHeadding text="OUR TIPS FOR YOU" className="uppercase" />
      </div>

      {/* Subtitle and Description */}
      <div className="text-center mt-6">
        <h3 className='text-2xl sm:text-3xl lg:text-40 font-semibold py-3'>
          Reinventing Your Protection
        </h3>
        <p className='max-w-full sm:max-w-md lg:max-w-[550px] mx-auto text-base sm:text-lg lg:text-xl leading-relaxed'>
          We share common trends, strategy ideas, opinions, short and long stories from the team behind our company.
        </p>
      </div>

      {/* Tips Cards Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-7 mt-10 sm:mt-16 lg:mt-20">
        {/* Card 1 */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <Image src={Tips_one} className="rounded-lg w-full sm:w-auto max-w-[350px]" />
        </div>

        {/* Card 2 */}
        <div className="flex-1 text-center">
          <Image src={Tips_two} className="rounded-lg w-full sm:w-auto max-w-[350px] mx-auto" />
          <h3 className='text-xl sm:text-2xl font-semibold pt-5 px-2'>
            How to prevent and protect your family from Carbon Monoxide
          </h3>
          <p className='text-sm sm:text-base pt-2 px-4 sm:px-10 max-w-[275px] mx-auto'>
            We share common trends, strategy ideas, opinions, short and long stories from the team behind our company.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image src={Tips_three} className="rounded-lg w-full sm:w-auto max-w-[350px]" />
        </div>
      </div>
    </section>
  )
}

export default TipsPart

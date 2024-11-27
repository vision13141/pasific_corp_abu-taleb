import React from 'react'
import Image from './Layouts/Image'
import VectorTL from '../assets/images/vector_top_left.png'
import BannerRight from '../assets/images/banner_right.png'
import Button from './Layouts/Button'
import Vector_One from '../assets/images/vector_one.png'
import Vector_two from '../assets/images/vector_two.png'

const Banner = () => {
  return (
    <section className='py-20 sm:py-28 lg:py-36 w-full h-auto'>
      <div className="relative">
        <Image 
          src={VectorTL} 
          className="absolute top-[-100px] sm:top-[-150px] md:top-[-200px] lg:top-[-250px] left-[50px] sm:left-[100px] md:left-[200px] lg:left-[250px]" 
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between relative px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Left Text Section */}
        <div className="w-full lg:w-[680px] lg:relative z-20 text-center lg:text-left lg:top-0 lg:left-80">
          <h1 className='text-4xl sm:text-5xl lg:text-[70px] leading-tight sm:leading-[60px] lg:leading-[90px]'>
            We Are Ready To Make Your New Life Happier
          </h1>
          <p className='paragraph leading-7 sm:leading-8 lg:leading-9 w-full sm:w-[500px] lg:w-[627px] mx-auto lg:mx-0 pb-6 lg:pb-10'>
            We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.
          </p>
          <Button href="#" TagName="a" text="Get a consultation" />
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 relative mt-20 lg:mt-0 flex justify-center lg:justify-end ml-12">
          <div className="w-[90%] sm:w-[75%] md:w-[60%] lg:w-full relative">
            <Image 
              src={Vector_two} 
              className="absolute top-[-50px] sm:top-[-80px] lg:top-[-115px] right-8 sm:right-24 lg:right-72 z-10" 
            />
            <Image 
              src={Vector_One} 
              className="absolute top-0 right-12 sm:right-32 lg:right-56" 
            />
            <Image 
              src={BannerRight} 
              className="w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

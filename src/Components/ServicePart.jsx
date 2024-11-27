import React from 'react'
import CommonHeadding from './Layouts/CommonHeadding'
import ServiceCard from './Layouts/ServiceCard'
import Home from '../assets/icons/home.svg'
import Life from '../assets/icons/life.svg'
import Car from '../assets/icons/car.svg'
import Image from './Layouts/Image'
import Service_Bg from '../assets/images/service_bg.jpg'
import Cotetion from '../assets/icons/cotetion.svg'
import Verification from '../assets/icons/verification.svg'

const ServicePart = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Heading Section */}
      <div className="flex justify-center">
        <CommonHeadding text="OUR SERVICES" />
      </div>

      {/* Subtitle and Description */}
      <div className="text-center mt-4 sm:mt-6">
        <h3 className="text-2xl sm:text-3xl lg:text-40 font-semibold py-3">
          Insurance made simple for you
        </h3>
        <p className="max-w-full sm:max-w-md lg:max-w-[550px] mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
          We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10 lg:mt-16">
        <div className="hover:translate-y-[-20px] duration-500 w-full sm:w-[300px] lg:w-auto">
          <ServiceCard
            src={Home}
            htext="Home Insurance"
            ptext="Home insurance is a type of insurance policy that provides cover for your home."
            h4text="Learn more"
          />
        </div>
        <div className="hover:translate-y-[-20px] duration-500 w-full sm:w-[300px] lg:w-auto">
          <ServiceCard
            src={Life}
            htext="Life Insurance"
            ptext="Helping you bridge gaps in your health care coverage during times of transition."
            h4text="Learn more"
          />
        </div>
        <div className="hover:translate-y-[-20px] duration-500 w-full sm:w-[300px] lg:w-auto">
          <ServiceCard
            src={Car}
            htext="Car Insurance"
            ptext="Car insurance is a type of insurance policy that provides cover for your car."
            h4text="Learn more"
          />
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-10 sm:mt-20 lg:mt-24 relative flex flex-col items-center lg:items-start">
        <div className="mt-[310px] lg:mt-0">
        <Image src={Service_Bg} className="rounded-xl w-full lg:w-auto" />
        </div>
        <div className="h-auto max-w-full sm:max-w-md lg:max-w-[370px] shadow-2xl rounded-xl bg-white absolute top-0 sm:top-16 left-4 sm:left-8 lg:left-16 p-6">
          <Image src={Cotetion} className="w-8 h-8 mb-4" />
          <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
            This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and I wouldn’t hesitate to recommend them.
          </p>
          <h3 className="mt-4 font-semibold">Daniel Anderson</h3>
          <div className="flex items-center mt-2">
            <Image src={Verification} className="w-5 h-5 mr-2" />
            <p className="italic text-sm">Verified customer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicePart

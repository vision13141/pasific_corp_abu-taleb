import React from 'react'
import CommonHeadding from './Layouts/CommonHeadding'
import ServiceCard from './Layouts/ServiceCard'
import {serviceData} from '../data/Data'

const BenifitsPart = () => {
  return (
    <section className='w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-36'>
      {/* Heading Section */}
      <div className="flex justify-center">
        <CommonHeadding text="your benefits" className="uppercase" />
      </div>

      {/* Subtitle and Description */}
      <div className="text-center mt-6">
        <h3 className='text-2xl sm:text-3xl lg:text-40 font-semibold py-3'>
          We’re Your Right Insurance Advocate
        </h3>
        <p className='max-w-full sm:max-w-md lg:max-w-[550px] mx-auto text-base sm:text-lg lg:text-xl leading-relaxed'>
          We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.
        </p>
      </div>

      {/* Service Cards Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-wrap gap-6 sm:gap-7 justify-center">
        {
          serviceData.map((data) => (
            <ServiceCard 
              key={data.id}
              src={data.src}
              htext={data.htext}
              ptext={data.ptext}
              service={false}
              benifits={true}
            />
          ))
        }
      </div>
    </section>
  )
}

export default BenifitsPart

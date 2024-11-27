import React from 'react'
import CommonHeadding from './Layouts/CommonHeadding'
import TestmonialCard from './Layouts/TestmonialCard'
import Star from '../assets/icons/star.svg'

const TestmonialPart = () => {
    return (
        <section className='w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20'>
            {/* Heading Section */}
            <div className="flex justify-center">
                <CommonHeadding text="TESTIMONIAL" className="uppercase" />
            </div>

            {/* Subtitle and Description */}
            <div className="text-center mt-4 sm:mt-6">
                <h3 className='text-2xl sm:text-3xl lg:text-40 font-semibold py-3'>
                    What Our Customers Have to Say
                </h3>
                <p className='max-w-full sm:max-w-md lg:max-w-[550px] mx-auto text-base sm:text-lg lg:text-xl leading-relaxed'>
                    We share common trends, strategy ideas, opinions, short and long stories from the team behind our company.
                </p>
            </div>

            {/* Testimonials Section */}
            <div className="md:flex lg:justify-between lg:flex-row gap-6  lg:gap-5 mt-10 sm:mt-16">
                {/* Testimonial Card 1 */}
                <div className="max-w-[290px] mx-auto lg:mx-0 mb-8">
                    <TestmonialCard
                        src={Star}
                        ptext="I received great customer service from the specialists who helped me. I would recommend it to anyone who wants quality."
                        htext="Viola Manisa"
                        h4text="Verified customer"
                    />
                </div>

                {/* Testimonial Card 2 */}
                <div className="max-w-[290px] mx-auto lg:mx-0 mb-8">
                    <TestmonialCard
                        src={Star}
                        ptext="I received great customer service from the specialists who helped me. I would recommend it to anyone who wants quality."
                        htext="Viola Manisa"
                        h4text="Verified customer"
                    />
                </div>

                {/* Testimonial Card 3 */}
                <div className="max-w-[290px] mx-auto lg:mx-0 mb-8">
                    <TestmonialCard
                        src={Star}
                        ptext="I received great customer service from the specialists who helped me. I would recommend it to anyone who wants quality."
                        htext="Viola Manisa"
                        h4text="Verified customer"
                    />
                </div>
            </div>
        </section>
    )
}

export default TestmonialPart

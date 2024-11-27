import React from 'react'
import Button from './Layouts/Button'

const ContactPart = () => {
  return (
    <section className='w-full h-auto bg-HeaddingColor py-10 sm:py-16 lg:py-20'>
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center">
          <h3 className='text-2xl sm:text-3xl lg:text-40 text-white max-w-full sm:max-w-md lg:max-w-[890px] mx-auto leading-tight lg:leading-[60px] pt-6 lg:pt-10 pb-5'>
            Ready To Get Insured? Submit Your Request And Hear Back As Soon As Tomorrow.
          </h3>
        </div>

        {/* Input and Button Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative mt-8 sm:mt-10">
          <input 
            type="email" 
            placeholder="Your email" 
            className="h-12 sm:h-[56px] w-full max-w-[320px] rounded-lg pl-5" 
          />
          <Button 
            type="button" 
            TagName="button" 
            text="Get Started" 
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 mt-3 sm:mt-0" 
          />
        </div>

        {/* Description Section */}
        <div className="mt-6 sm:mt-10 text-center">
          <p className='text-white text-sm sm:text-base max-w-full sm:max-w-md lg:max-w-[540px] mx-auto leading-relaxed'>
            Get a response tomorrow if you submit by 9pm today. If we receive your request after 9pm, you’ll get a response the following day.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactPart

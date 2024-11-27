import React from 'react'
import Image from './Layouts/Image'
import Logo from '../assets/icons/logo.png'
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import FooterList from './Layouts/FooterList'

const FooterPart = () => {
    return (
        <section className='w-full max-w-screen-xl mx-auto py-16 px-4'>
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                
                {/* Logo Section */}
                <div className="text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start gap-2 items-center mb-4">
                        <Image src={Logo} />
                        <h3 className='text-2xl sm:text-3xl lg:text-[35px] font-semibold'>Pacific Corp.</h3>
                    </div>
                    <p className='text-sm lg:text-base w-full lg:w-[200px] mx-auto lg:mx-0'>
                        Build a modern and creative website with crealand
                    </p>
                    <div className="flex justify-center lg:justify-start gap-3 mt-5">
                        <a href="#" className='bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center'>
                            <FaGoogle className='text-lg text-black' />
                        </a>
                        <a href="#" className='bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center'>
                            <FaTwitter className='text-lg text-black' />
                        </a>
                        <a href="#" className='bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center'>
                            <FaInstagram className='text-lg text-black' />
                        </a>
                        <a href="#" className='bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center'>
                            <FaLinkedin className='text-lg text-black' />
                        </a>
                    </div>
                </div>
                
                {/* Links Section */}
                <div className="flex flex-wrap justify-between lg:justify-end gap-10 lg:gap-16 w-full lg:w-auto">
                    <div>
                        <FooterList href="#" text="Product" className="text-lg font-bold text-black mb-2" />
                        <FooterList href="#" text="Landingpage" className="text-sm text-gray-600" />
                        <FooterList href="#" text="Documentation" className="text-sm text-gray-600" />
                        <FooterList href="#" text="Referral Program" className="text-sm text-gray-600" />
                        <FooterList href="#" text="Pricing" className="text-sm text-gray-600" />
                    </div>
                    <div>
                        <FooterList href="#" text="Services" className="text-lg font-bold text-black mb-2" />
                        <FooterList href="#" text="Documentation" className="text-sm text-gray-600" />
                        <FooterList href="#" text="Design" className="text-sm text-gray-600" />
                        <FooterList href="#" text="Themes" className="text-sm text-gray-600" />
                        <FooterList href="#" text="Illustrations" className="text-sm text-gray-600" />
                        <FooterList href="#" text="UI Kit" className="text-sm text-gray-600" />
                    </div>
                    <div>
                        <FooterList href="#" text="Company" className="text-lg font-bold text-black mb-2" />
                        <FooterList href="#" text="About" className="text-sm text-gray-600" />
                        <FooterList href="#" text="Terms" className="text-sm text-gray-600" />
                        <FooterList href="#" text="Privacy Policy" className="text-sm text-gray-600" />
                        <FooterList href="#" text="Careers" className="text-sm text-gray-600" />
                    </div>
                    <div>
                        <FooterList href="#" text="More" className="text-lg font-bold text-black mb-2" />
                        <FooterList href="#" text="Documentation" className="text-sm text-gray-600" />
                        <FooterList href="#" text="License" className="text-sm text-gray-600" />
                        <FooterList href="#" text="Changelog" className="text-sm text-gray-600" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterPart

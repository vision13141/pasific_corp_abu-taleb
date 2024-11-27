import { useState } from 'react';
import Image from './Layouts/Image';
import Logo from '../assets/icons/logo.png';
import List from './Layouts/List';
import Button from './Layouts/Button';
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu toggle

    return (
        <nav className="w-full max-w-screen-xl mx-auto py-4 px-4 flex justify-between items-center">
            
            {/* Logo and Toggle for Mobile */}
            <div className="flex items-center gap-2">
                <Image src={Logo} alt="Pacific Corp Logo" className="h-8 w-auto" />
                <h3 className="text-lg font-semibold sm:text-[35px]">Pacific Corp.</h3>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center space-x-6 font-semibold">
                <List text="Home" className="hover:text-ButtonBg" />
                <List text="Pages" className="hover:text-ButtonBg" />
                <List text="Services" className="hover:text-ButtonBg" />
                <List text="Portfolio" className="hover:text-ButtonBg" />
                <List text="Blog" className="hover:text-ButtonBg" />
                <List text="Contact Us" className="hover:text-ButtonBg" />
            </div>

            {/* Call Now Button for Desktop */}
            <Button href="#" TagName="a" text="Call Now" className="hidden sm:inline-block" />

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden">
                {isMenuOpen ? <RxCross2 size={24} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 sm:hidden z-50">
                    {/* Close Button */}
                    <button 
                        onClick={() => setIsMenuOpen(false)} 
                        className="absolute top-4 right-4 text-gray-600 hover:text-black"
                    >
                        <RxCross2 size={28} />
                    </button>

                    {/* Menu Items */}
                    <List text="Home" className="text-xl font-semibold hover:text-ButtonBg" />
                    <List text="Pages" className="text-xl font-semibold hover:text-ButtonBg" />
                    <List text="Services" className="text-xl font-semibold hover:text-ButtonBg" />
                    <List text="Portfolio" className="text-xl font-semibold hover:text-ButtonBg" />
                    <List text="Blog" className="text-xl font-semibold hover:text-ButtonBg" />
                    <List text="Contact Us" className="text-xl font-semibold hover:text-ButtonBg" />
                    <Button href="#" TagName="a" text="Call Now" className="text-xl font-semibold" />
                </div>
            )}
        </nav>
    );
};

export default Navbar;

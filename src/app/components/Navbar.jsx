"use client"
import { Phone, Search } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className={`fixed top-0 bg-white flex justify-between -translate-x-1/2 left-1/2 shadow-lg  min-h-[90px] items-center z-50 w-[100%]  rounded-0  py-2 ${scrolled ? "lg:top-0 lg:w-[100%] lg:rounded-0" : "lg:top-10 lg:w-[97%] lg:rounded-2xl"}`} >
            <div className="w-[90%] xl:w-[90%] mx-auto flex justify-between gap-3 items-center" >
                <Link href="/" className='w-[40%] lg:w-[15%]' ><img src="logo-1.png" className='w-[100%]' /></Link>
                <div className="bg-transparent hidden lg:flex lg:w-[45%] justify-between pe-6 border-e-1 border-gray-500">
                    <div className="relative inline-block group">
                        <button className="px-4 py-2 rounded group flex items-center gap-1
                        after:content-[''] after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-[80%] after:bg-[linear-gradient(135deg,#D4A5B4,#745DB0)]
                        after:scale-x-0 after:origin-left
                        after:transition-transform after:duration-300
                        hover:after:scale-x-100">
                            Home
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                        <div className="absolute left-0 mt-8 w-48 bg-white shadow-lg rounded opacity-0 invisible
                            group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/">Home Layout 1</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout2">Home Layout 2</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout3">Home Layout 3</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-4">Home Layout 4</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-5">Home Layout 5</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-6">Home Layout 6</Link>
                        </div>
                    </div>
                    <div className="relative inline-block group">
                        <button className="py-2 rounded group flex items-center gap-1
                            after:content-[''] after:absolute after:left-0 after:-bottom-1
                            after:h-[2px] after:w-[80%] after:bg-[linear-gradient(135deg,#D4A5B4,#745DB0)]
                            after:scale-x-0 after:origin-left
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100">
                            Pages
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                        <div className="absolute left-0 mt-8 w-48 bg-white shadow-lg rounded opacity-0 invisible
                            group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/">Home Layout 1</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout2">Home Layout 2</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout3">Home Layout 3</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-4">Home Layout 4</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-5">Home Layout 5</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-6">Home Layout 6</Link>
                        </div>
                    </div>
                    <div className="relative inline-block group">
                        <button className="px-4 py-2 rounded group flex items-center gap-1
                        after:content-[''] after:absolute after:left-0 after:-bottom-1
                            after:h-[2px] after:w-[80%] after:bg-[linear-gradient(135deg,#D4A5B4,#745DB0)]
                            after:scale-x-0 after:origin-left
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100 ">
                            Services
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                        <div className="absolute left-0 mt-8 w-48 bg-white shadow-lg rounded opacity-0 invisible
                            group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/">Home Layout 1</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout2">Home Layout 2</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout3">Home Layout 3</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-4">Home Layout 4</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-5">Home Layout 5</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-6">Home Layout 6</Link>
                        </div>
                    </div>
                    <div className="relative inline-block group">
                        <button className="px-4 py-2 rounded group flex items-center gap-1   after:content-[''] after:absolute after:left-0 after:-bottom-1
                            after:h-[2px] after:w-[80%] after:bg-[linear-gradient(135deg,#D4A5B4,#745DB0)]
                            after:scale-x-0 after:origin-left
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100">
                            Portfolio
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                        <div className="absolute left-0 mt-8 w-48 bg-white shadow-lg rounded opacity-0 invisible
    group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/">Home Layout 1</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout2">Home Layout 2</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout3">Home Layout 3</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-4">Home Layout 4</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-5">Home Layout 5</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-6">Home Layout 6</Link>
                        </div>
                    </div>
                    <div className="relative inline-block group">
                        <button className="px-4 py-2 rounded group flex items-center gap-1
                            after:content-[''] after:absolute after:left-0 after:-bottom-1
                            after:h-[2px] after:w-[80%] after:bg-[linear-gradient(135deg,#D4A5B4,#745DB0)]
                            after:scale-x-0 after:origin-left
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100">
                            Blog
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                        <div className="absolute left-0 mt-8 w-48 bg-white shadow-lg rounded opacity-0 invisible
                            group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout3">Blog Default</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-4">Blog Grid</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-5">Blog List</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/home-layout-6">Blog Details</Link>
                        </div>
                    </div>
                    <div className="relative inline-block group">
                        <button className="px-4 py-2 rounded group flex items-center gap-1   after:content-[''] after:absolute after:left-0 after:-bottom-1
                            after:h-[2px] after:w-[80%] after:bg-[linear-gradient(135deg,#D4A5B4,#745DB0)]
                            after:scale-x-0 after:origin-left
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100">
                            Contact
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                        <div className="absolute left-0 mt-8 w-48 bg-white shadow-lg rounded opacity-0 invisible
                            group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/">Home Layout 1</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout2">Contact Us</Link>
                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/homelayout3">Helps & Faqs</Link>
                        </div>
                    </div>

                </div>
                <div className="flex items-center gap-2"><Phone className="fill-[#FCB043] stroke-[#FCB043] w-10 h-10" />
                <div className='flex flex-col justify-start'>
                    <span>Call us 24/7:</span>
                    <span className='font-semibold text-[20px]'>8 800 2563 123</span>
                </div>
                </div>
                <div className='text-[#504F4F] hidden lg:block  hover:text-[#FFF]'><Link className='inline-block no-underline p-2 bg-[#2D2D3F] rounded-[50%] text-white' href="#contact"><Search size={30} /></Link></div>
            </div>

        </nav>
    )
}


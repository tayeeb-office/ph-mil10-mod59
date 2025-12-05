import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png"

const Footer = () => {
    return (
         <div className='bg-[#D2F9CA]' >
                    
                     <footer className="md:flex md:justify-center md:items-center">
                        
                        <div className='md:w-[550px]'>
                            <img className='md:ml-[40px] ml-[0px] ' src={logo} alt="Logo" />
                            <p className='font-semibold md:ml-[70px] ml-[30px] '>PawMart connects local pet owners and buyers for adoption and pet care products.</p>
                        </div>
                        
                        <div className='md:max-w-[1440px]  md:mx-auto flex flex-col md:flex-row p-10 gap-[30px] md:gap-[80px] '>
                        <nav className=' w-[160px] flex flex-col gap-[20x]'>
                            <h6 className="text-[18px] font-semibold ">Navigation</h6>
                            <a className="link link-hover mt-[12px]">Home</a>
                            <a className="link link-hover mt-[12px]">Pets & Supplies</a>
                            <a className="link link-hover mt-[12px]">Registration</a>
                            <a className="link link-hover mt-[12px]">Login</a>
                        </nav>
                        <nav className='w-[160px] flex flex-col gap-[20x]'>
                            <h6 className="text-[18px] font-semibold">Information</h6>
                            <a className="link link-hover mt-[12px] ">Privacy Policy</a>
                            <a className="link link-hover mt-[12px]">Terms & Conditions</a>
                            <a className="link link-hover mt-[12px]">Join Us</a>
                        </nav>
                        <nav className=' w-[220px] flex flex-col'>
                            <h6 className="text-[18px] font-semibold mb-[12px]">Social Links</h6>
                            <div className='flex flex-row gap-[20x]' >
                            <div className='bg-white text-[#001931] rounded-full p-[3px] w-[22px] h-[22px] mr-[16px]'>
                                <a className="link link-hover   "><FaXTwitter /></a>
                            </div>
                            <div className='bg-white text-[#001931] rounded-full p-[3px] w-[22px] h-[22px]'>
                                <a className="link link-hover   "><FaLinkedinIn /></a>
                            </div>
                            <div className='bg-white text-[#001931] rounded-full p-[3px] w-[22px] h-[22px] ml-[16px]'>
                                <a className="link link-hover   "><FaFacebookF /> </a>
                            </div>
                            </div>
                        </nav>
                        </div>
                    
                    </footer>
        
                    <footer className="footer sm:footer-horizontal footer-center bg-[#D2F9CA]">
                        <aside>
                            <p className='md:w-6xl mx-auto border-t border-t-gray-600 p-[30px] '>Copyright © 2025 - All right reserved</p>
                        </aside>
                    </footer>
                    
                </div>
    );
};

export default Footer;
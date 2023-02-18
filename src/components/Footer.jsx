import React from 'react'
import { RiFacebookBoxFill, RiTwitterFill, RiPinterestFill, RiInstagramLine } from "react-icons/ri";

// Import images
import logo from '../assets/logo.svg';
import imgBgPaternFooter from '../assets/bg-pattern-footer-desktop.svg'


const Footer = () => {
  return (
    <div className='relative w-full bg-gray-100 grid place-content-center py-28'>
        <img  src={imgBgPaternFooter} alt="" className='absolute top-0 -z-0 bg-cover w-full lg:w-[40%] lg:h-[40%]'/>
        <div className='relative flex flex-col lg:flex-row items-center lg:justify-between gap-6 mb-16 '>
            <div>
                <img src={logo} alt="logo Insure " />
            </div>
            <div className='flex gap-7 text-5xl text-gray-600 mb-16 lg:mb-0 '>
                <RiFacebookBoxFill className='cursor-pointer hover:text-VeryDarkViolet' />
                <RiTwitterFill className='cursor-pointer hover:text-VeryDarkViolet'/>
                <RiPinterestFill className='cursor-pointer hover:text-VeryDarkViolet'/>
                <RiInstagramLine className='cursor-pointer hover:text-VeryDarkViolet'/>
            </div>
        </div>
        <div className='h-[1px] w-[140%] md:w-[100%] bg-gray-400 justify-self-center '></div>
        <div className='relative justify-self-center gap-36 lg:justify-self-start text-center md:text-left md:flex  '>
            <div className='justify-self-center mt-16 uppercase'>
                <h3 className='text-gray-400 font-semibold'>our company</h3>
                <ul className='mt-6 text-VeryDarkViolet font-semibold flex flex-col gap-2'> 
                    <li> <a href="#" className='hover:underline'>how we work</a> </li>
                    <li> <a href="#" className='hover:underline'>why insure?</a> </li>
                    <li> <a href="#" className='hover:underline'>check price</a> </li> 
                    <li> <a href="#" className='hover:underline'>reviews</a> </li> 
                </ul>
            </div>

            <div className='justify-self-center mt-16 uppercase'>
                <h3 className='text-gray-400 font-semibold'>help me</h3>
                <ul className='mt-6 text-VeryDarkViolet font-semibold flex flex-col gap-2'> 
                    <li> <a href="#" className='hover:underline'>faq</a> </li>
                    <li> <a href="#" className='hover:underline'>terms of use</a></li>
                    <li> <a href="#" className='hover:underline'>privacy policy</a> </li> 
                    <li> <a href="#" className='hover:underline'>cookies</a> </li> 
                </ul>
            </div>

            <div className='justify-self-center mt-16 uppercase'>
                <h3 className='text-gray-400 font-semibold'>contact</h3>
                <ul className='mt-6 text-VeryDarkViolet font-semibold flex flex-col gap-2'> 
                    <li> <a href="#" className='hover:underline'>sales</a> </li>
                    <li> <a href="#" className='hover:underline'>support</a></li>
                    <li> <a href="#" className='hover:underline'>live chat</a></li> 
                </ul>
            </div>

            <div className='justify-self-center mt-16 uppercase'>
                <h3 className='text-gray-400 font-semibold'>others</h3>
                <ul className='mt-6 text-VeryDarkViolet font-semibold flex flex-col gap-2'> 
                    <li> <a href="#" className='hover:underline'>careers</a> </li>
                    <li> <a href="#" className='hover:underline'>press</a></li>
                    <li> <a href="#" className='hover:underline'>licenses</a> </li> 
                </ul>
            </div>
        </div>   
    </div>
  )
}

export default Footer 
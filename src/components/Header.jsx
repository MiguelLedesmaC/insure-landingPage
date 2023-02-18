import React, { useState } from "react";
import PlanButton from "./PlanButton";

// Import images
import logo from '../assets/logo.svg';
import imgHamburguer from '../assets/icon-hamburger.svg';
import closeHamburguer from '../assets/icon-close.svg';
import imgFamily from '../assets/image-intro-mobile.jpg';
import wavesPattern from '../assets/bg-pattern-mobile-nav.svg'


const Header = () => {
  const [hamburguer, setHamburguer] = useState(false);

  // Functions
  const toogleMenu = ()=> {
    console.log(hamburguer);
    !hamburguer ?  setHamburguer(true) : setHamburguer(false)
    
  }
  return (
    <div className="">
      <div className=" bg-white flex justify-between items-center py-7 px-6 ">
        <div className="relative">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <img
          className="lg:hidden cursor-pointer"
            onClick={toogleMenu}
            src={ !hamburguer ? imgHamburguer: closeHamburguer}
            alt="menu_hamburguer"
          />
        </div>
        {/* Nav menu desktop */}
        <div className="hidden h-8 lg:flex items-center justify-evenly w-[75%] uppercase">
        <ul className=" flex gap-20 text-gray-500 h-full">
            <li className="hover:text-black hover:underline " ><a href="#">how we work</a></li>
            <li className="hover:text-black hover:underline " ><a href="#">blog</a></li>
            <li className="hover:text-black hover:underline " ><a href="#">account</a></li>
          </ul>
          <PlanButton ringColor={'ring-VeryDarkViolet'} paddingX={"px-[35px]"} hover={"hover:bg-VeryDarkViolet hover:text-white"} text={"View plans"} />
        </div>
      {/* Nav menu mobile */}
        <div className={`${!hamburguer ? `hidden`:`block`} lg:hidden  absolute text-2xl text-white bg-VeryDarkViolet top-[5.5rem] left-0 w-full h-[71.5%] md:h-[51.5%] uppercase flex flex-col text-center leading-[4rem] tracking-[0.2rem]`}>
          <ul className="pt-14 ">
            <li ><a href="#">how we work</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">account</a></li>
          </ul>
          <PlanButton paddingX={"px-[25%]"} margins={'mb-28 mt-10'} ringColor={'ring-white'} hover={"hover:text-VeryDarkViolet hover:bg-white"} text={"View plans"} />
          <img
          className="w-full h-48 mt-64" 
          src={wavesPattern} alt="waves pattern" />
        </div>
      </div>
      <div className="background-header font-serifDisplay bg-Dark_Violet grid columns-1 lg:columns-2 gap-10 md:gap-2 ">
        <div className="md:col-start-2  md:row-start-1 lg:-mb-20 lg:mt-[12%] flex justify-center">
          <img
            className="w-full md:w-[29rem] max-w-lg "
            src={imgFamily}
            alt="image family"
          />
        </div>
        <div className=" flex flex-col place-self-center text-center md:text-left md:pt-8 lg:pt-0 w-[65%] gap-4 text-white lg:col-start-1 md:row-start-1">
          <div className="h-[1px] w-[23.5%] bg-white my-6 hidden lg:block"></div>
          <h1 className="text-5xl lg:text-[3.33rem]  font-semibold max-w-[25rem] ">
            Humanizing your insurance.
          </h1>
          <p className="text-[1.2rem] text-gray-200 max-w-[35rem] ">
            Get your life insurance coverage easier and faser.We blend our
            expertise and technology to hel pou find the plan that`s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <PlanButton paddingX={'px-6'} margins={'mb-28 mt-10'} ringColor={'ring-white'} hover={"hover:text-VeryDarkViolet hover:bg-white"} text={"View plans"} />
        </div>
      </div>
    </div>
  );
};

export default Header;

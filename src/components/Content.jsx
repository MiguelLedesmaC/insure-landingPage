import React from "react";
import Article from "./Article";
import PlanButton from "./PlanButton";
// Import images
import imgBgPattern from '../assets/bg-pattern-intro-right-mobile.svg';
import imgSnappy from '../assets/icon-snappy-process.svg';
import imgSffordablePrices from '../assets/icon-affordable-prices.svg';
import imgPeopleFirst from '../assets/icon-people-first.svg';
import imgBgPatternRight from '../assets/bg-pattern-intro-right-mobile.svg';


const Content = () => {
  return (
    <main className="overflow-hidden -mt-[9.4rem] md:-mt-0 lg:mt-36 lg:ml-44 flex flex-col lg:row">
        <div className="flex justify-end md:hidden ">
           <img
        src={imgBgPattern}
        alt="waves pattern"
      /> 
        </div>
        <div className="w-[30%] h-[2px] bg-gray-300 self-center mb-14"></div>
      
      <h2 className="text-center lg:text-left  text-5xl font-bold font-serifDisplay mb-16 text-VeryDarkViolet md:mt-20 ">
        Weʹre Different
      </h2>
      <div className="flex flex-col gap-9 mb-20 lg:flex-row">
        <Article
        image={imgSnappy}
        title={"Snappy Proccess"} 
        text={"Our application process can be completed in minutes, not hours. Dont´t get stuck filling in tedious forms."} />

        <Article
            image={imgSffordablePrices}
            title={"Affordable Prices"} 
            text={"We don´t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."} />
        <Article
            image={imgPeopleFirst}
            title={"People First"} 
            text={"Our plans arent´t full of conditions and clauses to prevent payouts. We make sure you´re covered whn you need it."} />
      </div>

      <div className="relative bg-Dark_Violet h-96 lg:h-48 w-[87%] max-w-[1086px] self-center lg:self-start flex flex-col lg:flex-row justify-center lg:justify-start  items-center gap-14  mb-44 overflow-hidden text-center lg:text-left text-white ">
            <div>
                <img className="absolute -top-[9.3rem] right-0 w-44" src={imgBgPatternRight} alt="waves" />
            </div>
            <h2 className="relative text-5xl w-[65%] lg:max-w-[390px] font-serifDisplay -mt-20 lg:-mt-0 lg:mr-40">Find out more about how we work</h2>
            <PlanButton text={"how we work"} paddingX={"px-12"} ringColor={"ring-white"} hover={"hover:bg-white hover:text-Dark_Violet"}/>
      </div>
    </main>
  );
};

export default Content;

import React from 'react'

const Article = ({ title, text, image }) => {
  return (
    <article>
        <div className='text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-5 px-[12%] lg:px-0 font-serifDisplay text-VeryDarkViolet'>
            <div >
                <img src={image} alt="Image" />
            </div>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className="text-gray-400 text-[1.04rem] max-w-[21rem] ">{text}</p>
        </div>
       
    </article>
  )
}

export default Article
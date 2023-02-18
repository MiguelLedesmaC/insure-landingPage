import React from 'react'

const PlanButton = ({ paddingX, margins, ringColor, hover, text }) => {
  return (
    <div className={` ${margins} uppercase cursor-pointer relative`}>
        <a
            className={`ring-2 ${ringColor} ${paddingX} ${hover} py-3`}
             href="#" >
            {text}
        </a>
    </div>
  )
}

export default PlanButton
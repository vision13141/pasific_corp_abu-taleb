import React from 'react'

const CommonHeadding = ({text,className}) => {
  return (
    <div className="w-[262px] border-dotted border-b-2 border-black">
      <h3 className={`text-ButtonBg font-open_sans font-bold text-base text-center pb-5 ${className}`}>{text}</h3>
       
    </div>
    
  )
}                   

export default CommonHeadding
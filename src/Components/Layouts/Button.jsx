
import React from 'react'

function Button({ className, text,TagName, type, button, ...rest }) {
  return (

    <TagName {...rest} className={(`bg-ButtonBg  rounded-xl px-4 py-2  text-white ${className}`)}>{text} </TagName>

  )
}

export default Button
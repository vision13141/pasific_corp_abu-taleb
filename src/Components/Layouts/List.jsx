import React from 'react'

const List = ({ text, className, href }) => {
  return (
    <li>
      <a href={href} className={`text-ParagraphColor font-open_sans font-normal text-base cursor-pointer list-none ${className}`}>
        {text}
      </a>
    </li>
  )
}

export default List
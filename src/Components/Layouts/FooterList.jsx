import React from 'react'

const FooterList = ({ text, className, href }) => {
    return (
      <li>
        <a href={href} className={`text-ParagraphColor font-open_sans font-normal text-base cursor-pointer list-none${className}`}>
          {text}
        </a>
      </li>
    )
  }

export default FooterList
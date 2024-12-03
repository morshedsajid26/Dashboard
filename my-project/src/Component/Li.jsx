import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({liText,className,children,href}) => {
  return (
    <li >
        <Link className={`hover:text-[#FFFFFF] transition-all duration-300 text-[#FFFFFF]/50 text-[25px] font-semibold ${className}`} to={href}> {liText}
        </Link>
        {children}
    </li>
  )
}

export default Li
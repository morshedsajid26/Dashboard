import React from 'react'
import { Children } from 'react'

const PageDesign = ({className,children}) => {
  return (
    <div className={`w-full h-full bg-slate-400 rounded-[20px] ${className}`}>{children}</div>
  )
}

export default PageDesign
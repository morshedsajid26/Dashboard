import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <div className='bg-slate-300 h-dvh py-20'>
       <div className='w-[1440px] mx-auto bg-black h-full rounded-[30px] flex py-4 pr-4 font-PoP'>
       <Sidebar/>
       <Outlet/>
       </div>
    </div>
  )
}

export default RootLayOut
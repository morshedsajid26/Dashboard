import React from 'react'
import Profile from '/Profile.png'
import Li from '../Component/Li'
import Expenses from '../Pages/Expenses'

const Sidebar = () => {
  return (
    <div className='w-[360px]'>
    <div className='px-20 mt-10'>
    <div className="image relative w-[105px] ">
        <img src={Profile} alt="Profile.png" />
        <div className='h-7 w-7 bg-[#DC3434] rounded-full flex justify-center  items-center absolute -top-3  right-5 '> 
            <p>4</p> 
        </div>
    </div>

    <div>
        <h3 className='text-[30px] font-semibold text-[#FFFFFF]'>Samantha</h3>
        <p className='text-[17px]  text-[#FFFFFF]/50'>samantha@email.com</p>
    </div>

    <ul className='flex flex-col gap-y-[20px] mt-10 ' >
        <Li liText='Dashboard' />
        <Li liText='Expenses' href='/expenses'/>
        <Li liText='Wallets' href='/wallets'/>
        <Li liText='Summary'/>
        <Li liText='Accounts'/>
        <Li liText='Settings'/>

    </ul>

    </div>
    </div>
  )
}

export default Sidebar
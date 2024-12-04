import React from 'react'
import PageDesign from '../Component/PageDesign'
import BarChart from '../Component/BarChart'

const Expenses = () => {
  return (
    <PageDesign>
    <div className='flex'>
    <div className="left w-[710px]">Expenses
      <BarChart/>
    </div>

<div className="right w-[350px] h-[100%] bg-[#3f5f9e]">1</div>
    </div>
    </PageDesign>
  )
}

export default Expenses
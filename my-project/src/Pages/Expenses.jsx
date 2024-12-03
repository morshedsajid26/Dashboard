import React from 'react'
import PageDesign from '../Component/PageDesign'



const chartData = [
    { day: '1', value: 200 },
    { day: '2', value: 150 },
    { day: '3', value: 300 },
    { day: '4', value: 220 },
    { day: '5', value: 180 },
    { day: '6', value: 280 },
    { day: '7', value: 240 },
    { day: '8', value: 320 },
  ];

const Expenses = () => {
  return (
    

    <PageDesign>
        Expenses

        

        
        

    </PageDesign>
  )
};
const BarChart = () => (
    <div className="flex items-end space-x-1 h-32">
      {chartData.map((data, idx) => (
        <div key={idx} className="bg-blue-500 h-full w-6" style={{ height: `${data.value / 3.5}px` }}>
          <span className="sr-only">{`Day ${data.day}: ${data.value}`}</span>
        </div>
      ))}
    </div>
  );
  

export default Expenses
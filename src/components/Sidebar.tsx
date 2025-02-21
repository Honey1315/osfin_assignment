import React from 'react'
interface sidebar {
    title : string,
    path : string,
}
const Sidebar : React.FC = () => {
    const options : sidebar[] = [
        {title : "Flights", path : "/assets/svgs/Flightsmode.svg"},
        {title : "Hotels", path : "/assets/svgs/Hotel.svg"},
        {title : "Homestays", path : "/assets/svgs/Home filled.svg"},
        {title : "Holiday Plan", path : "/assets/svgs/Beach.svg"},
        {title : "Trains", path : "/assets/svgs/train.svg"},
        {title : "Buses", path : "/assets/svgs/Directions bus.svg"},
        {title : "Travel Insurance", path : "/assets/svgs/Shield.svg"}
    ]
  return (
    <div className='flex flex-col border-r border-[#D9D9D9] bg-[#F6F6F6] w-60'>
    
    <div className='flex p-6 border border-gray-300 gap-3'>
            <img src='/assets/svgs/Subtract.svg' alt='?'/>
            <h1 className='flex items-center text-black font-sans text-xl font-bold leading-9'>TrailBliss</h1>
    </div>

    {options.map((option,i)=>(
        (
            <div className='flex p-3 border border-gray-300 gap-3'>
                <img src={option.path} alt='?' className='w-5'/>
                <span className='text-black font-open-sans text-base font-semibold leading-normal'>{option.title}</span>
            </div>
        )
    ))}
    <div className='flex p-3 border border-gray-300 gap-3'>
            <img src='/assets/svgs/More vert.svg' alt='?'/>
            <span>More</span>
            <img src='/assets/svgs/tabler-icon-chevron-up.svg' alt='?'/>
    </div>

    </div>
  )
}

export default Sidebar
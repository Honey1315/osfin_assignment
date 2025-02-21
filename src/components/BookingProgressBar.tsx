import React from 'react'

interface bookingProgressBarProps {
  stepProgress : number
}

const BookingProgressBar : React.FC<bookingProgressBarProps> = ({stepProgress}) => {
  const PassengerDetails = ['In Progress', 'Completed', 'Completed'];
  const AddiInfo = ['Pending', 'In Progress', 'Completed'];
  const AddiInfoStyle = ['text-[#A8A8A8] text-center font-open-sans text-xs font-semibold leading-normal', 'text-[#0368C8] text-center font-open-sans text-xs font-semibold leading-normal', 'text-[#008C76] text-center font-open-sans text-xs font-semibold leading-normal'];
  const review = ['Pending', 'Pending', 'In Progress'];
  return (
    <div className="flex relative items-center justify-between w-full max-w-4xl self-center">
      {/* Step 1 */}
      <div className="flex flex-col items-center grow ">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-black font-semibold outline-white outline-4 outline">
          1
        </div>
        <p className="mt-2 text-sm font-semibold text-black">Passenger Details</p>
        <p className={stepProgress === 1 ? 'text-[#0368C8] text-center font-open-sans text-xs font-semibold leading-normal' : 'text-[#008C76] text-center font-open-sans text-xs font-semibold leading-normal'}>{PassengerDetails[stepProgress-1]}</p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center grow ">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-black font-semibold outline-white outline-4 outline">
          2
        </div>
        <p className="mt-2 text-sm font-semibold text-black">Additional Information</p>
        <p className={AddiInfoStyle[stepProgress-1]}>{AddiInfo[stepProgress-1]}</p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center grow ">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-black font-semibold outline-white outline-4 outline">
          3
        </div>
        <p className="mt-2 text-sm font-semibold text-black">Review and Submit</p>
        <p className={stepProgress === 3 ? 'text-[#0368C8] text-center font-open-sans text-xs font-semibold leading-normal' : 'text-[#A8A8A8] text-center font-open-sans text-xs font-semibold leading-normal'}>{review[stepProgress-1]}</p>
      </div>

      {/* Joining line */}
      <hr className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 -z-10'/>
    </div>
  )
}

export default BookingProgressBar
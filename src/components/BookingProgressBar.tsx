import React from 'react'

type Props = {}

const BookingProgressBar = (props: Props) => {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto mt-8">
      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-black font-semibold">
          1
        </div>
        <p className="mt-2 text-sm font-semibold text-black">Passenger Details</p>
        <p className="text-xs text-gray-500">Pending</p>
      </div>

      {/* Line between Step 1 and Step 2 */}
      <div className="flex-grow h-px bg-gray-300 mx-2"></div>

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-black font-semibold">
          2
        </div>
        <p className="mt-2 text-sm font-semibold text-black">Additional Information</p>
        <p className="text-xs text-gray-500">Pending</p>
      </div>

      {/* Line between Step 2 and Step 3 */}
      <div className="flex-grow h-px bg-gray-300 mx-2"></div>

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-black font-semibold">
          3
        </div>
        <p className="mt-2 text-sm font-semibold text-black">Review and Submit</p>
        <p className="text-xs text-gray-500">Pending</p>
      </div>
    </div>
  )
}

export default BookingProgressBar
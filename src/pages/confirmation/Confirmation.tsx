import React from 'react'

const Confirmation  : React.FC= () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className="w-4/5 p-6 text-center mt-[4rem] bg-white rounded-lg">
        <div>
          {/* Success Icon */}
          <div className="mx-auto mb-4 w-1/12 h-1/12 flex items-center justify-center">
            <img
              src="/assets/svgs/success-tick.svg"
              alt="Success Icon"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Message */}
          <h2 className="text-2xl font-semibold text-[#31A91D] mb-2">
            Congratulations! You have successfully booked tickets
          </h2>

          {/* Additional Information */}
          <p className="text-sm font-semibold text-[#808080] mt-4 text-center">
            Please carry ERS / VRM / SMS / Mail sent to your contact details,
            along with a relevant ID proof while travelling
          </p>
        </div>
      </div>
      <div className="w-4/5 m-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-[#202020]">
        {/* Header Section */}
        <div className="flex justify-between mb-6 text-sm text-gray-600">
          <div className="flex flex-row gap-1">
            <p>PNR No:</p>
            <p>1234567890</p>
          </div>
          <div className="flex flex-row gap-1">
            <p>Transaction ID:</p>
            <p>351511859256378</p>
          </div>
        </div>

        {/* Flight Details */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-bold text-900">Airbus A350-900</h3>
          </div>

          <div className="flex flex-row justify-between text-700 my-4">
            <p>Nov 16</p>
            <p>Nov 17</p>
          </div>

          <div className="flex whitespace-nowrap flex-row flex-nowrap content-center justify-between text-700 my-6">
            <div className="mr-4">
              <p>12:15</p>
              <p>New Delhi</p>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="text-gray-500 text-xs">2 hours 20 minutes</div>
              <div className="flex flex-row items-center w-full">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <hr className="flex-grow border-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
            </div>
            <div className="ml-4">
              <p>6:00</p>
              <p>Mumbai</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between align-center items-center text-700 my-6 ">
          <div className="text-gray-600">E-Tickets has been sent to:</div>
          <div>
            <p>Anshul Choudhry</p>
            <p>anshul***@*****.com</p>
          </div>
        </div>

        <div className="pt-6 my-6">
          <h3 className="">Traveller Details</h3>
          <h4>Anshul Chaudhary</h4>

          <div className="flex whitespace-nowrap flex-row flex-nowrap content-center justify-between mt-4 text-700">
            <div className="text-left">
              <p>Age: 24 Yrs</p>
              <p>Gender: Male</p>
            </div>
            <div className="text-right">
              <p>Booking Status : Confirmed</p>
              <p>Seat no. : 22A</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex whitespace-nowrap flex-row content-center justify-between">
            <b>Total Fare</b>
            <b>$300</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation
import React from 'react'
import { ReviewProps, PassengerInfo, FlightDetails } from '../../components/Review';
import { useLocation } from 'react-router-dom';


const Confirmation: React.FC = ()=> {

  const location=useLocation();
  const { flightDetails, passengerDetails, email, phoneNumber } = location.state as ReviewProps || {};
  function getAge(dateOfBirth: string): number {
    const dob = new Date(dateOfBirth);
    if (isNaN(dob.getTime())) return 0; // Handle invalid date
    const today = new Date();
    
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
  
    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    return age;
  }
  

  return (
    <div className="lg:w-3/5 w-5/6 md:3/4 mx-auto flex flex-col items-center mt-10 space-y-6">
      <div className="w-full text-center bg-white rounded-lg">
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
      <div className="w-full space-y-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-[#202020]">
        {/* Header Section */}
        <div className="flex justify-between text-sm text-gray-600">
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
          
          <h3 className="font-bold text-900 mb-2 text-base">{flightDetails.flightModel}</h3>
          
          <div className='flex w-full justify-between items-center gap-10'>
            <section className='flex text-sm flex-col gap-0'>
              <strong className='mb-2 font-semibold'>Nov 16</strong>
              <span>
                {flightDetails.arrivalTime}
              </span>
              <span>
                {flightDetails.boardingCity}
              </span>
            </section>


            <div className='flex flex-col gap-2 items-center grow'>

              <span className='text-xs text-gray-300'>2 hours 20 minutes</span>
              <hr id="confirm_flight_line" className='relative border-gray-200 border-1 w-full' />

            </div>

            <section className='flex text-sm flex-col gap-0'>
              <strong className='mb-2 font-semibold'>Nov 17</strong>
              <span>
                {flightDetails.departureTime}
              </span>
              <span>
                {flightDetails.destinationCity}
              </span>
              
            </section>

          </div>
          
        </div>

        <div className="text-sm flex flex-row justify-between align-center items-center text-700 my-6 ">
          <div className=" text-gray-700">E-Tickets has been sent to:</div>
          <div className='text-[#404040]'>
            <p>{passengerDetails[0].fullName}</p>
            <p>{email}</p>
          </div>
        </div>

        <ol>
          <h3>Traveller Details</h3>
          {passengerDetails.map((passenger) => (
            <div className='py-2'>
              <h4 className='text-sm'>{passenger.fullName}</h4>

              <div className="flex whitespace-nowrap flex-row flex-nowrap content-center justify-between my-2 text-gray-500 text-sm">
                <div className="text-left">
                  <p>Age: {getAge(passenger.dateOfBirth)} Yrs</p>
                  <p>Gender: {passenger.gender}</p>
                </div>
                <div className="text-right">
                  <p>Booking Status : Confirmed</p>
                  <p>Seat no. : 22A</p>
                </div>
              </div>
            </div>
          ))}
        </ol>

        <div>
          <div className="flex whitespace-nowrap content-center justify-between">
            <b>Total Fare</b>
            <b>$300</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation
import React from 'react';

interface PassengerInfo {
  fullName: string;
  dateOfBirth: string;
  gender: string;
}


interface FlightDetails {
  boardingStation: string;
  destinationStation: string;
  duration: string;
  boardingCity: string;
  destinationCity: string;
  arrivalTime: string;
  departureTime: string;
  flightName: string;
  flightNumber: string;
  flightModel: string;
}

interface ReviewProps {
  flightDetails: FlightDetails;
  passengerDetails: PassengerInfo[];
}

const Review: React.FC<ReviewProps> = ({ flightDetails, passengerDetails }) => {
  return (
    <div className='flex flex-col gap-6 p-8 w-full'>
      <div>
        <h1 className='flex text-black font-open-sans text-xl font-bold leading-normal tracking-[0px] py-5'>Review and Submit</h1>
        <div className="flex items-center mb-2 gap-4">
          <div className="font-semibold">
            {flightDetails.flightName}
          </div>
          <span className="text-gray-500">{flightDetails.flightNumber}</span>
          <div className="text-gray-500 text-sm rounded-full bg-[#F3F3F3] px-2 py-1">{flightDetails.flightModel}</div>
        </div>
        <div className="bg-gray-100 rounded-lg p-5">
          <div className="relative flex gap-2">
            <div className='flex flex-col justify-between'>
              <h1 className='text-black font-open-sans text-sm font-semibold leading-normal'>{flightDetails.arrivalTime}</h1>
              <h1 className='text-black font-open-sans text-sm font-semibold leading-normal'>{flightDetails.departureTime}</h1>
            </div>
            <img src='/assets/svgs/timeChain.svg' alt='duration'/>
            <div className='flex flex-col justify-between'>
              <div className='flex gap-2'>
                <div className='text-[#2D2D2D] font-open-sans text-sm font-semibold leading-normal'>{flightDetails.boardingCity} </div>
                <div className='text-[#626262] font-open-sans text-sm font-normal leading-normal'> {flightDetails.boardingStation}</div>
              </div>
              <div className='text-[#626262] font-open-sans text-sm font-normal leading-normal'>{flightDetails.duration}</div>
              <div className='flex gap-2'>
                <div className='text-[#2D2D2D] font-open-sans text-sm font-semibold leading-normal'>{flightDetails.destinationCity} </div>
                <div className='text-[#626262] font-open-sans text-sm font-normal leading-normal'>{flightDetails.destinationStation}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className='flex text-black font-open-sans text-lg font-semibold leading-normal'>Passenger Details</h1>
        <div className="bg-gray-100 rounded-lg p-5">
          {passengerDetails.map((passenger, index) => (
            <div key={index} className="flex justify-between">
              <p className="text-[#626262] font-open-sans text-sm font-normal leading-normal">Name</p>
              <p className="text-black font-open-sans text-sm font-semibold leading-normal">{passenger.fullName}</p>
              <p className="text-[#626262] font-open-sans text-sm font-normal leading-normal">Date of Birth</p>
              <p className="text-black font-open-sans text-sm font-semibold leading-normal">{passenger.dateOfBirth}</p>
              <p className="text-[#626262] font-open-sans text-sm font-normal leading-normal">Gender</p>
              <p className="text-black font-open-sans text-sm font-semibold leading-normal">{passenger.gender}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=''>
        <h1 className='flex text-black font-open-sans text-lg font-semibold leading-normal'>Baggage Options</h1>
        <div className="bg-gray-100 rounded-lg p-5">
          <div className='flex gap-3 pb-2'>
            <img src='/assets/svgs/tabler-icon-circle-check-filled.svg' alt='c'/>
            <p>Included</p>
            <p>Baggage per person</p>
          </div>
          <div className='flex gap-6'>
            <div className='flex gap-2'>
              <img src='/assets/svgs/tabler-icon-briefcase.svg' alt='c'/>
              <p className='text-sm flex items-center'>Cabin Baggage</p>
              <p className='text-[#626262] font-open-sans text-xs font-normal leading-normal flex items-center'>7 kgs (1 piece only) / Adult</p>
            </div>
            <div className='flex gap-2'>
              <img src='/assets/svgs/tabler-icon-luggage.svg' alt='c'/>
              <p className='text-sm flex items-center'>Check-In Baggage</p>
              <p className='text-[#626262] font-open-sans text-xs font-normal leading-normal flex items-center'>15 Kgs (1 piece only) / Adult</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

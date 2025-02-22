import React from 'react';

export interface PassengerInfo {
  fullName: string;
  dateOfBirth: string;
  gender: string;
}


export interface FlightDetails {
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

export interface ReviewProps {
  flightDetails: FlightDetails;
  passengerDetails: PassengerInfo[];
  email : string,
  phoneNumber : string
  cost : number
  secure : boolean
}

const Review: React.FC<ReviewProps> = ({ flightDetails, passengerDetails, email, phoneNumber, secure }) => {
  return (
    <div className='flex flex-col gap-6 w-full'>
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
              <p className="text-black font-open-sans text-sm font-semibold leading-normal capitalize">{passenger.gender}</p>
            </div>
          ))}
          <div className="flex w-2/4 justify-between">
              <p className="text-[#626262] font-open-sans text-sm font-normal leading-normal">Phone Number</p>
              <p className="text-black font-open-sans text-sm font-semibold leading-normal">{phoneNumber}</p>
              <p className="text-[#626262] font-open-sans text-sm font-normal leading-normal">Email</p>
              <p className="text-black font-open-sans text-sm font-semibold leading-normal">{email}</p>
            </div>
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
     { secure && ( <div>
      <h3 className="font-semibold">
        Your trip is secured
      </h3>      
      <div className="bg-[#FDF1DC] rounded-lg p-4">
        <ul className="grid grid-cols-4 gap-6">
          <InsuranceFeature
            icon="/assets/svgs/tabler-icon-luggage.svg"
            titleStarting="support"
            titleEnding="24x7"
            description="Baggage Assistance"
            reverseTitle
          />
          <InsuranceFeature
            icon="/assets/svgs/tabler-icon-ambulance.svg"
            titleStarting="Flat"
            titleEnding="$ 50,000"
            description="Personal Accident"
          />
          <InsuranceFeature
            icon="/assets/svgs/tabler-icon-luggage.svg"
            titleStarting="Flat"
            titleEnding="$ 2,500"
            description="Loss of checked in Baggage"
          />
          <InsuranceFeature
            icon="/assets/svgs/tabler-icon-clock-exclamation.svg"
            titleStarting="Flat"
            titleEnding="$ 2,500"
            description="Delay of Checked in Baggage"
          />
        </ul>      
      </div>
      </div>)}
    </div>
  );
};

const InsuranceFeature: React.FC<{
  icon: string;
  titleStarting: string;
  titleEnding: string;
  description: string;
  reverseTitle?: boolean;
}> = ({ icon, titleStarting, titleEnding, description, reverseTitle }) => (
  <li className="flex justify-start gap-3 bg-white rounded-lg p-4 h-fit">
    <div className="flex-shrink-0 ">
      <img src={icon} alt={titleStarting} />
    </div>
    <div className="space-y-2">
      <p className={`font-medium text-gray-500 flex gap-2 items-end text-xs ${reverseTitle ? 'flex-row-reverse justify-end' : ''}`}>
      {titleStarting}<strong className="text-[#008C76] text-lg leading-none">{titleEnding}</strong>
      </p> 
      <p className="text-xs leading-4">{description}</p>
    </div>
  </li>
);
export default Review;

import { useState } from "react";

const AdditionalInfo = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm border border-gray-200">

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


      {/* Header Section */}
      <h3 className="text-[1.125rem] font-bold text-gray-900 flex items-center gap-2">
        Make your Trip Secure
      </h3>      
      <div className="bg-[#FDF1DC] rounded-lg p-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-[1.125rem] text-400 mt-1">
              <span className="text-600">360 $</span>/ Traveller (18%GST included)
            </p>
          </div>
        </div>

        {/* Features List */}
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
          />        </ul>      
      </div>   
      <TripSecurityToggle/> 
    </div>
  );
};

const TripSecurityToggle = () => {
  const [selectedOption, setSelectedOption] = useState<'secure' | 'without'>('secure');

  return (
    <div >
      <label className="flex items-center p-2 rounded-lg cursor-pointer transition-colors">
        <input
          type="radio"
          name="tripSecurity"
          checked={selectedOption === 'secure'}
          onChange={() => setSelectedOption('secure')}
          className="h-4 w-4 text-purple-600 rounded-full border-gray-300 focus:ring-purple-500"
        />
        <span className="ml-6 font-medium text-400">
          <strong className="text-black-600">Yes</strong>, Secure my trip.
        </span>
      </label>
      <label className="flex items-center p-2 rounded-lg cursor-pointer transition-colors">
        <input
          type="radio"
          name="tripSecurity"
          checked={selectedOption === 'without'}
          onChange={() => setSelectedOption('without')}
          className="h-4 w-4 text-purple-600 rounded-full border-gray-300 focus:ring-purple-500"
        />
        <span className="ml-6 font-medium text-400">
          <strong className="text-black-600">No</strong>, I will book without trip secure.
        </span>      
      </label>
    </div>    
  );
};


// Reusable Insurance Feature Component
const InsuranceFeature = ({ icon, titleStarting,titleEnding, description ,reverseTitle }: { 
  icon: string;
  titleStarting: string;
  titleEnding: string;
  description: string;
  reverseTitle?: boolean;
}) => (
  <li className="flex items-start gap-3 bg-white rounded-lg p-4">
    <div className="flex-shrink-0 mt-1">
      <img src={icon} alt={titleStarting} />
    </div>
    <div>
      <p className={`font-medium text-gray-900 flex gap-2 ${reverseTitle ? 'flex-row-reverse' : ''}`}>
      {titleStarting}<strong className="text-[#008C76] font-[700] text-[1.25rem]">{titleEnding}</strong>
      </p> 
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </li>
);


export default AdditionalInfo;
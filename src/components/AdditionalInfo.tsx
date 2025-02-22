import { useState } from "react";

const AdditionalInfo = () => {
  return (
    <div className="space-y-4">
      <h2 className="!mb-5">Additional Information</h2>

      
        <h3 className='font-semibold'>Baggage Options</h3>
        <div className="bg-[#F6F6F6] rounded-lg p-5 space-y-1">
          <div className='flex gap-2 pb-2'>
            <img src='/assets/svgs/tabler-icon-circle-check-filled.svg' alt='c'/>
            <p className="font-semibold text-sm">Included</p>
            <p className="font-normal text-sm">Baggage per person</p>
          </div>
          <div className='flex gap-10'>
            <div className='flex gap-2 items-center !text-xs '>
              <img src='/assets/svgs/tabler-icon-briefcase.svg' alt='c'/>
              <p className='font-semibold'>Cabin Baggage</p>
              <p className='text-gray-500'>7 kgs (1 piece only) / Adult</p>
            </div>
            <div className='flex gap-2 items-center !text-xs '>
              <img src='/assets/svgs/tabler-icon-luggage.svg' alt='c'/>
              <p className='font-semibold'>Check-In Baggage</p>
              <p className='text-gray-500'>15 Kgs (1 piece only) / Adult</p>
            </div>
          </div>
          <div className="p-3 bg-[#ECEFFF] rounded-lg flex items-start gap-1 !mt-3">
            <img src="/assets/svgs/tabler-icon-info-circle-filled.svg" alt="Baggage Options Info Icon" />
            <div className="space-y-1">
              <h4 className="text-xs font-semibold">
              One- way Trip Combination
              </h4>
              <p className="text-xs">This trip combines 2 independent one-way with separate terms for changes. For more information, see our Terms and Conditions here.</p>
            </div>
          </div>
        </div>


      {/* Header Section */}
      <h3 className="font-semibold">
        Make your Trip Secure
      </h3>      
      <div className="bg-[#FDF1DC] rounded-lg p-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm">
              <span className="font-semibold !text-lg">360 $</span>/ Traveller (18%GST included)
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
      <label className="flex justify-start w-fit items-center p-2 gap-3 rounded-lg cursor-pointer transition-colors">
        <input
          type="radio"
          name="tripSecurity"
          checked={selectedOption === 'secure'}
          onChange={() => setSelectedOption('secure')}
          className="h-4 w-4 text-purple-600 rounded-full border-gray-300 focus:ring-purple-500"
        />
        <span className="font-medium">
          <strong className="font-semibold">Yes</strong>, Secure my trip.
        </span>
      </label>
      <label className="flex justify-start w-fit items-center p-2 gap-3 rounded-lg cursor-pointer transition-colors">
        <input
          type="radio"
          name="tripSecurity"
          checked={selectedOption === 'without'}
          onChange={() => setSelectedOption('without')}
          className="h-4 w-4 text-purple-600 rounded-full border-gray-300 focus:ring-purple-500"
        />
        <span className="font-medium ">
          <strong className="font-semibold">No</strong>, I will book without trip secure.
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


export default AdditionalInfo;
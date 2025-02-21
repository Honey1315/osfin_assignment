import React, { useState, useEffect } from 'react';

interface PassengerInfo {
  fullName: string;
  dateOfBirth: string;
  gender: string;
}

interface PassengerDetailsProps {
  passengerDetails: PassengerInfo[];
  setPassengerDetails: React.Dispatch<React.SetStateAction<PassengerInfo[]>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  flightDetails : FlightDetails
  email : string,
  setEmail : React.Dispatch<React.SetStateAction<string>>,
  phoneNumber : string,
  setPhoneNumber : React.Dispatch<React.SetStateAction<string>>
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

const PassengerDetails: React.FC<PassengerDetailsProps> = ({ passengerDetails, setPassengerDetails, setIsValid, flightDetails, email, setEmail, phoneNumber, setPhoneNumber}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [activeField, setActiveField] = useState<string | null>(null);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'fullName' && value.length < 3) {
      error = 'Name should be at least 3 characters long';
    } else if (name === 'dateOfBirth') {
      const age = new Date().getFullYear() - new Date(value).getFullYear();
      if (age > 90) error = 'Date of birth cannot be more than 90 years ago';
    }
    return error;
  };

  const handleInputChange = (index: number, field: keyof PassengerInfo, value: string) => {
    const updatedPassengers = [...passengerDetails];
    updatedPassengers[index] = { ...updatedPassengers[index], [field]: value };
    setPassengerDetails(updatedPassengers);

    // Validate the field and set the error immediately
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [`${field}-${index}`]: error }));
  };

  const addPassenger = () => {
    if (passengerDetails.length === 10) return ;
    setPassengerDetails([...passengerDetails, { fullName: '', dateOfBirth: '', gender: '' }]);
  };

  const removePassenger = (index: number) => {
    setPassengerDetails(passengerDetails.filter((_, i) => i !== index));
  };

  const handleFocus = (field: string) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const validateAllFields = () => {
    let isAllValid = true;
    passengerDetails.forEach((passenger, index) => {
      const nameError = validateField('fullName', passenger.fullName);
      const dobError = validateField('dateOfBirth', passenger.dateOfBirth);
      const genderError = passenger.gender ? '' : 'Please select a gender';

      if (nameError || dobError || genderError) {
        isAllValid = false;
      }

      setErrors(prev => ({
        ...prev,
        [`fullName-${index}`]: nameError,
        [`dateOfBirth-${index}`]: dobError,
        [`gender-${index}`]: genderError
      }));
    });
    setIsValid(isAllValid);
  };

  useEffect(() => {
    validateAllFields();
  }, [passengerDetails]);

  return (
    <div>

      {/* Flight Banner */}
      <section id="banner">
        <div className='flex flex-row justify-center items-center h-full'>
          {/* Airplane and clouds */}
          <div className=' -z-10 w-1/4'>
            <img className='w-full h-full object-cover scale-150' src="/assets/images/banner-airplane.png" alt="Airplane and Clouds of Banner" />
          </div>
          {/* Details of Flight */}
          <section className='flex flex-row justify-between gap-4 h-full pl-8 pr-20 py-6 grow'>
            <div className='flex flex-row gap-6'>
              <img className='h-1/2' src="/assets/svgs/indigo-logo.svg" alt="Indigo Logo" />
              <div className='space-y-1'>
                <h3>{flightDetails.flightName}</h3>
                <p className='text-sm text-gray-500'>{flightDetails.flightModel}</p>
                <span className='text-xs text-gray-500 flex gap-1'>
                <img src="/assets/svgs/tabler-icon-plane-inflight.svg" alt="Indigo Logo" />
                  <span>{flightDetails.duration}</span>
                  </span>
              </div>
            </div>
            <div className='border-l w-1 h-full self-stretch border-gray-400 border-dashed' />
            <div className='flex gap-10'>
              <section className='space-y-2'>
                <h3 className='text-2xl'>{flightDetails.arrivalTime}</h3>
                <hr className='border w-full border-gray-300'/>
                <p className='flex gap-2'>
                  <img src="/assets/svgs/ArrowCircleUpLeft.svg" alt="Banner Location Icon" />
                  {flightDetails.boardingCity}</p>
              </section>
              {/* Non-Stop Sign */}
              <div className='flex justify-center items-center flex-col'>
                <img src="/assets/svgs/tabler-icon-plane.svg" alt="Non-stop Icon" />
                <span className='text-[0.625rem] text-gray-400'>Non-stop</span>
              </div>
              <section className='space-y-2'>
                <h3 className='text-2xl'>{flightDetails.departureTime}</h3>
                <hr className='border w-full border-gray-300'/>
                <p className='flex gap-2'>
                  <img src="/assets/svgs/ArrowCircleUpLeft.svg" alt="Banner Location Icon" />
                  {flightDetails.destinationCity}</p>
              </section>
            </div>
            </section>
        </div>
      </section>

      {passengerDetails.map((passenger, index) => (
        <div>
        <div key={index} className="py-2 flex justify-between w-full gap-14">
          <div className='w-full'>
            <p className="text-black font-open-sans text-sm font-semibold leading-normal">Full Name</p>
            <input
              type="text"
              value={passenger.fullName}
              onChange={(e) => handleInputChange(index, 'fullName', e.target.value)}
              onFocus={() => handleFocus('fullName')}
              onBlur={handleBlur}
              placeholder="Full Name"
              className={`border p-2 ${errors[`fullName-${index}`] && activeField === 'fullName' ? 'border-red-500' : 'border-gray-300'} w-full rounded-md bg-[#F6F6F6]`}
            />
            {errors[`fullName-${index}`] && activeField === 'fullName' && <p className="text-red-500 text-sm">{errors[`fullName-${index}`]}</p>}
          </div>
          <div className='w-full'>
            <p className="text-black font-open-sans text-sm font-semibold leading-normal">Date of birth</p>
            <input
              placeholder='Enter your Full Name'
              type="date"
              value={passenger.dateOfBirth}
              onChange={(e) => handleInputChange(index, 'dateOfBirth', e.target.value)}
              onFocus={() => handleFocus('dateOfBirth')}
              onBlur={handleBlur}
              className={`border p-2 ${errors[`dateOfBirth-${index}`] && activeField === 'dateOfBirth' ? 'border-red-500' : 'border-gray-300'} w-full rounded-md bg-[#F6F6F6]`}
            />
            {errors[`dateOfBirth-${index}`] && activeField === 'dateOfBirth' && <p className="text-red-500 text-sm">{errors[`dateOfBirth-${index}`]}</p>}
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2 text-sm font-semibold">Gender</label>
            <div className="flex space-x-4">
              {['Male', 'Female', 'Other'].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name={`gender-${index}`}
                    value={option.toLowerCase()}
                    checked={passenger.gender === option.toLowerCase()}
                    onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
                    onFocus={() => handleFocus('gender')}
                    onBlur={handleBlur}
                    className="mr-2"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
            {errors[`gender-${index}`] && activeField === 'gender' && <p className="text-red-500 text-sm">{errors[`gender-${index}`]}</p>}
          </div>
          
        </div>
        {index > 0 && (
            <button onClick={() => removePassenger(index)} className="text-red-600 font-inter text-sm font-semibold pb-2 underline">
              Remove
            </button>
          )}
        </div>
      ))}
      <button onClick={addPassenger} className="text-[#6B6B6B] font-inter text-sm font-semibold leading-5 tracking-[0px]">
        + Add Passenger
      </button>

      <div className='flex gap-5 justify-start'>

      <div className=''>
            <p className="text-black font-open-sans text-sm font-semibold leading-normal">Phone Number</p>
              <div className='flex gap-2'>
              <div className='flex border p-2 rounded-md bg-[#F6F6F6]'>
                <img src='./assets/svgs/India (IN).svg' alt='?' className='w-6'/>
                <img src='./assets/svgs/tabler-icon-chevron-up (1).svg' alt='?' className='w-6'/>
              </div>
              <input
              type="phone"
              value={phoneNumber}
              onChange={(e)=> setPhoneNumber((prev)=> e.target.value)}
              onBlur={handleBlur}
              placeholder="(+91) 999-9999"
              className={`border p-2 rounded-md bg-[#F6F6F6]`}
            />
              </div>
      </div>

        <div className=''>
            <p className="text-black font-open-sans text-sm font-semibold leading-normal">Email Address</p>
              <input
              type="email"
              value={email}
              onChange={(e)=> setEmail((prev)=> e.target.value)}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className={`border p-2 rounded-md bg-[#F6F6F6]`}
            />
        </div>


      </div>

    </div>
  );
};

export default PassengerDetails;

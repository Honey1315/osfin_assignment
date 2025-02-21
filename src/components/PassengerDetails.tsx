import React, { useState } from 'react';

interface PassengerInfo {
  fullName: string;
  dateOfBirth: string;
  gender: string;
}

interface PassengerDetailsProps {
  passengerDetails: PassengerInfo[];
  setPassengerDetails: React.Dispatch<React.SetStateAction<PassengerInfo[]>>;
}

const PassengerDetails: React.FC<PassengerDetailsProps> = ({ passengerDetails, setPassengerDetails }) => {
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
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const addPassenger = () => {
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

  return (
    <div>
      <h2>Passenger Details</h2>
      {passengerDetails.map((passenger, index) => (
        <div key={index} className="mb-4 flex justify-between">
          <div>
          <p className="text-black font-open-sans text-sm font-semibold leading-normal">Full Name</p>
          <input
            type="text"
            value={passenger.fullName}
            onChange={(e) => handleInputChange(index, 'fullName', e.target.value)}
            onFocus={() => handleFocus('fullName')}
            onBlur={handleBlur}
            placeholder="Full Name"
            className={`border p-2 ${errors.fullName && activeField === 'fullName' ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.fullName && activeField === 'fullName' && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>
          <div>
          <p className="text-black font-open-sans text-sm font-semibold leading-normal">Date of birth</p>
          <input
            placeholder='Enter your Full Name'
            type="date"
            value={passenger.dateOfBirth}
            onChange={(e) => handleInputChange(index, 'dateOfBirth', e.target.value)}
            onFocus={() => handleFocus('dateOfBirth')}
            onBlur={handleBlur}
            className={`border p-2 ${errors.dateOfBirth && activeField === 'dateOfBirth' ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.dateOfBirth && activeField === 'dateOfBirth' && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
          </div>
          <div>
          <p className="text-black font-open-sans text-sm font-semibold leading-normal">Gender</p>
          <select
            title='Select your gender'
            value={passenger.gender}
            onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
            onFocus={() => handleFocus('gender')}
            onBlur={handleBlur}
            className="border p-2 border-gray-300"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          </div>
          {index > 0 && (
            <button onClick={() => removePassenger(index)} className="bg-red-500 text-white p-2 ml-2">
              Remove
            </button>
          )}
        </div>
      ))}
      <button onClick={addPassenger} className="text-[#6B6B6B] font-inter text-sm font-semibold leading-5 tracking-[0px]">
      +  Add Passenger
      </button>
    </div>
  );
};

export default PassengerDetails;

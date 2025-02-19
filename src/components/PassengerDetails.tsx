import React, { useState, useEffect } from 'react';

interface Passenger {
  fullName: string;
  dateOfBirth: string;
  gender: string;
}

interface ValidationErrors {
  fullName?: string;
  dateOfBirth?: string;
  gender?: string;
}

const PassengerDetails: React.FC = () => {
  const [formData, setFormData] = useState<Passenger[]>([
    {
      fullName: "",
      dateOfBirth: "",
      gender: ""
    }
  ]);
  const [contact, setContact] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<ValidationErrors[]>([{}]);
  const [contactError, setContactError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const validateField = (field: keyof Passenger, value: string, index: number) => {
    let error = '';
    switch (field) {
      case 'fullName':
        if (value.length < 3) error = 'Name should be at least 3 characters long';
        break;
      case 'dateOfBirth':
        const age = new Date().getFullYear() - new Date(value).getFullYear();
        if (age > 90) error = 'Date of birth cannot be more than 90 years ago';
        break;
      case 'gender':
        if (!value) error = 'Please select a gender';
        break;
    }
    setErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = { ...newErrors[index], [field]: error };
      return newErrors;
    });
  };

  const validateContact = (value: string) => {
    if (value.length !== 10 || !['6', '7', '8', '9'].includes(value[0])) {
      setContactError('Please enter a valid 10-digit mobile number');
    } else {
      setContactError('');
    }
  };
  

  const validateEmail = (value: string) => {
    if (!value.includes('@') || !value.includes('.') || value.length < 5) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };
  

  const handleInputChange = (index: number, field: keyof Passenger, value: string) => {
    setFormData(prevFormData => {
      const updatedFormData = [...prevFormData];
      updatedFormData[index] = {
        ...updatedFormData[index],
        [field]: value
      };
      return updatedFormData;
    });
    validateField(field, value, index);
  };

  const addPassenger = () => {
    setFormData(prevFormData => [
      ...prevFormData,
      {
        fullName: "",
        dateOfBirth: "",
        gender: ""
      }
    ]);
    setErrors(prevErrors => [...prevErrors, {}]);
  };

  const removePassenger = (indexToRemove: number) => {
    setFormData(prevFormData =>
      prevFormData.filter((_, index) => index !== indexToRemove)
    );
    setErrors(prevErrors => prevErrors.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="p-4">
      <div className='flex p-4'>Passenger Details</div>
      {formData.map((passenger, index) => (
        <div key={index} className="mb-6 relative rounded-md shadow-sm bg-white p-4">
          <h2 className="text-lg font-medium mb-4 text-gray-700 flex">Passenger {index + 1} Details</h2>
          <div className="space-y-4 flex gap-10">
            <div className='flex flex-col relative'>
              <div className='flex'>Full name</div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={passenger.fullName}
                onChange={(e) => handleInputChange(index, 'fullName', e.target.value)}
                className={`w-full h-14 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 ${errors[index].fullName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors[index].fullName ? (
                <span className="absolute right-3 top-10 text-red-500">✗</span>
              ) : passenger.fullName.length >= 3 && (
                <span className="absolute right-3 top-10 text-green-500">✓</span>
              )}
              {errors[index].fullName && <p className="text-xs text-red-500 mt-1">{errors[index].fullName}</p>}
            </div>
            <div className='flex flex-col relative'>
              <div className='flex'>Date of Birth</div>
              <input
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
                value={passenger.dateOfBirth}
                onChange={(e) => handleInputChange(index, 'dateOfBirth', e.target.value)}
                className={`w-full h-14 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 ${errors[index].dateOfBirth ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors[index].dateOfBirth ? (
                <span className="absolute right-3 top-10 text-red-500">✗</span>
              ) : passenger.dateOfBirth && (
                <span className="absolute right-3 top-10 text-green-500">✓</span>
              )}
              {errors[index].dateOfBirth && <p className="text-xs text-red-500 mt-1">{errors[index].dateOfBirth}</p>}
            </div>
            <div className='flex flex-col'>
              <div className='flex'>Gender</div>
              <div className="flex items-center space-x-4">
                {['Male', 'Female', 'Others'].map((genderOption) => (
                  <label key={genderOption} className="flex items-center space-x-2 text-gray-700">
                    <input
                      type="radio"
                      name={`gender-${index}`}
                      value={genderOption}
                      checked={passenger.gender === genderOption}
                      onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span>{genderOption}</span>
                  </label>
                ))}
              </div>
              {errors[index].gender && <p className="text-xs text-red-500 mt-1">{errors[index].gender}</p>}
            </div>
          </div>
          {formData.length > 1 && (
            <button
              onClick={() => removePassenger(index)}
              className="absolute top-2 right-2 px-2 py-1 text-sm text-red-600 hover:text-red-800 focus:outline-none"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addPassenger}
        className="flex p-4"
      >
        + Add a Passenger
      </button>
      
      <div className='flex gap-10 p-4'>
        <div className='relative'>
          <div className='flex'>Phone Number</div>
          <div className='flex'>
            <div className="h-14 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400">
              +91
            </div>
            <input
              type="text"
              name="contact"
              placeholder="Phone Number"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                validateContact(e.target.value);
              }}
              className={`w-full h-14 px-4 py-2 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 ${contactError ? 'border-red-500' : ''}`}
            />
          </div>
          {contactError ? (
            <span className="absolute right-3 top-10 text-red-500">✗</span>
          ) : contact.length === 10 && (
            <span className="absolute right-3 top-10 text-green-500">✓</span>
          )}
          {contactError && <p className="text-xs text-red-500 mt-1">{contactError}</p>}
        </div>
        <div className='relative'>
          <div className='flex'>Email Address</div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={`w-full h-14 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
          />
          {emailError ? (
            <span className="absolute right-3 top-10 text-red-500">✗</span>
          ) : email && !emailError && (
            <span className="absolute right-3 top-10 text-green-500">✓</span>
          )}
          {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;

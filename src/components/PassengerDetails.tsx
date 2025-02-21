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
    flightDetails: FlightDetails;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    phoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    savedPassengers: PassengerInfo[];
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

const PassengerDetails: React.FC<PassengerDetailsProps> = ({
    passengerDetails,
    setPassengerDetails,
    setIsValid,
    flightDetails,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    savedPassengers
}) => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [activeField, setActiveField] = useState<string | null>(null);
    const [selectedSavedPassengers, setSelectedSavedPassengers] = useState<PassengerInfo[]>([]);

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

    const handleInputChange = (
        index: number,
        field: keyof PassengerInfo,
        value: string
    ) => {
        const updatedPassengers = [...passengerDetails];
        updatedPassengers[index] = { ...updatedPassengers[index], [field]: value };
        setPassengerDetails(updatedPassengers);

        const error = validateField(field, value);
        setErrors((prev) => ({ ...prev, [`${field}-${index + 1}`]: error }));
    };

    const addPassenger = () => {
        if (passengerDetails.length === 10) return;
        setPassengerDetails([
            ...passengerDetails,
            { fullName: '', dateOfBirth: '', gender: '' },
        ]);
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
        const newErrors: { [key: string]: string } = {};

        passengerDetails.forEach((passenger, index) => {
            const nameError = validateField('fullName', passenger.fullName);
            const dobError = validateField('dateOfBirth', passenger.dateOfBirth);
            const genderError = passenger.gender ? '' : 'Please select a gender';

            if (nameError || dobError || genderError) {
                isAllValid = false;
            }

            newErrors[`fullName-${index + 1}`] = nameError;
            newErrors[`dateOfBirth-${index + 1}`] = dobError;
            newErrors[`gender-${index + 1}`] = genderError;
        });

        // Simple phone number validation
        if (phoneNumber.length !== 10 || !['6', '7', '8', '9'].includes(phoneNumber[0])) {
            isAllValid = false;
            newErrors['phoneNumber'] = 'Please enter a valid 10-digit phone number';
        }

        // Simple email validation
        if (!email.includes('@') || !email.includes('.')) {
            isAllValid = false;
            newErrors['email'] = 'Please enter a valid email address';
        }

        setErrors((prev) => ({ ...prev, ...newErrors }));
        setIsValid(isAllValid);
    };

    useEffect(() => {
        validateAllFields();
    }, [passengerDetails, phoneNumber, email]);

    // const toggleSavedPassenger = (passenger: PassengerInfo) => {
    //     const isSelected = selectedSavedPassengers.some(p => p.fullName === passenger.fullName && p.dateOfBirth === passenger.dateOfBirth && p.gender === passenger.gender);

    //     if (isSelected) {
    //         setSelectedSavedPassengers(prev => prev.filter(p => p.fullName !== passenger.fullName || p.dateOfBirth !== passenger.dateOfBirth || p.gender !== passenger.gender));
    //         setPassengerDetails(prev => prev.filter(p => p.fullName !== passenger.fullName || p.dateOfBirth !== passenger.dateOfBirth || p.gender !== passenger.gender));
    //     } else {
    //         setSelectedSavedPassengers(prev => [...prev, passenger]);
    //         setPassengerDetails(prev => [...prev, passenger]);
    //     }
    // };


    const toggleSavedPassenger = (passenger: PassengerInfo) => {
        const isSelected = selectedSavedPassengers.some(p => 
            p.fullName === passenger.fullName && 
            p.dateOfBirth === passenger.dateOfBirth && 
            p.gender === passenger.gender
        );
    
        if (isSelected) {
            setSelectedSavedPassengers(prev => prev.filter(p => 
                p.fullName !== passenger.fullName || 
                p.dateOfBirth !== passenger.dateOfBirth || 
                p.gender !== passenger.gender
            ));
            setPassengerDetails(prev => prev.filter(p => 
                p.fullName !== passenger.fullName || 
                p.dateOfBirth !== passenger.dateOfBirth || 
                p.gender !== passenger.gender
            ));
        } else {
            setSelectedSavedPassengers(prev => [...prev, passenger]);
    
            setPassengerDetails(prev => {
                if (prev.length === 1 && prev[0].fullName === '' && prev[0].dateOfBirth === '' && prev[0].gender === '') {
                    // Replace the empty entry with actual passenger details
                    return [passenger];
                } else {
                    // Append to the list
                    return [...prev, passenger];
                }
            });
        }
    };
    
    return (
        <div className="space-y-4">
            <h2 className="!mb-5">Passenger Details</h2>

            {savedPassengers.length > 0 && (
                <div className="mb-4 space-y-2 bg-white rounded-lg  drop-shadow p-4">
                    <h3 className="text-lg font-medium">Saved Passengers</h3>
                    <div className="flex flex-wrap gap-[3.75rem]">
                        {savedPassengers.map((passenger, index) => {
                            const isSelected = selectedSavedPassengers.some(p => p.fullName === passenger.fullName && p.dateOfBirth === passenger.dateOfBirth && p.gender === passenger.gender);
                            return (
                                <>
                                    <label key={index} className="flex items-center space-x-3 cursor-pointer font-normal font-sm">
                                        <input
                                        type="checkbox"
                                        name="selectedPassenger"
                                        value={passenger.fullName}
                                        checked={isSelected}
                                        onChange={() => toggleSavedPassenger(passenger)}
                                        className=""
                                        />
                                        <div
                                        className=""
                                        >
                                        {passenger.fullName}
                                        </div>
                                    </label>
                                    


                                </>
                            );
                        })}
                    </div>
                </div>
            )}

            {passengerDetails.map((passenger, index) => (
                <div key={index} className="flex flex-col items-start gap-1">
                    <h3>Passenger {index + 1} Details</h3>
                    <div className="py-2 flex justify-between w-full gap-8 align-start">
                        <div className="w-full">
                            <label
                                htmlFor={`P${index + 1}_FullName`}
                                className="text-black font-open-sans text-sm font-semibold leading-normal"
                            >
                                Full Name
                            </label>
                            <input
                                id={`P${index + 1}_FullName`}
                                type="text"
                                value={passenger.fullName}
                                onChange={(e) =>
                                    handleInputChange(index, 'fullName', e.target.value)
                                }
                                onFocus={() => handleFocus('fullName')}
                                onBlur={handleBlur}
                                placeholder="Full Name"
                                className={`border p-2 ${errors[`fullName-${index + 1}`] && activeField === 'fullName'
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    } w-full rounded-md bg-[#F6F6F6]`}
                            />
                            {errors[`fullName-${index + 1}`] && activeField === 'fullName' && (
                                <p className="text-red-500 text-sm">
                                    {errors[`fullName-${index + 1}`]}
                                </p>
                            )}
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor={`P${index + 1}_DOB`}
                                className="text-black font-open-sans text-sm font-semibold leading-normal"
                            >
                                Date of birth
                            </label>
                            <input
                                id={`P${index + 1}_DOB`}
                                type="date"
                                value={passenger.dateOfBirth}
                                onChange={(e) =>
                                    handleInputChange(index, 'dateOfBirth', e.target.value)
                                }
                                onFocus={() => handleFocus('dateOfBirth')}
                                onBlur={handleBlur}
                                className={`border p-2 ${errors[`dateOfBirth-${index + 1}`] &&
                                    activeField === 'dateOfBirth'
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    } w-full rounded-md bg-[#F6F6F6]`}
                            />
                            {errors[`dateOfBirth-${index + 1}`] &&
                                activeField === 'dateOfBirth' && (
                                    <p className="text-red-500 text-sm">
                                        {errors[`dateOfBirth-${index + 1}`]}
                                    </p>
                                )}
                        </div>
                        <div className="flex flex-col w-full">
                            <label
                                htmlFor={`P${index + 1}_Gender`}
                                className="mb-2 text-sm font-semibold"
                            >
                                Gender
                            </label>
                            <div id={`P${index + 1}_Gender`} className="flex space-x-4">
                                {['Male', 'Female', 'Other'].map((option) => (
                                    <label key={option} className="flex items-center font-normal">
                                        <input
                                            type="radio"
                                            name={`gender-${index + 1}`}
                                            value={option.toLowerCase()}
                                            checked={passenger.gender === option.toLowerCase()}
                                            onChange={(e) =>
                                                handleInputChange(index, 'gender', e.target.value)
                                            }
                                            onFocus={() => handleFocus('gender')}
                                            onBlur={handleBlur}
                                            className="mr-2"
                                        />
                                        <span className="text-sm">{option}</span>
                                    </label>
                                ))}
                            </div>
                            {errors[`gender-${index + 1}`] && activeField === 'gender' && (
                                <p className="text-red-500 text-sm">
                                    {errors[`gender-${index + 1}`]}
                                </p>
                            )}
                        </div>
                    </div>
                    {index > 0 && (
                        <button
                            onClick={() => removePassenger(index)}
                            className="text-red-600 font-inter text-sm font-semibold pb-2 underline"
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}
            <button
                onClick={addPassenger}
                className="flex gap-1 items-center text-[#6B6B6B] font-inter text-sm font-semibold leading-5 tracking-[0px]"
            >
                <img src="/assets/svgs/tabler-icon-plus.svg" alt="Add a Passenger Icon" />
                <span>Add a Passenger</span>
            </button>
            <div className="flex gap-8 justify-start !mt-4">
                <div className="w-full max-w-[30svw]">
                    <label
                        htmlFor={`Contact_Number`}
                        className="text-black font-open-sans text-sm font-semibold leading-normal"
                    >
                        Phone Number
                    </label>
                    <div className="flex gap-2">
                        <div className="flex border p-2 rounded-md bg-[#F6F6F6]">
                            <img src="./assets/svgs/India (IN).svg" alt="?" className="w-6" />
                            <img
                                src="./assets/svgs/tabler-icon-chevron-up (1).svg"
                                alt="?"
                                className="w-6"
                            />
                        </div>
                        <input
                            id={`Contact_Number`}
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            onBlur={handleBlur}
                            placeholder="(+91) 999-9999"
                            className={`border p-2 h-10 rounded-md bg-[#F6F6F6]`}
                        />
                    </div>
                    {errors['phoneNumber'] && (
                        <p className="text-red-500 text-sm">{errors['phoneNumber']}</p>
                    )}
                </div>

                <div className="w-full max-w-[30svw]">
                    <label
                        htmlFor={`Contact_Email`}
                        className="text-black font-open-sans text-sm font-semibold leading-normal"
                    >
                        Email Address
                    </label>
                    <input
                        id={`Contact_Email`}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleBlur}
                        placeholder="Enter your email"
                        className={`border p-2 h-10 rounded-md bg-[#F6F6F6]`}
                    />
                    {errors['email'] && (
                        <p className="text-red-500 text-sm">{errors['email']}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PassengerDetails;

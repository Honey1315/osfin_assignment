import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PassengerDetails from '../../components/PassengerDetails';
import AdditionalInfo from '../../components/AdditionalInfo';
import Review from '../../components/Review';
import BookingProgressBar from '../../components/BookingProgressBar';
import StepController from '../../StepController';

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

const Booking: React.FC = () => {
  const [stepProgress, setStepProgress] = useState<number>(1);
  console.log(stepProgress);
  const [passengerDetails, setPassengerDetails] = useState<PassengerInfo[]>([{ fullName: '', dateOfBirth: '', gender: '' }]);
  const [flightDetails, setFlightDetails] = useState<FlightDetails>({
    boardingCity: "New Delhi",
    destinationCity: "Mumbai",
    boardingStation: "Indira Gandhi Airport, Terminal, Terminal T3",
    destinationStation: "Chhatrapati Shivaji International Airport, Terminal T2",
    duration: "2h 20m",
    arrivalTime: "12:15",
    departureTime: "06:00",
    flightName: "Indigo Airline",
    flightNumber: "IX3486",
    flightModel: "Airbus A350-900"
  });
  const [isPassengerDetailsValid, setIsPassengerDetailsValid] = useState(false);
  const[email, setEmail]=useState<string>('');
  const[phoneNumber, setPhoneNumber]=useState<string>('');

  const navigate = useNavigate();

  const next = () => {
    console.log(stepProgress);
    if (stepProgress < 3) {
      setStepProgress(curr => curr + 1);
    } else {
      navigate('review');
    }
  };

  const prev = () => {
    console.log(stepProgress);
    if (stepProgress > 1) {
      setStepProgress(curr => curr - 1);
    } else {
      navigate('/');  // Navigate to home or previous page
    }
  };

  const cancel = () => {
    setStepProgress(1);
    setPassengerDetails([]);
    navigate('/login');  // Navigate to login page
  };

  return (
    <Routes>
      <Route path="/" element={
        <section className='px-8 py-4 w-full'>
          <h1>Booking Information</h1>
          <BookingProgressBar stepProgress={stepProgress}/>
          <span className='text-gray-500 font-semibold text-xs uppercase'>{stepProgress}/3 step</span>
          
          <section>
            {stepProgress === 1 && (
              <PassengerDetails 
                passengerDetails={passengerDetails}
                setPassengerDetails={setPassengerDetails}
                setIsValid={setIsPassengerDetailsValid}
                flightDetails={flightDetails}
                email={email}
                setEmail={setEmail}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
              />
            )}
            {stepProgress === 2 && (
              <AdditionalInfo 
              />
            )}
            {stepProgress === 3 && (
              <Review 
                flightDetails={flightDetails}
                passengerDetails={passengerDetails}
              />
            )}
          </section>
          
          <StepController 
            currentStep={stepProgress}
            lastStep={3}
            handleCancel={cancel}
            handleNext={next}
            handlePrev={prev}
            isNextDisabled={stepProgress === 1 && !isPassengerDetailsValid}
          />
        </section>
      } />
      <Route path="/review" element={
        <Review 
          flightDetails={flightDetails}
          passengerDetails={passengerDetails}
        />
      } />
    </Routes>
  );
};

export default Booking;

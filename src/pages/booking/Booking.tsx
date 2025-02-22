import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PassengerDetails from '../../components/PassengerDetails';
import AdditionalInfo from '../../components/AdditionalInfo';
import Review from '../../components/Review';
import BookingProgressBar from '../../components/BookingProgressBar';
import StepController from '../../StepController';
import Confirmation from '../confirmation/Confirmation';

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

const dummySavedPassengers: PassengerInfo[] = [
  { fullName: 'John Doe', dateOfBirth: '1990-01-01', gender: 'male' },
  { fullName: 'Jane Smith', dateOfBirth: '1985-05-15', gender: 'female' },
  { fullName: 'Alex Johnson', dateOfBirth: '1995-12-31', gender: 'other' },
];

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
  const [savedPassengers, setSavedPassengers] = useState<PassengerInfo[]>([]);
  useEffect(() => {
    const userEmail = sessionStorage.getItem('userEmail');
    if (userEmail) {
      setSavedPassengers(dummySavedPassengers);
    }
  }, []);
  const navigate = useNavigate();

  const submit=()=>{
    navigate("/success", {
      state: { flightDetails, passengerDetails, email, phoneNumber }
    })
  }

  const next = () => {
    console.log(stepProgress);
    if (stepProgress < 3) {
      setStepProgress(curr => curr + 1);
    } else {
      if (sessionStorage.getItem('userEmail') !== null)  {
        navigate('review');
      } else {
        localStorage.setItem('redirectAfterLogin', '/review');
        navigate('/login');
      }
    }
  };

  const prev = () => {
    console.log(stepProgress);
    if (stepProgress > 1) {
      setStepProgress(curr => curr - 1);
    } else {
      navigate('/');
    }
  };

  const cancel = () => {
    setStepProgress(1);
    setPassengerDetails([]);
    navigate('/login');
  };

  return (
    <div className='w-full'>
        <section className='px-8 pt-4 w-full min-h-svh flex flex-col justify-end gap-10 relative'>
          <h1>Booking Information</h1>

          <BookingProgressBar stepProgress={stepProgress}/>

          {/* Flight Banner */}
          {stepProgress===1 && (
            <section id="banner">
            <div className='flex flex-row justify-between h-full'>
              {/* Airplane and clouds */}
              <div className='max-lg:hidden -z-10 w-1/4'>
                <img className='w-full h-full object-cover scale-150' src="/assets/images/banner-airplane.png" alt="Airplane and Clouds of Banner" />
              </div>
    
              {/* Details of Flight */}
    
              <section className='flex flex-row justify-between gap-4 h-full pl-8 pr-20 py-6 grow'>
    
                <div className='flex flex-row gap-6 grow text-nowrap'>
                  <img className='h-1/2' src="/assets/svgs/indigo-logo.svg" alt="Indigo Logo" />
                  <div className='space-y-1'>
                    <h3>Indigo Airline</h3>
                    <p className='text-sm text-gray-500'>Airbus A350-900</p>
                    <span className='text-xs text-gray-500 flex gap-1'>
                      
                    <img src="/assets/svgs/tabler-icon-plane-inflight.svg" alt="Indigo Logo" />
                      <span>2h 20m</span>
                      </span>
                  </div>
    
                </div>
    
                <div className='border-l w-1 h-full self-stretch border-gray-400 border-dashed' />
    
                <div className='flex gap-10 grow text-nowrap'>
                  <section className='space-y-2'>
                    <h3 className='text-2xl'>12:15</h3>
                    <hr className='border w-full border-gray-300'/>
                    <p className='flex gap-2'>
                      <img src="/assets/svgs/ArrowCircleUpLeft.svg" alt="Banner Location Icon" />
                      DEL (Delhi)</p>
                  </section>
    
                  {/* Non-Stop Sign */}
                  <div className='flex justify-center items-center flex-col'>
                    <img src="/assets/svgs/tabler-icon-plane.svg" alt="Non-stop Icon" />
                    <span className='text-[0.625rem] text-gray-400'>Non-stop</span>
                    
                  </div>
    
                  <section className='space-y-2'>
                    <h3 className='text-2xl'>06:00</h3>
                    <hr className='border w-full border-gray-300'/>
                    <p className='flex gap-2'>
                      <img src="/assets/svgs/ArrowCircleUpLeft.svg" alt="Banner Location Icon" />
                      BOM (Mumbai)</p>
                  </section>
                </div>
    
              </section>
    
              
            </div>
          </section>
          )}
          
      
          <div className=''>

            {/* Step Count */}
            <span className='text-gray-500 font-semibold text-xs uppercase'>{stepProgress}/3 step</span>
            <section>
              {stepProgress === 1 && (
                  <PassengerDetails 
                  passengerDetails={passengerDetails}
                  setPassengerDetails={setPassengerDetails}
                  email={email}
                  setEmail={setEmail}
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  setIsValid={setIsPassengerDetailsValid}
                  flightDetails={flightDetails}
                  savedPassengers={savedPassengers}
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
                  email={email}
                  phoneNumber={phoneNumber}
                />
              )}
            </section>
          </div>
          
          <StepController 
            currentStep={stepProgress}
            lastStep={3}
            handleCancel={cancel}
            handleNext={next}
            handlePrev={prev}
            handleSubmit={submit}
            isNextDisabled={stepProgress === 1 && !isPassengerDetailsValid}
          />

        </section>
      </div>
  );
};

export default Booking;

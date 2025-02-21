// BookingInformation.tsx
import { useState } from 'react';
import AdditionalInfo from '../../components/AdditionalInfo';
import PassengerDetails from '../../components/PassengerDetails';
import Review from '../../components/Review';
import BookingProgressBar from '../../components/BookingProgressBar';


const Booking = () => {
  const [stepProgress, useStepProgress]=useState<number>(1);
  return(
    <section className='px-8 py-4 flex flex-col justify-start align-top gap-6 w-full'>
      <h1>Booking Information</h1>
      <BookingProgressBar/>

      {/* Flight Banner */}
      <section id="banner">
        <div className='flex flex-row justify-between h-full'>
          {/* Airplane and clouds */}
          <div className=' -z-10 w-1/4'>
            <img className='w-full h-full object-cover scale-150' src="/assets/images/banner-airplane.png" alt="Airplane and Clouds of Banner" />
          </div>

          {/* Details of Flight */}

          <section className='flex flex-row justify-between gap-4 h-full pl-8 pr-20 py-6 grow'>

            <div className='flex flex-row gap-6'>
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

            <div className='flex gap-10'>
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

      {/* Step Count */}
      <span className='text-gray-500 font-semibold text-xs uppercase'>{stepProgress}/3 step</span>
      <PassengerDetails/>
    </section>
  );
};

export default Booking;

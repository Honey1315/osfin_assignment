// BookingInformation.tsx
import { useState } from 'react';
import AdditionalInfo from '../../components/AdditionalInfo';
import PassengerDetails from '../../components/PassengerDetails';
import Review from '../../components/Review';
import BookingProgressBar from '../../components/BookingProgressBar';


const Booking = () => {
  const [stepProgress, useStepProgress]=useState<number>(1);
  return(
    <section className='px-8 py-4'>
      <h1>Booking Information</h1>
      <BookingProgressBar/>

      {/* Flight Banner */}
      <section>Banner</section>

      {/* Step Count */}
      <span className='text-gray-500 font-semibold text-xs uppercase'>{stepProgress}/3 step</span>
      <PassengerDetails/>
    </section>
  );
};

export default Booking;

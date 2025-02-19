import React, { useState } from 'react'

interface flightDetails {
    boardingStation : string,
    destinationStation : string,
    duration : string,
    boardingCity : string,
    destinationCity : string,
    arrivalTime : string,
    departureTime : string,
    flightName : string,
    flightNumber : string,
    flightModel : string
}

const Review : React.FC = () => {
    const [flightDetails,setFlightDetails]=useState<flightDetails>(
        {
            boardingCity : "New Delhi",
            destinationCity: "Mumbai",
            boardingStation : "Indira Gandhi Airport, Terminal, Terminal T3",
            destinationStation : "Chhatrapati Shivaji International Airport, Terminal T2 ",
            duration : "2h 20m",
            arrivalTime : "12:15",
            departureTime : "06:00",
            flightName : "Indigo Airline",
            flightNumber : "IX3486",
            flightModel : "Airbus A350-900"
        }
    );
  return (
    <div className='flex flex-col gap-6 p-2'>
        <div>
        <h1 className='flex'>Review and Submit</h1>
        <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">
                    {flightDetails.flightName} . <span className="text-gray-500">{flightDetails.flightNumber}</span>
                </div>
                <div className="text-gray-500 text-sm">{flightDetails.flightModel}</div>
            </div>

            <div className="relative flex gap-2">
                <div className='flex flex-col justify-between'>
                    <h1>{flightDetails.arrivalTime}</h1>
                    <h1>{flightDetails.departureTime}</h1>
                </div>
                <img src='/assets/svgs/timeChain.svg' alt='duration'/>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <div>{flightDetails.boardingCity} .</div>
                        <div className=' text-gray-400'> {flightDetails.boardingStation}</div>
                    </div>
                    <div className='flex text-gray-400'>{flightDetails.duration}</div>
                    <div className='flex justify-between'>
                        <div>{flightDetails.destinationCity} .</div>
                        <div className=' text-gray-400'>{flightDetails.destinationStation}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div>
            <h1 className='flex'>Passenger Details</h1>
            <div className="bg-gray-100 rounded-lg">
                bfidbsbrv
            </div>
        </div>

        <div className=''>
            <h1 className='flex'>Baggage Options</h1>
            <div className="bg-gray-100 rounded-lg p-4">
            <div className='flex gap-3 pb-2'>
                <img src='/assets/svgs/tabler-icon-circle-check-filled.svg' alt='c'/>
                <p>Included -</p>
                <p>Baggage per person</p>
            </div>
            <div className='flex gap-6'>
            <div className='flex gap-3'>
                <img src='/assets/svgs/tabler-icon-briefcase.svg' alt='c'/>
                <p className='text-sm'>Cabin Baggage</p>
                <p className='text-xs flex items-center'>7 kgs (1 piece only) / Adult</p>
            </div>
            <div className='flex gap-3'>
                <img src='/assets/svgs/tabler-icon-luggage.svg' alt='c'/>
                <p className=' text-sm'>Check-In Baggage</p>
                <p className=' text-xs flex items-center'>15 Kgs (1 piece only) / Adult</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Review

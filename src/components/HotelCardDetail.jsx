/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { IconStarHalfFilled, IconArrowBackUp } from '@tabler/icons-react'
import BookingForm from './BookingForm'

const HotelCardDetail = ({ hotel }) => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='p-32 h-screen max-w-xl md:max-w-full text-center flex flex-col items-center'>
        <h2 className='text-2xl font-bold'>{hotel.name}</h2>
        <p className='text-lg mb-2'>{hotel.description}</p>
        <img
          src={hotel.image}
          alt={hotel.name}
          className='max-w-full h-96 object-cover rounded-xl'
        />
        <div className='flex flex-col gap-4 items-center'>
          <div className='flex items-center my-8'>
            <p className='text-md mr-8'>{hotel.city}</p>
            <div className='flex items-center'>
              <span className='text-md mr-4'>u$s {hotel.price} per night</span>
              <span className='text-md flex items-cente gap-2'><IconStarHalfFilled className='text-yellow-400' /> {hotel.rating}</span>
            </div>
          </div>
          <Link
            to='/'
            className='p-3 px-4 bg-blue-500 text-white text-center no-underline rounded-full absolute top-8 right-6 sm:right-32 sm:top-16 md:right-60 md:top-16  lg:right-72 lg:top-20  xl:right-1/3 xl:top-8'
          >
            <IconArrowBackUp />
          </Link>
        </div>
        <div>
          <BookingForm hotel={hotel} />
        </div>
      </div>
    </div>
  )
}

export default HotelCardDetail

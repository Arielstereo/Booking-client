import { IconHome2, IconTrash } from '@tabler/icons-react'
import useStore from '../store/reservations'
import { useState } from 'react'

const Navbar = () => {
  const reservation = useStore((state) => state.reservations)
  const clearReservations = useStore((state) => state.clearReservations)
  const [isClose, setIsClose] = useState(true)

  const handleOpenClose = () => {
    setIsClose(!isClose)
  }

  return (
    <nav className='bg-blue-500 py-8'>
      <div className='max-w-sm lg:w-full mx-auto px-4 md:mx-32 flex justify-between items-center'>
        <div className='flex items-center gap-1 sm:gap-4'>
          <IconHome2 color='white' />
          <h1 className='text-white font-bold m-0'>Booking</h1>
        </div>
        <div className='flex items-center'>
          <button className={isClose ? 'text-white border-2 border-white font-semibold p-2 rounded-xl right-2 sm:right-32 absolute' : 'text-white border-2 border-white font-semibold p-2 rounded-xl right-2 sm:right-32 absolute'} onClick={handleOpenClose}>{isClose ? 'your reservations' : 'Close'}</button>
          <div className={isClose ? 'invisible top-6 absolute my-8' : 'top-16 right-0 absolute my-8 w-full h-screen bg-white border-2 border-blue-400 rounded-xl shadow-lg shadow-slate-600 text-center'}>
            <h2 className='font-semibold text-lg my-8'>Reservations</h2>
            {
          reservation.length > 0
            ? reservation.map((item) => (

              <div key={item.hotel.id}>
                <div className='flex flex-col sm:flex-row gap-4 md:gap-16 justify-center mb-8'>
                  <h3 className='flex gap-2 text-white justify-center bg-blue-500 px-4 py-2 rounded-md'> <IconHome2 />{item.hotel.name}</h3>
                  <span className='text-green-600 p-2'>Check-in {item.checking}</span>
                  <span className='text-red-600 p-2'>Check-out {item.checkout}</span>
                </div>
              </div>
            ))
            : (
              <div>
                <h3>You have no reservations!</h3>
              </div>
              )
      }
            {
            reservation.length > 0 && (
              <button className='flex mx-auto absolute bottom-32 left-24  text-slate-600 hover:text-red-500 font-semibold' onClick={clearReservations}>Remove all reservations <IconTrash /></button>
            )
           }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

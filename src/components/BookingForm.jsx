/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import useStore from '../store/reservations'

const BookingForm = ({ hotel }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [checkin, setCheckin] = useState(null)
  const [checkout, setCheckout] = useState(null)
  const [total, setTotal] = useState(0)

  const addReservation = useStore((state) => state.addReservations)

  const navigate = useNavigate()

  const { price } = hotel

  useEffect(() => {
    const dateCheckin = new Date(checkin)
    const dateCheckout = new Date(checkout)
    const diferateDate = dateCheckout - dateCheckin
    const days = diferateDate / (1000 * 24 * 60 * 60)
    setTotal(days * price)
  }, [checkin, checkout, price])

  const onSubmit = (data) => {
    setCheckin(data.checkin)
    setCheckout(data.checkout)
    addReservation(hotel, data.checkin, data.checkout)
  }

  const submitConfirmation = () => {
    toast.success('Your reservation has been confirmed!')
    setTimeout(() => {
      navigate('/')
    }, 4000)
  }

  return (
    <div className="w-96 md:w-full p-2">
      <Toaster richColors position='bottom-left' />
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap md:flex-row gap-2 md:gap-8 items-center justify-center'>
        <div className='flex flex-col items-center gap-2'>
          <label htmlFor='checkin'>Check-in</label>
          <input type='date' id='checkin' {...register('checkin', { required: true })} className='p-4 mb-4 border border-gray-300 rounded' />
          {errors.checkin && <span className='text-red-500'>This field is required!</span>}
        </div>
        <div className='flex flex-col items-center gap-2'>
          <label htmlFor='checkout'>Check-out</label>
          <input type='date' id='checkout' {...register('checkout', { required: true })} className='p-4 mb-4 border border-gray-300 rounded' />
          {errors.checkout && <span className='text-red-500'>This field is required!</span>}
        </div>
        <button className='px-6 py-4 mt-4 w-full md:w-48 bg-green-600 text-white rounded font-semibold'>Reserve now</button>
      </form>
      {
      checkin && checkout
        ? (
          <div className='flex flex-col gap-2 mt-4 border-2 border-slate-300 shadow-lg shadow-slate-600 p-6 h-full'>
            <span className='text-center my-4 text-xl font-semibold'>You reservation</span>
            <div className='flex flex-col md:flex-row gap-6 justify-center mt-8f'>
              <h4>{hotel.name}</h4>
              <span className='text-green-600'>Checkin: {checkin}</span>
              <span className='text-red-600'>Checkout: {checkout}</span>
              <span>Total: u$s {total}</span>
            </div>
            <button className='p-4 bg-green-600 text-white font-bold' onClick={submitConfirmation}>Confirm you reserve</button>
          </div>
          )
        : (
          <div className='text-center'>
            <span className='text-red-600'>* Elige tus fechas para este hotel</span>
          </div>
          )
    }
    </div>
  )
}

export default BookingForm

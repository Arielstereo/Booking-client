import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useFetchApi } from '../hooks/useFetchApi'
import HotelCardDetail from './HotelCardDetail'

const HotelDetails = () => {
  const { getHotelById } = useFetchApi()
  const { id } = useParams()

  const { data: hotel, isLoading } = useQuery({ queryKey: ['hotel', id], queryFn: () => getHotelById(id) })

  return (
    <div>
      {
      isLoading
        ? (<div className='loader mx-64 mt-32' />)
        : (
          <HotelCardDetail hotel={hotel} />

          )
      }
    </div>
  )
}

export default HotelDetails

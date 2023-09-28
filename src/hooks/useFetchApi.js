import axios from 'axios'

export function useFetchApi () {
  const getHotels = async () => {
    const { data } = await axios.get('https://booking-server-izgu.onrender.com/api/v1/hotels')
    return data
  }

  const getHotelById = async (id) => {
    const { data } = await axios.get(`https://booking-server-izgu.onrender.com/api/v1/hotels/${id}`)
    return data
  }

  return { getHotels, getHotelById }
}

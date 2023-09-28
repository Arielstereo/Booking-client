import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(persist((set) => ({
  reservations: [],

  addReservations: (hotel, checking, checkout) => {
    set((state) => ({ reservations: [...state.reservations, { hotel, checking, checkout }] }))
  },
  clearReservations: () => {
    set({ reservations: [] })
    localStorage.removeItem('reservas')
  }
  
}),
{
  name: 'reservas'
}
))

export default useStore

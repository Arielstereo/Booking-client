import {create} from 'zustand'
import {persist} from 'zustand/middleware'

const useFavorites = create(persist((set) => ({
  favoritesHotelsIds: [],

  addToFavorites: (id) => set((state) => ({
    favoritesHotelsIds: [...state.favoritesHotelsIds, id],
  })),
  removeFromFavorites: (id) => set((state) => ({
    favoritesHotelsIds: state.favoritesHotelsIds.filter(hotelId => hotelId !== id)
  }))
}),
{
  name: 'favorites'
}))


export default useFavorites
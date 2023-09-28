import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HotelsHome from './components/HotelsHome'
import HotelDetails from './components/HotelDetails'

const router = createBrowserRouter([
  { path: '/', element: <HotelsHome /> },
  { path: '/hotels/:id', element: <HotelDetails /> }
])

function App () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

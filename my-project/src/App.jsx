import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayOut from './Layer/RootLayOut'
import Dashboard from './Pages/Dashboard'
import Expenses from './Pages/Expenses'
import Wallets from './Pages/Wallets'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Dashboard/>}/>
      <Route path='/expenses' element={<Expenses/>}/>
      <Route path='/wallets' element={<Wallets/>}/>

    </Route>
    ))

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
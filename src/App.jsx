import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage/'
import { CheckoutPage } from './pages/CheckoutPage/'
import { OrdersPage } from './pages/Orders/'
import { TrackingPage } from './pages/TrackingPage'
import { NotFoundPage } from './pages/404'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [cart, setCart] = useState([])

  useEffect(
    ()=>{
      const getAppData = async ()=>{
        const response = await axios.get('http://localhost:3000/api/cart-items?expand=product');
        setCart(response.data);
      }
        
      getAppData();
    },
    []
  );
  
  return (
      <Routes>
        <Route index element={<HomePage cart={cart}/>}/>
        <Route path="checkout" element={<CheckoutPage  cart={cart}/> }/>
        <Route path="orders" element={<OrdersPage cart={cart}/> }/>
        <Route path="tracking" element={<TrackingPage /> }/>
        <Route path="*" element={<NotFoundPage /> }/>
      </Routes>
  )
}

export default App

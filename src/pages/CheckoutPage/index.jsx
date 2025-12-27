import { useEffect, useState } from 'react';
import './CheckoutPage.css'
import { CheckoutHeader } from './components/CheckoutHeader';
import axios from 'axios';
import { OrderSummary } from './components/OrderSummary';
import { PaymentSummary } from './components/PaymentSummary';

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);


  
  const [paymentSummary, setPaymentSummary] = useState(null);


  useEffect(() => {
    const getExtraData = async () => {
      const newDeliveryData = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(newDeliveryData.data);

      const newPaymentData = await axios.get('/api/payment-summary');
      setPaymentSummary(newPaymentData.data)
    }

    getExtraData();
  }, [])
  return (
    <>
      <title>Checkout Page</title>
      <link rel="icon" href="images/cart-favicon.png" />
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>
          <PaymentSummary paymentSummary={paymentSummary} />
          
        </div>
      </div>
    </>
  );
}
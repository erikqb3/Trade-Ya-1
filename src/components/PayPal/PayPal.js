import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPalIntegration = () => {
  return (
    <div>
      <PayPalButton
        amount="0.05"
        currency="USD"
        onSuccess={(details, data) => {
        // Handle successful payment here
        }}
        options={{
          clientId: 'AVKXwMV1BIFBgA2kn4YxqgKW5zsR1XoFKbC8WIn-qk1XDJn_FQ1_fRizvKyrnC9MkWRHix5Rric-6CUf',
          components : "buttons,funding-eligibility",
          "enable-funding":"venmo"
        }
        }
        onError={(err)=>{
          console.log(err)
        }}
      />
    </div>
  );
};

export default PayPalIntegration;
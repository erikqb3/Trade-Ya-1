import React, {useRef, useEffect} from "react";

export default function PayPal(){
  const paypal = useRef();

  useEffect(()=>{
    window.paypal.Buttons({
      createOrder: (data, actions, err) =>{
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description:"listing.description",
              amount:{
                currency_code:"USD",
                value: 0.05 //listing.price
              }
            }
          ]
        })
      },
      onApprove: async(data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError:(err)=> {
        console.log(err)
      }
    }).render(paypal.current)
  },[])

  return(
    <div>
      <div ref={paypal}></div>
    </div>
  )
}




// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// export default function PayPal(){
//   return (
//     <PayPalScriptProvider options={{ "client-id": "test" }}>
//       <PayPalButtons
//           style={{ layout: "horizontal" }}
//           createOrder={(data, actions) => {
//               return actions.order.create({
//                   purchase_units: [
//                       {
//                           amount: {
//                               value: "2.00",
//                           },
//                       },
//                   ],
//               });
//           }}
//       />;
//     </PayPalScriptProvider>
//   )
// }




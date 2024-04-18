"use client";
import React, { useState } from "react";
// import { getCurrentUser } from "@/actions/getCurrentUser";


const TradePopUp = ({ currentUser, user, price }) => {
	const [offerTrade, setOfferTrade] = useState(false);
	const tradeOptions = currentUser.listings;
  console.log(tradeOptions)
  





return(
  <div className="TradePopUp">
    <h4>What would you like to Trade?</h4>
  </div>
)
};

export default TradePopUp;

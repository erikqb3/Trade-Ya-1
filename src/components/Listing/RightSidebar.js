"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import userImg from "../../../public/images/listing-details-img/user.jpg";
import message2 from "../../../public/images/icon/messages-2.svg";
import profileImg from "../../../public/images/icon/profiles.svg";
import pdfIco from "../../../public/images/listing-details-img/pdf.svg";
import downloadIco from "../../../public/images/listing-details-img/zip.svg";
import PayPal from "../PayPal/PayPal";
import TradePopUp from "./TradePopUp";

const RightSidebar = ({ currentUser, user, price }) => {
	const [offerTrade, setOfferTrade] = useState(false);
	const [checkOut, setCheckOut] = useState(false);

	return (
		<div className="col-lg-4">
			<div className="right-sidebar">
				<div className="bg-right-sidebar">
					<h3>Seller Information</h3>
					<div className="information-img d-flex align-items-center">
						<Image
							src={user?.image ? user.image : userImg}
							alt="user"
							width={93}
							height={93}
						/>
						<div className="ms-3">
							<h4>{user.name}</h4>
							<p>
								{user?.profile?.bio
									? user.profile.bio
									: "No Description"}
							</p>
						</div>
					</div>
					{
						currentUser ? <>
						<ul className="info">
							<li>
								<i className="ri-map-pin-line"></i>
								{user?.profile?.address
									? user.profile.address
									: "Place Not Added"}
							</li>
						</ul>
					
						<ul className="contact-btn">
							<li>
								<Link
									href={`/author/${user.id}`}
									className="default-btn active"
								>
									<span>
										View Profile
										<Image
											src={profileImg}
											alt="Image"
											width={24}
											height={24}
										/>
									</span>
								</Link>
							</li>
							<li
							>
								<div
									className="default-btn"
								>
									<span>
										Request Friend Link
										
									</span>
								</div>
							</li>
							{(price)?
								<li className="">
										<span 
										className="default-btn"
										onClick={()=>{
											setCheckOut(true)
										}}>Check Out</span>
									{(checkOut) ? (
										<li className="MyPayPal">
											<PayPal/>
										</li>
									):(<></>)}
								</li>
							: 				
								<li className="">
										<span 
											className="default-btn"
											onClick={()=>{
												setOfferTrade(true)
											}}>Offer Trade</span>
									
									{(offerTrade) ? (
										<TradePopUp
										currentUser={currentUser}
											user={user}
										></TradePopUp>
									):(<></>)}
								</li>
					}	
						</ul>
						</>: <></>
					}

				</div>

	
					</div>
				</div>
	);
};

export default RightSidebar;

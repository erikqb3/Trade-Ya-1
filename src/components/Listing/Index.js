"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DetailsHead from "./DetailsHead";
import RightSidebar from "./RightSidebar";
import FeedbackForm from "./FeedbackForm";
import axios from "axios";
import { toast } from "react-hot-toast";
import Reviews from "./Reviews";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const MapWithNoSSR = dynamic(() => import("../Map"), {
	ssr: false,
});
import Features from "./Features";
import SahreAndSave from "./SahreAndSave";
import DetailsImages from "./DetailsImages";


const Index = ({ currentUser, listing, reviews }) => {
	console.log(currentUser.myHistory);

	// 1) Check if History Exists
	if (currentUser && (listing.user.id !== currentUser.id)){
		let myHistory_string = currentUser.myHistory;
		let clear = true;
		let existingItem;

		if (!myHistory_string){
			myHistory_string = "";
		}
		// 1a)If Exists, add comma at the end for syntax and order
		else {
			myHistory_string = myHistory_string + ",";
		}

		let myHistory_array = myHistory_string.split(",")

		
		//  2) Loop through and check for current viewing is in history already
		myHistory_array.forEach(listItem => {
			if (listItem == listing.id){
				existingItem = listItem;
				clear = false;
			}
		});

		console.log(clear)

		if (clear == true){
			// 3a) if current history is 10, remove 1
			if (myHistory_array.length >= 11){
				myHistory_array.shift();
				myHistory_string = myHistory_array.toString()
			}

			// 3b) add current viewing to existing history
			myHistory_string = myHistory_string + listing.id;
			let data = {"myHistory": myHistory_string};
			// 4) update myHistory
			axios
			.post(`/api/users/${currentUser.id}/myHistory`, data)
			.then((response) => {
				toast.success("Information updated!");

			})
			.catch((error) => {
				toast.error("Something went wrong!");
			})

		}
		else {
			// 3c) if current viewing already exists, relocate to end of array
			myHistory_array = myHistory_array.filter(item => (item !== existingItem) && (item !== ""));
			myHistory_array.push(existingItem);
			myHistory_string = myHistory_array.toString()
			console.log(myHistory_string)
			let data = {"myHistory": myHistory_string};

			// 4) update myHistory
			axios
			.post(`/api/users/${currentUser.id}/myHistory`, data)
			.then((response) => {
				toast.success("Information updated!");

			})
			.catch((error) => {
				toast.error("Something went wrong!");
			})
		}
		// console.log(myHistory_string)
	}

	return (
		<div className="listing-details-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="listing-details-content">
							<DetailsHead {...listing} />

							<DetailsImages {...listing} />

							<div className="tag-sheare d-flex justify-content-between">
								<ul className="tags-list">
									<li>
										<Link
											href={`/listings/?category=${listing.category}`}
										>
											{listing.category}
										</Link>
									</li>
								</ul>

								<SahreAndSave
									currentUser={currentUser}
									listingId={listing.id}
								/>
							</div>

							<div
								dangerouslySetInnerHTML={{
									__html: listing.description,
								}}
								className="listing-details-box"
							/>

							<Features 
							{...listing} />

							{/* {listing && (
								<MapWithNoSSR
									latitude={listing.latitude}
									longitude={listing.longitude}
								/>
							)} */}

							{/* <Reviews reviews={reviews} /> */}

							{/* <FeedbackForm
								currentUser={currentUser}
								listingId={listing.id}
							/> */}
						</div>
					</div>

					<RightSidebar 
						currentUser={currentUser}
						{...listing} />
				</div>
			</div>
		</div>
	);
};

export default Index;

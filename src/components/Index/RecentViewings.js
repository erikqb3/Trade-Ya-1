"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import FeaturedItem from "./FeaturedItem";
import { toast } from "react-hot-toast";
import { filter } from "@/utils/RTEControls";


const RecentViewings = ({ currentUser }) => {
	const [listings, setListings] = useState([]);
	const [myHistory_listings, setMyHistory_listings] = useState([]);
	
	useEffect(() => {
		const fetchListing = async (id) => {
		};

		
		const fetchData = async () => {
			await axios
				.get(`/api/listings/variousListings?list=${currentUser.myHistory}`)
				.then((response) => {
					setListings(response.data);
					checkHistory(response.data);
				})
				.catch((error) => {
					toast.error("Something went wromg!");
					console.log(error)
				});
		};


		const checkHistory = async (
			returnData,
			newHistory_array = returnData.filter(listing_obj => (listing_obj !== null)).reverse(),
			newHistory_string = "",
			newData = ""
			) => {
			newHistory_array.forEach(listing_obj => {
				newHistory_string = newHistory_string + listing_obj.id+",";
			});

			newHistory_string = newHistory_string.replace(/,\s*$/, "");
			newData = {"myHistory": newHistory_string};

			axios
			.post(`/api/users/${currentUser.id}/myHistory`, newData)
			.then((response) => {
				// toast.success("Information updated!");
			})
			.catch((error) => {
				toast.error("Something went wromg!");
				console.log(error)
			});
		}


		if (currentUser.myHistory){
			fetchData();
		}
	}, []);


	if (currentUser && currentUser.myHistory){
		return (
			<div className="offer-area bg-color-fffcf8">
				<div className="container">
					<div className="section-title-wrap">
						<div className="section-title left-title">
							<h2>Recent Viewings</h2>
						</div>
					</div>
				</div>
	
				<div className="container-fluid">
					<div className="tab-content">
						<div className="tab-pane fade show active">
							<Swiper 
								spaceBetween={15}
								grabCursor={true}
								pagination={{
									clickable: true,
								}}
								breakpoints={{
									0: {
										slidesPerView: 2,
									},
									768: {
										slidesPerView: 4,
									},
									1200: {
										slidesPerView: 6,
									},
								}}
								navigation={true}
								modules={[Pagination, Navigation]}
								className="featured-slide"
							>
								{listings.length > 0 &&
									listings.map((list) => (
										(list) ?
										<SwiperSlide key={list.id}>
											<FeaturedItem
												currentUser={currentUser}
												{...list}
											/>
										</SwiperSlide>
										:
										<></>
									))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		);
	}
	else {
		return <div></div>
	}
};

export default RecentViewings;

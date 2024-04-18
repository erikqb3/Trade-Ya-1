"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import FeaturedItem from "./FeaturedItem";
import { toast } from "react-hot-toast";
import { categories } from "@/libs/Categories";

const Featured = ({ currentUser, myListings,searchParams }) => {
	let viewableListings; 
	if (currentUser){
		viewableListings = myListings.filter(item => ((item.price == 0) && (item.userId !== currentUser.id))); //hide self posted listings
	}
	else{
	viewableListings = myListings.filter(item => ((item.price == 0))); 
	}
	const [listings, setListings] = useState(viewableListings);
	const [cat, setCat] = useState("all");

	console.log(listings);

	let party = ["Rotom","Flygon","Greninja","Scizor","Magcargo","Executor"]
	let pokemon = party.map((P)=>{
		<h1>{P}</h1>
	})

	const getFeatured = async (cat) => {
		setCat(cat);
		await axios
			.get(`/api/listings/featured?category=${cat}`)
			.then((response) => {
				setListings(response.data);
			})
			.catch((error) => {
				toast.error("Something went wromg!");
			});
	};
	return (
		<div className="shop offer-area bg-color-fffcf8 featured-ads">
			<div className="container">
				<div className="section-title-wrap">
					<div className="section-title left-title">
						<h2>Listings</h2>
					</div>

					<div className="section-title-right">
						<ul className="nav nav-tabs featured-tabs">
						<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "all" && "active"
									}`}
									onClick={() => getFeatured("all")}
								>
									All
								</button>
							</li>
							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "Automotive" && "active"
									}`}
									onClick={() => getFeatured("Automotive")}
								>
									Automotive
								</button>
							</li>
							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "Apparel" && "active"
									}`}
									onClick={() => getFeatured("Apparel")}
								>
									Apparel
								</button>
							</li>

							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "Electronics" && "active"
									}`}
									onClick={() => getFeatured("Electronics")}
								>
									Electronics
								</button>
							</li>
							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "Entertainment" && "active"
									}`}
									onClick={() => getFeatured("Entertainment")}
								>
									Entertainment
								</button>
							</li>
							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "Family" && "active"
									}`}
									onClick={() => getFeatured("Family")}
								>
									Family
								</button>
							</li>
						</ul>

						{/* <label for="category">Filter By Category</label>
						<select name="category" id="category">
						<option value={"all"}>All</option>
							{categories.map((cat) => {
								<option value={cat.value}>{cat.value}</option>
							})
							}
						</select> */}

					</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="tab-content">
					<div className="tab-pane fade show active">
						<Swiper 
							spaceBetween={15}
							// grabCursor={true}
							// pagination={{
							// 	clickable: true,
							// }}
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
									<SwiperSlide key={list.id}>
										<FeaturedItem
											currentUser={currentUser}
											{...list}
										/>
									</SwiperSlide>
								))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;

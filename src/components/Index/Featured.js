"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import FeaturedItem from "./FeaturedItem";
import { toast } from "react-hot-toast";

const Featured = ({ currentUser }) => {
	const [listings, setListings] = useState([]);
	const [cat, setCat] = useState("all");

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`/api/listings/featured?category=mostRecent`)
				.then((response) => {
					setListings(response.data);
				})
				.catch((error) => {
					toast.error("Something went wromg!");
				});
		};

		fetchData();
	}, []);

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
		<div className="offer-area bg-color-fffcf8 featured-ads">
			<div className="container">
				<div className="section-title-wrap">
					<div className="section-title left-title">
						<h2>Featured Trades</h2>
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
									Most Recent
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

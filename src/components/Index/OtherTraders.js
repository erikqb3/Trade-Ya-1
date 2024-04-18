"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import { formatDateBlog } from "@/utils/formatDate";

const OtherTraders = ({ allUsers }) => {
  console.log(allUsers);
	let limit = 6;
	let max = allUsers.length-limit;
	let startingPoint =Math.floor(Math.random() * max);
	let viewableUsers = []
	if (allUsers.length > 6){
		for (let i=0; i<limit; i++){
			viewableUsers.push(allUsers[startingPoint+i])
		}
	}
	else {
		viewableUsers = allUsers;
	}

	// console.log(allUsers.length);
	// console.log(startingPoint);
	// console.log(viewableUsers);

	// viewableUsers.map((user)=>{
	// 	console.log(user.name)
	// })

	return (
		<div>
			{/* <h1>Hellow</h1> */}
			{
				// viewableUsers.map((user)=>{
				// 	<div>{user.name}</div>
				// 	// <div>name</div>
				// })
				viewableUsers.forEach(element => {
					<div>{element.name}</div>
				})
			}
		</div>

		// <div className="location-area ptb-100">
		// 	<div className="container for-shape">
		// 		<div className="section-title">
		// 			<h2>Other Traders</h2>
		// 		</div>

		// 		<div className="row justify-content-center">
		// 			<div className="col-lg-4 col-sm-6">
		// 				<div className="single-location d-flex justify-content-start align-items-center">
		// 					<Image
		// 						src={location1}
		// 						width={115}
		// 						height={115}
		// 						alt="locations"
		// 					/>

		// 					<div className="location-content">
		// 						<h3>Retro Room</h3>
		// 						<span>New York Upper West Side </span>

		// 						<ul>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starHIcon}
		// 									width="17"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 						</ul>
		// 					</div>

		// 					<Link href="/listings" className="map-link"></Link>
		// 				</div>
		// 			</div>

		// 			<div className="col-lg-4 col-sm-6">
		// 				<div className="single-location bg-c7f1e4 d-flex justify-content-start align-items-center">
		// 					<Image
		// 						src={location2}
		// 						width={115}
		// 						height={115}
		// 						alt="locations"
		// 					/>

		// 					<div className="location-content">
		// 						<h3>The Old Tavern</h3>
		// 						<span>Little Italy, New York</span>

		// 						<ul>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starHIcon}
		// 									width="17"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 						</ul>
		// 					</div>

		// 					<Link href="/listings" className="map-link"></Link>
		// 				</div>
		// 			</div>

		// 			<div className="col-lg-4 col-sm-6">
		// 				<div className="single-location bg-b5d3f0 d-flex justify-content-start align-items-center">
		// 					<Image
		// 						src={location3}
		// 						width={115}
		// 						height={115}
		// 						alt="locations"
		// 					/>

		// 					<div className="location-content">
		// 						<h3>Old Masters Art</h3>
		// 						<span>New York Upper East Side</span>

		// 						<ul>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starHIcon}
		// 									width="17"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 						</ul>
		// 					</div>

		// 					<Link href="/listings" className="map-link"></Link>
		// 				</div>
		// 			</div>

		// 			<div className="col-lg-4 col-sm-6">
		// 				<div className="single-location bg-ffdfd3 d-flex justify-content-start align-items-center">
		// 					<Image
		// 						src={location4}
		// 						width={115}
		// 						height={115}
		// 						alt="locations"
		// 					/>

		// 					<div className="location-content">
		// 						<h3>Chez Michel</h3>
		// 						<span>New York SoHo</span>

		// 						<ul>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starHIcon}
		// 									width="17"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 						</ul>
		// 					</div>

		// 					<Link href="/listings" className="map-link"></Link>
		// 				</div>
		// 			</div>

		// 			<div className="col-lg-4 col-sm-6">
		// 				<div className="single-location bg-ffeeee d-flex justify-content-start align-items-center">
		// 					<Image
		// 						src={location5}
		// 						width={115}
		// 						height={115}
		// 						alt="locations"
		// 					/>

		// 					<div className="location-content">
		// 						<h3>Bloom Field</h3>
		// 						<span>New York Upper West Side</span>

		// 						<ul>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starHIcon}
		// 									width="17"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 						</ul>
		// 					</div>

		// 					<Link href="/listings" className="map-link"></Link>
		// 				</div>
		// 			</div>

		// 			<div className="col-lg-4 col-sm-6">
		// 				<div className="single-location bg-dbcee9 d-flex justify-content-start align-items-center">
		// 					<Image
		// 						src={location6}
		// 						width={115}
		// 						height={115}
		// 						alt="locations"
		// 					/>

		// 					<div className="location-content">
		// 						<h3>Nature Getaway</h3>
		// 						<span>Chelsea New York</span>

		// 						<ul>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starIcon}
		// 									width="16"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 							<li>
		// 								<Image
		// 									src={starHIcon}
		// 									width="17"
		// 									height="16"
		// 									alt="locations"
		// 								/>
		// 							</li>
		// 						</ul>
		// 					</div>

		// 					<Link href="/listings" className="map-link"></Link>
		// 				</div>
		// 			</div>

		// 			<div className="col-lg-12">
		// 				<p className="all-categories mt-20">
		// 					Browse All Different{" "}
		// 					<Link href="/listings" className="read-more active">
		// 						Locations{" "}
		// 						<i className="ri-arrow-right-line"></i>
		// 					</Link>
		// 				</p>
		// 			</div>
		// 		</div>

		// 		<Image
		// 			src={shape1}
		// 			width={136}
		// 			height={125}
		// 			className="shape shape-1"
		// 			alt="locations"
		// 		/>
		// 		<Image
		// 			src={shape2}
		// 			width={159}
		// 			height={177}
		// 			className="shape shape-2"
		// 			alt="locations"
		// 		/>
		// 	</div>
		// </div>
	);
};

export default OtherTraders;

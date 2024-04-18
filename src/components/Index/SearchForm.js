"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import searchZoom from "../../../public/images/icon/search-zoom-in.svg";
import locationIco from "../../../public/images/icon/location.svg";
import globalIco from "../../../public/images/icon/global.svg";
import searchIcon from"../../../public/images/icon/plush.svg"
import CategoryFind from "./CategoryFind";
import LocationFind from "./LocationFind";
import { toast } from "react-hot-toast";

const SearchForm = () => {
	const [categories, setCategories] = useState([]);
	const [locations, setLocations] = useState([]);
	const [category, setCategory] = useState("");
	const [catSuggest, setCatSuggest] = useState(false);
	const [locSuggest, setLocSuggest] = useState(false);
	const [LocationValue, setLocationValue] = useState("");
	const router = useRouter();

	const [titles, setTitles] = useState([]);
	const [title, setTitle] = useState('');
	const [titleSuggest, setTitleSuggest] = useState(false);


	// const handleSearch = useCallback(() => {
	// 	router.push(
	// 		`/listings?category=${category}&location_value=${LocationValue}`
	// 	);
	// }, [category, LocationValue, router]);

	const handleSearch = useCallback(() => {
		router.push(
			`/listings?title=${title}`
		);
	}, [title, router]);

	const handleCategorySelect = (cat) => {
		setCatSuggest(false);
		setCategory(cat);
	};
	const handleLocationSelect = (loc) => {
		setLocSuggest(false);
		setLocationValue(loc);
	};
	const handleTitleSelect = (ttle) => {
		setTitleSuggest(false);
		setTitle(ttle);
	};

	const categoryFind = useCallback((catValue) => {
		if (catValue) {
			axios
				.get(`/api/categories/${catValue}`)
				.then((response) => {
					setCategories(response.data);
				})
				.catch((error) => {
					toast.error("Something went wrong!");
				});

			setCatSuggest(true);
		}
	}, []);
	const locationFind = useCallback((locValue) => {
		if (locValue) {
			axios
				.get(`/api/categories/location/${locValue}`)
				.then((response) => {
					setLocations(response.data);
				})
				.catch((error) => {
					toast.error("Something went wromg!");
				});

			setLocSuggest(true);
		}
	}, []);
	const titleFind = useCallback((ttleValue) => {
		if (ttleValue) {
			axios
				.get(`/api/titles/${ttleValue}`)
				.then((response) => {
					setTitles(response.data);
				})
				.catch((error) => {
					toast.error("Something went wromg!");
				});

			setTitleSuggest(true);
		}
	}, []);

	return (
		<form
			className="search-form"
			onSubmit={(e) => {
				e.preventDefault();
				handleSearch();
			}}
		>
			<div className="row align-items-center">
				<div className="col-lg-9">
					<div className="row">
						<div className="col-lg-6 col-md-6 pe-0">
							<div className="form-group position-relative">
								<input
									type="text"
									className="form-control"
									placeholder="Type what are you looking for..."
									value={title}
									onChange={(e) => {
										setTitle(e.target.value);
										titleFind(e.target.value);
									}}
								/>
								{/* <Image
									src={searchIcon}
									width="20"
									height="20"
									alt="global"
								/> */}

								{/* {categories.length > 0 && catSuggest && (
									<CategoryFind
										categories={categories}
										onSelect={handleCategorySelect}
									/>
								)} */}
							</div>
						</div>

						{/* <div className="col-lg-6 col-md-6 p-0">
							<div className="form-group position-relative">
								<input
									type="text"
									className="form-control"
									placeholder="Enter Location (e.g. Canada)"
									value={LocationValue}
									onChange={(e) => {
										setLocationValue(e.target.value);
										locationFind(e.target.value);
									}}
								/>
								<Image
									src={locationIco}
									width="18"
									height="18"
									alt="location"
								/>

								{locations.length > 0 && locSuggest && (
									<LocationFind
										locations={locations}
										onSelect={handleLocationSelect}
									/>
								)}
							</div>
						</div> */}
					</div>
				</div>
				<div className="col-lg-3 ps-0">
					<button type="submit" className="default-btn">
						<span>
							Search Now
							{/* <Image
								src={searchZoom}
								width="20"
								height="20"
								alt="search"
							/> */}
						</span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchForm;

"use client";
import React, {useState} from "react";
import ListingItem from "./ListingItem";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import EditListing from "@/components/ProfileInfo/listings/EditListing";


const ListingCard = ({ postedListings, likedListings, currentUser}) => {
	const router = useRouter();
	const [viewKey, setViewKey] = useState("Posted");
	const [listingToEdit, setListingToEdit] = useState({});

	// let element = 
	// 	<ListingItem
	// 		cUser = {currentUser}	
	// 		key={list.id}
	// 		{...list}
	// 		onDelete={() => deleteListing(list.id)}
	// 		internalChange={()=>setViewKey('Edit')}
	// onEdit={() => setListingToEdit()}
	// 		view={viewKey}
	// 	/>


	const deleteListing = async (listingId) => {
		const shouldDelete = window.confirm(
			"Are you sure you want to delete this listing?"
		);
		if (shouldDelete) {
			await axios
				.delete(`/api/listings/${listingId}`)
				.then((response) => {
					toast.success("Success");
					router.refresh();
				})
				.catch((error) => {
					toast.error("Something went wrong!");
				});
		}
	};

	const alterView = (e) =>{
		// console.log(e.target.innerHTML);
		if (e.target.innerHTML.includes("Posted")){ 
			setViewKey("Posted");
		}
		else if (e.target.innerHTML.includes("Liked")){ 
			setViewKey("Liked");
		}
		else {
			setViewKey("Edit");
		}
	}

	const renderSwitch = (str) =>{
		switch(str){
			case 'Liked':
				return(
					likedListings.map((list) => (
						<ListingItem
							cUser = {currentUser}	
							key={list.id}
							{...list}
							onDelete={() => deleteListing(list.id)}
							internalChange={()=>setViewKey('Liked')}
							onEdit={() => setListingToEdit(
								{
									"id":list.id,
									"title":list.title,
									"description":list.description,
									"imageSrc":list.imageSrc,
									"category":list.category,
									"features":list.features,
									"price":list.price,
									"quantity":list.quantity
								}
							)}
							view={viewKey}
						/>
					))
				);
			case 'Edit':
				return(
					<>
						<h1></h1>
						<EditListing 
							currentUser={currentUser}
							listingToEdit={listingToEdit}/>
					</>
				);
			case 'Posted':
			default:
				return(
					postedListings.map((list) => (
						<ListingItem
							cUser = {currentUser}	
							key={list.id}
							{...list}
							onDelete={() => deleteListing(list.id)}
							internalChange={()=>setViewKey('Edit')}
							onEdit={() => setListingToEdit(
								{
									"id":list.id,
									"title":list.title,
									"description":list.description,
									"imageSrc":list.imageSrc,
									"category":list.category,
									"features":list.features,
									"price":list.price,
									"quantity":list.quantity
								}
							)}
							view={viewKey}
						/>
					))
				);
		}
	}

	return (
		<div className={'row'}>
			<div>
				<button onClick={alterView}>Posted: {postedListings.length}</button>
				<button onClick={alterView}>Liked: {likedListings.length}</button>
			</div>

			{renderSwitch(viewKey)}

		</div>
	);
};

export default ListingCard;

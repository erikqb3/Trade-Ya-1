import React from "react";
import { redirect } from "next/navigation";
import PageBanner from "@/components/Common/PageBanner";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ListingCard from "@/components/ProfileInfo/listings/ListingCard";
import getListings from "@/actions/getListings";
import getUserById from "@/actions/getUserById";
import getMyFavourites from "@/actions/getFavourites";
export const dynamic = "force-dynamic";
import LeftSidebar from "@/components/ProfileInfo/LeftSidebar";


const page = async ({ searchParams }) => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	const user = await getUserById({ userId: `${currentUser.id}` });
	const favourites = await getMyFavourites();
	const newFav = [];


	// console.log(currentUser, "CURRENT USER", user, "USER")


	favourites.forEach(item => {
		newFav.push(item.listing);
	});
	

	return (
		<>
			<PageBanner pageTitle="All listings" />

			<div className="ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
						 	<LeftSidebar />
						</div>
						<div className="col-lg-8">
							<ListingCard 
								postedListings={user?.listings && user.listings.reverse()} //this way the more recent comes first
								likedListings = {newFav} 
								currentUser={currentUser} 
								/> 							
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;

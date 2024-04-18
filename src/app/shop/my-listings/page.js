import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import ListingCard from "@/components/Listings/MyListings/ListingCard";
import getMyListings from "@/actions/getMyListings";
import { getCurrentUser } from "@/actions/getCurrentUser";
export const dynamic = "force-dynamic";

const page = async () => {
	const listings = await getMyListings();

	const currentUser = await getCurrentUser();
	return (
		<>
			<PageBanner pageTitle="My Listings" />
			<ListingCard currentUser={currentUser} listings={listings} />
		</>
	);
};

export default page;

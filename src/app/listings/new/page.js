import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import ListingForm from "@/components/Listings/New/ListingForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

const page = async () => {

	const currentUser = await getCurrentUser();
	

	return (
		<>
			<PageBanner pageTitle="Add Listing" />
			<ListingForm currentUser={currentUser}/>
		</>
	);
};

export default page;

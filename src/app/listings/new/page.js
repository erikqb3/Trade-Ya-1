import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import ListingForm from "@/components/Listings/New/ListingForm";

const page = () => {
	return (
		<>
			<PageBanner pageTitle="Add Listing" />
			<ListingForm />
		</>
	);
};

export default page;

import React from "react";
import Listings from "@/components/Listings/Index";
import getListings from "@/actions/getListings";
import SearchForm from "@/components/Listings/SearchForm";
import Banner from "@/components/Index/Banner";
import { getCurrentUser } from "@/actions/getCurrentUser";
export const dynamic = "force-dynamic";

import Featured from "@/components/Shop/Featured";

const page = async ({ searchParams }) => {
	// console.log(searchParams)
	const { listings, totalPages } = await getListings(searchParams);
	const currentUser = await getCurrentUser();

	return (
		<>
			<SearchForm searchParams={searchParams} />
			{/* <Banner></Banner> */}
			<Featured currentUser={currentUser} myListings={listings} searchParams={searchParams} />
		</>
	);
};

export default page;

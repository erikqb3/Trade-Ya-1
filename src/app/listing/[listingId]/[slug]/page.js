import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import { redirect } from "next/navigation";
import getListingBySlug from "@/actions/getListingBySlug";
import Listing from "@/components/Listing/Index";
import { getCurrentUser } from "@/actions/getCurrentUser";
import getUserById from "@/actions/getUserById";
import  getReviewByListingId from "@/actions/getReviewsByListingId";


export const generateMetadata = ({ params }) => {
	return {
		title: `Listing - ${params.slug}`,
	};
};

const page = async ({ params }) => {
	const listing = await getListingBySlug(params);
	const currentUser = await getCurrentUser();
	const reviews = await getReviewByListingId(params);
	let cUser;

	try {
		cUser = await getUserById({userId: `${currentUser.id}`})
	}
	catch (err){
		cUser = null;
	}

	return (
		<>
			{/* <PageBanner pageTitle={listing?.title} /> */}
			<Listing
				currentUser={cUser}
				listing={listing}
				reviews={reviews}
			/>
		</>
	);
};

export default page;

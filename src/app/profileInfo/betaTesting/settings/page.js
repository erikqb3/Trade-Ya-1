import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import { getCurrentUser } from "@/actions/getCurrentUser";
import SettingsForm from "@/components/ProfileInfo/SettingsForm";
import InfoUpdateForm from "@/components/ProfileInfo/InfoUpdateForm";
import UpdateSettingsForm from "@/components/ProfileInfo/UpdateSettingsForm";
export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";
import getListings from "@/actions/getListings";
import LeftSidebar from "@/components/ProfileInfo/LeftSidebar";

const page = async ({ searchParams }) => {
	const {listings} = await getListings(searchParams);
	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";
	if (!currentUser) {
		redirect("/");
	}



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
							{/* <SettingsForm currentUser={currentUser} />
							<InfoUpdateForm currentUser={currentUser?.profile} /> */}
							<UpdateSettingsForm currentUser={currentUser} ></UpdateSettingsForm>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;

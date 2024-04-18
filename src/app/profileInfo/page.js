import React from "react";
import { redirect } from "next/navigation";
import PageBanner from "@/components/Common/PageBanner";
import { getCurrentUser } from "@/actions/getCurrentUser";
import DashboardStats from "@/components/ProfileInfo/DashboardStats";
import countData from "@/actions/getCountData";
import LeftSidebar from "@/components/ProfileInfo/LeftSidebar";

const page = async () => {
	const { users, listings, blogPosts, reviews } = await countData();
	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";
	if (!currentUser) {
		redirect("/");
	}
	return (
		<>
			<PageBanner pageTitle="Dashboard" />

			<div className="ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
						 	<LeftSidebar />
						</div>

						<div className="col-lg-8">
							<DashboardStats
								users={users}
								listings={listings}
								blogPosts={blogPosts}
								reviews={reviews}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;

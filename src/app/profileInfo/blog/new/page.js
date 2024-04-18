import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import BlogPostForm from "@/components/ProfileInfo/BlogPostForm";
import LeftSidebar from "@/components/ProfileInfo/LeftSidebar";

const page = () => {
	return (
		<>
			<PageBanner pageTitle="Create a blog post" />
 
			<div className="ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
						 	<LeftSidebar />
						</div>

						<div className="col-lg-8">
							<BlogPostForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;

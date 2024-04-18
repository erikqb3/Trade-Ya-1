import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import getBlogPosts from "@/actions/getBlogPosts";
import BlogContent from "@/components/BlogContent";

const page = async () => {
	const blogPosts = await getBlogPosts();
	return (
		<>
			<PageBanner pageTitle="Blog" />
			<BlogContent blogPosts={blogPosts} />
		</>
	);
};

export default page;

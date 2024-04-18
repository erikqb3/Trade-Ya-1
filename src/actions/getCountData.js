import prisma from "@/libs/prismadb";

export default async function countData(params) {
	try {
		const users = await prisma.user.count();
		const listings = await prisma.listing.count();
		const reviews = await prisma.review.count();
		const blogPosts = await prisma.blog.count();
		return { users, listings, reviews, blogPosts };
	} catch (error) {
		throw new Error(error);
	}
}

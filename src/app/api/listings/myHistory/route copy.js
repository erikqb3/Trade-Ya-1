import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(request) {
	// const category = request.nextUrl.searchParams.get("category");

	let listings;

	listings = await prisma.listing.findUnique({
		where: {
			category: category,
		},
		orderBy: {
			created_at: "desc",
		},
		include: {
			user: {
				select: {
					name: true,
					id: true,
				},
			},
		},
	});

	return NextResponse.json(listings);
}

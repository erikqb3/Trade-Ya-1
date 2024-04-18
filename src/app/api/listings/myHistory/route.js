import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(request, { params }) {


	let listing_id = params;

	listings = await prisma.listing.findUnique({
		where: {
			id: listing_id,
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

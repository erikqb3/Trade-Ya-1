import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function POST(request) {
	const body = await request.json();
	const listingId = request.nextUrl.searchParams.get('listingId')

	const {
		title,
		description,
		imageSrc,
		category,
		features
	} = body;

	const infoExist = await prisma.listing.findUnique({
		where: {
			id: listingId,
		},
	});

	let listing;

	if (infoExist) {
		listing = await prisma.listing.update({
			where: {
				id: listingId,
			},
			data: {
				title,
				description,
				imageSrc,
				category,
				features
			},
		});
	} 

	return NextResponse.json(listing);
}

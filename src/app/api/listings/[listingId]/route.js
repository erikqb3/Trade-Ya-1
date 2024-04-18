import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function DELETE(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { listingId } = params;
	if (!listingId) {
		throw new Error("Invalid ID");
	}

	// const findListing = await prisma.listing.findUnique({
	// 	where: {
	// 		id: parseInt(listingId),
	// 	},
	// });
	// if (!findListing) {
	// 	throw new Error("Not found!");
	// }

	const deletedListing = await prisma.listing.delete({
		where: {
			id: parseInt(listingId),
		},
	});

	return NextResponse.json(deletedListing);
}

export async function POST(request, { params }) {
	const body = await request.json();
	const listingId = parseInt(params.listingId);
	console.log(listingId)

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

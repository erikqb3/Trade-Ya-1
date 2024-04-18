import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { slugify } from "@/utils/slugify";

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json(
			{ message: "Authentication faild!" },
			{ status: 401 }
		);
	}

	const body = await request.json();
	const {
		title,
		description,
		imageSrc,
		address,
		features,
		category,
		location,
		price,
	} = body;

	let slug = slugify(title);
	const slugExist = await prisma.listing.findFirst({
		where: {
			slug: slug,
		},
	});

	if (slugExist) {
		slug = `${slug}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
	}

	Object.keys(body).forEach((value) => {
		if (!body[value]) {
			NextResponse.json(
				{
					message: "One or more fileds are empty!",
				},
				{ status: 404 }
			);
		}
	});

	const listing = await prisma.listing.create({
		data: {
			title,
			slug,
			description,
			imageSrc,
			address,
			features,
			category,
			location_value: location.label,
			price: parseInt(price, 10),
			latitude: location.latlng[0],
			longitude: location.latlng[1],
			userId: currentUser.id,
		},
	});

	return NextResponse.json(listing);
}

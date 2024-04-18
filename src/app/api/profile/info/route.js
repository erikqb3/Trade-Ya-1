import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

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
		bio,
		gender,
		address,
		phone,
	} = body;

	const infoExist = await prisma.profile.findFirst({
		where: {
			userId: currentUser.id,
		},
	});

	let profile;

	if (infoExist) {
		profile = await prisma.profile.update({
			where: {
				userId: currentUser.id,
			},
			data: {
				bio,
				gender,
				address,
				phone,
			},
		});
	} else {
		profile = await prisma.profile.create({
			data: {
				bio,
				gender,
				address,
				phone,
				userId: currentUser.id,
			},
		});
	}

	return NextResponse.json(profile);
}

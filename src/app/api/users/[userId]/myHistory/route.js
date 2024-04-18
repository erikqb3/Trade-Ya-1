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

	const { myHistory } = body;
	console.log(myHistory);

	let profile = await prisma.user.update({
		where: {
			id: currentUser.id,
		},
		data: {
			myHistory
		},
	});

	return NextResponse.json(profile);
}

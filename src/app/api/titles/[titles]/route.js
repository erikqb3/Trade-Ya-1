import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(request, { params }) {
	const { title } = params;

	const titles = await prisma.listing.findMany({
		where: {
			title: {
				contains: title,
			},
		},
		select: {
			id: true,
			title: true,
		},
		distinct: ["title"],
	});

	return NextResponse.json(titles);
}

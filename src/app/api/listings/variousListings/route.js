import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(request) {
	// console.log("THIS ROUTE WORKS")

	const variousIds_array= request.nextUrl.searchParams.get("list").split(",").reverse();
  let variousListings_array = []


  async function getVarious(variousIds_array) {
    for (const listingId of variousIds_array){
      variousListings_array.push(
        await prisma.listing.findUnique({
          where: {
            id: parseInt(listingId),
          },
          include: {
            user: {
              include: {
                profile: true,
              },
            },
            reviews: {
              select: {
                rating: true,
              },
            }
          }
        })
      ) 
    }
  }

  await getVarious(variousIds_array);

	return NextResponse.json(variousListings_array);
}

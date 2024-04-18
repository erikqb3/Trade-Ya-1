import prisma from "@/libs/prismadb";

export default async function getListings(params) {
	try {
		const {
			category,
			location_value,
			title,
			page = 1,
			pageSize = 9,
		} = params;

		const parsedPage = parseInt(page, 10);
		const parsedPageSize = parseInt(pageSize, 10);

		let query = {};

		if (category) {
			query.category = category;
		}

		if (location_value) {
			query.location_value = location_value;
		}

		const totalListings = await prisma.listing.count({
			where: {
				AND: [
					{ title: { contains: title } },
					{
						OR: [query],
					},
				],
			},
		});
		const totalPages = Math.ceil(totalListings / parsedPageSize);

		const listings = await prisma.listing.findMany({
			where: {
				AND: [
					{ title: { contains: title } },
					{
						OR: [query],
					},
				],
			},
			// skip: (parsedPage - 1) * parsedPageSize,
			// take: parsedPageSize,
			orderBy: {
				created_at: "desc",
			},
			include: {
				user: {
					select: {
						name: true,
					},
				},
			},
		});

		return { listings, totalPages };
	} catch (error) {
		throw new Error(error);
	}
}

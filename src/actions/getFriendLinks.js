import { getServerSession } from "next-auth/next";
import { authHandler } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prismadb";

export async function getCurrentSession() {
	return await getServerSession(authHandler);
}

export async function getFriendLinks(mainId) {
	try {
		const session = await getCurrentSession();

		if (!session?.user?.email) {
			return null;
		}

		const friendLink = await prisma.friendLink.findMany({
			where: {
        receiverId: mainId
			},
		});

		if (!friendLink) {
			return null;
		}

		return {
			friendLink
		};
	} catch (error) {
		return null;
	}
}

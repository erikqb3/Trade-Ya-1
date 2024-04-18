/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		unoptimized: true,
		domains: [
			"res.cloudinary.com",
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"via.placeholder.com",
			"developers.google.com",
		],
	},
	env: {
		NEXTAUTH_SECRET: "zKSqxkeQB36pXUtDbZCSJrYoAxlA5Acut7bMahFBMLU=", //same as in .env
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dxkvem7qh", // CHECK!! https://console.cloudinary.com/console/c-0dd466c1e9b508fafe628fad55b216
		NEXT_CLOUDINARY_PRESET: "ml_default",
	},
};

module.exports = nextConfig;

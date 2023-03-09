/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	trailingSlash: true,
	images: {
		loader: "akamai",
		path: "/",
	},
};

module.exports = nextConfig;

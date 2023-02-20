import Head from "next/head";

import { Head as HeadDoc } from "next/document";

const HeadMeta = () => {
	return (
		<Head>
			{/* title */}
			<title>me?ME!</title>

			{/* meta */}
			<meta name="description" content="What makes me ME" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</Head>
	);
};

export default HeadMeta;

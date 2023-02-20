import Head from "next/head";

const HeadMeta = () => {
	return (
		<Head>
			{/* title */}
			<title>me?ME!</title>

			{/* meta */}
			<meta name="description" content="What makes me ME" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* link */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700;900&display=swap" rel="stylesheet" />
		</Head>
	);
};

export default HeadMeta;

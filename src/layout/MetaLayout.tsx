import Head from "next/head";
import { ReactNode } from "react";
import DATA_META from "../data/metaData";

interface MetaLayoutProps {
	children: ReactNode;
}
const MetaLayout: React.FC<MetaLayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>{DATA_META.title}</title>

				<meta
					name="viewport"
					content="height=device-height, 
				width=device-width, 
				initial-scale=1.0, 
				minimum-scale=1.0, 
				maximum-scale=1.0, 
				user-scalable=no"
				></meta>

				<meta property="og:type" content="website" />
				<meta property="og:url" content={DATA_META.url} />
				<meta property="og:title" content={DATA_META.title} />
				<meta property="og:image" content={`${DATA_META.url}og-image.png`} />
				<meta property="og:description" content={DATA_META.description} />
				<meta property="og:site_name" content={DATA_META.site_name} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				{/* favicon */}
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			{children}
		</>
	);
};

export default MetaLayout;

import AppProvider from "@/provider/AppProvider";
import FirebaseProvider from "@/provider/FirebaseProvider";
import GlobalStyles from "@/styles/global-styles";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<FirebaseProvider>
					<Component {...pageProps} />
				</FirebaseProvider>
			</ThemeProvider>
		</AppProvider>
	);
}

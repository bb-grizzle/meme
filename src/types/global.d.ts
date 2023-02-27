declare global {
	interface Window {
		EMULATORS_STARTED: any;
	}
}

export const ReactNativeWebView = window.EMULATORS_STARTED;

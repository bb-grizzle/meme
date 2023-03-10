import { getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";

const EMULATORS_STARTED = "EMULATORS_STARTED";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_APIKEY,
	authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECTID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
	appId: process.env.NEXT_PUBLIC_APPID,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

const initFirebase = () => {
	const nowApp = getApps();
	if (!nowApp.length) {
		const app = initializeApp(firebaseConfig);
		return app;
	} else {
		return nowApp[0];
	}
};

export const initAnalytics = () => {
	isSupported().then((result) => {
		getAnalytics(app);
	});
};

const app = initFirebase();

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

if (process.env.NODE_ENV === "development") {
	if (typeof window !== "undefined" && !window[EMULATORS_STARTED]) {
		const localhost = "localhost";
		const hostname = typeof window !== "undefined" ? window.location.hostname : localhost;
		connectAuthEmulator(auth, `http://${hostname}:9099`, { disableWarnings: true });
		connectFirestoreEmulator(firestore, `${hostname}`, 8080, {});
		connectStorageEmulator(storage, `${hostname}`, 9199);
		window[EMULATORS_STARTED] = true;
	}
}

export { auth, firestore, storage };

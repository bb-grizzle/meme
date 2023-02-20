import { getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

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

const app = initFirebase();

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

if (process.env.NODE_ENV === "development") {
	const localhost = "localhost";
	const hostname = typeof window !== "undefined" ? window.location.hostname : localhost;
	connectAuthEmulator(auth, `http://${hostname}:9099`, { disableWarnings: true });
	connectFirestoreEmulator(firestore, `${hostname}`, 8080);
	connectStorageEmulator(storage, `${hostname}`, 9199);
}

export { auth, firestore, storage };

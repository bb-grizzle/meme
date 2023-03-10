type DataErrorType = {
	[key: string]: { [key: string]: string };
};

export const DATA_ERROR: DataErrorType = {
	normal: {
		default: "서버에 문제가 생겼어요... 🥲",
	},
	sendEmail: { default: "이메일 전송을 실패했어요... 😭" },
	// signin
	signIn: {
		default: "이메일 로그인을 실패했어요... 😢",
		browser: "로그인 시도한 브라우져로 시도해주세요... 😅",
		url: "잘못된 url 이에요. 😢",
		checkUser: "유저 정보를 확인하지 못했어요... 😢",
		"auth/invalid-email": "로그인이 불가능한 이메일 입니다... 😅",
		"auth/wrong-password": "비밀번호가 틀렸네요... 😅",
	},
	signUp: {
		default: "회원가입을 실패했어요... 😤",
		"auth/email-already-in-use": "이미 존재하는 이메일이에요... 😤",
		"auth/invalid-email": "불가능한 이메일입니다... 😤",
		"auth/weak-password": "불가능한 이메일입니다... 😤",
	},

	findPw: {
		default: "비밀번호찾기를 수행하지 못했어요... 😭",
	},
	// user
	user: {
		default: "사용자 정보를 업데이트 하지 못했어요. ",
		exist: "존재하지 않는 사용자 입니다. ",
		displayNameTaken: "이미 사용중인 이름이에요... 🥹",
	},
	// plan
	tag: {
		default: "fail to get tag",
	},

	// profile
	profile: {
		default: "fail to get profile",
		exist: "존재하지 않는 사용자 입니다. ",
	},
	// setting
	setting: {
		default: "설정을 변경하지 못했어요... 🧰",
		changeDisplayName: "이름을 변경하지 못했어요... 🐧 ",
	},
};

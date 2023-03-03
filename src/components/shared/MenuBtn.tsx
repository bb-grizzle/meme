import useMenu from "@/provider/AppProvider/useMenu";
import Button from "./Button";

const MenuBtn = () => {
	const { openMenu } = useMenu();
	return <Button iconOption={{ name: "menu" }} onClick={openMenu} />;
};

export default MenuBtn;

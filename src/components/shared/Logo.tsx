import { ROUTER } from "@/router";
import Link from "next/link";
import styled from "styled-components";

const Text = styled.p`
	font-weight: 900;
	font-size: 24px;
	font-style: italic;
`;

const Logo = () => {
	return (
		<Text>
			<Link href={ROUTER.home}>me?ME!</Link>
		</Text>
	);
};

export default Logo;

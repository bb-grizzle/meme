import useIsUnique from "@/provider/AppProvider/useIsUnique";
import styled from "styled-components";

const Wrapper = styled.div`
	width: ${(props) => props.theme.size.core.pc}px;
	height: ${(props) => props.theme.size.core.pc}px;
	padding: 8px;
	border: 2px solid ${(props) => props.theme.colorPalette.bw[700]};
	text-align: center;
	border-radius: 999px;
	${(props) => props.theme.layout.center_flex};
	color: ${(props) => props.theme.colorPalette.bw[700]};
	${(props) => props.theme.fontStyle.body.large};
	background-color: transparent;
	position: relative;
	overflow: hidden;
`;

const Dim = styled.div`
	${(props) => props.theme.layout.full_abs};
	background-color: ${(props) => props.theme.color.white};
`;

const Text = styled.p`
	text-transform: capitalize;
	font-weight: 900;
	position: relative;
`;

const UserCore = () => {
	const { sharedUser } = useIsUnique();

	return (
		<Wrapper>
			<Dim />
			{sharedUser === 1 ? <Text>😎 one and only!</Text> : <Text>😂 there are {Number(sharedUser) < 21 ? Number(sharedUser) - 1 : "20 over"} more people.</Text>}
		</Wrapper>
	);
};

export default UserCore;

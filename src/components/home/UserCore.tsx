import styled from "styled-components";
import RandBgText from "../shared/RandBgText";

interface UserCoreProps {
	sharedUser: number;
	name: string;
}

const Wrapper = styled.div`
	width: ${(props) => props.theme.size.core.pc}px;
	height: ${(props) => props.theme.size.core.pc}px;
	padding: 8px;
	border: 2px solid ${(props) => props.theme.colorPalette.bw[700]};
	text-align: center;
	border-radius: 999px;
	${(props) => props.theme.layout.center_flex};
	color: ${(props) => props.theme.colorPalette.bw[900]};
	${(props) => props.theme.fontStyle.body.medium};
	background-color: transparent;
	position: relative;
	overflow: hidden;
`;

const Dim = styled.div`
	${(props) => props.theme.layout.full_abs};
	background-color: ${(props) => props.theme.color.white};
`;

const Text = styled.p`
	font-weight: 900;
	position: relative;
	line-height: 1.6;
`;

const Name = styled(RandBgText)`
	text-transform: initial;
	${(props) => props.theme.fontStyle.label.large};
`;

const UserCore: React.FC<UserCoreProps> = ({ sharedUser, name }) => {
	return (
		<Wrapper>
			<Dim />

			{sharedUser === 1 ? (
				<Text>
					<Name text={name} /> are one and only 😎
				</Text>
			) : sharedUser === 0 ? (
				<Text>
					{" "}
					<Name text={name} /> are empty ...😅
				</Text>
			) : (
				<Text>
					{Number(sharedUser) < 21 ? Number(sharedUser) - 1 : "20 over"} people are same with <Name text={name} />
				</Text>
			)}
		</Wrapper>
	);
};

export default UserCore;

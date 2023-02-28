import styled from "styled-components";

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
	color: ${(props) => props.theme.colorPalette.bw[700]};
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

const Name = styled.span`
	text-transform: initial;
	${(props) => props.theme.fontStyle.label.large};
	border: 1px solid ${(props) => props.theme.colorPalette.bw[700]};
	border-radius: 4px;
	color: white;
	padding: 0 4px;
	background-color: ${(props) => props.theme.colorPalette.tag.bgColor[Math.floor(Math.random() * props.theme.colorPalette.tag.bgColor.length)]};
`;

const UserCore: React.FC<UserCoreProps> = ({ sharedUser, name }) => {
	return (
		<Wrapper>
			<Dim />

			{sharedUser === 1 ? (
				<Text>
					<Name>{name}</Name> are one and only 😎
				</Text>
			) : (
				<Text>
					{Number(sharedUser) < 21 ? Number(sharedUser) - 1 : "20 over"} people are same with <Name>{name}</Name>
				</Text>
			)}
		</Wrapper>
	);
};

export default UserCore;

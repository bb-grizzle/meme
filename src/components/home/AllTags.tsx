import useHomeTag from "@/provider/HomeProvider/useHomeTag";
import { useCallback, useState } from "react";
import Tag from "../tag";
import styled, { css } from "styled-components";
import Button, { BtnTypeEnum } from "../shared/Button";
import Container from "../shared/Container";
import media from "@/styles/media";
import { ROUTER } from "@/router";
import useUser from "@/provider/AppProvider/useUser";
import { DATA_MESSAGE } from "@/data/message";

const BtnWrapper = styled.div`
	position: fixed;
	right: ${(props) => props.theme.size.offset.pc}px;
	bottom: ${(props) => props.theme.size.offset.pc}px;
	gap: 8px;
	display: flex;
	flex-direction: column;

	@media ${media.tablet} {
		right: ${(props) => props.theme.size.offset.tablet}px;
		bottom: ${(props) => props.theme.size.offset.tablet}px;
	}
`;

const Section = styled.section<{ active: boolean }>`
	position: fixed;
	z-index: ${(props) => props.theme.zIndex.header};
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	backdrop-filter: blur(12px);
	transition: ${(props) => props.theme.transition.default};
	transition-property: transform;

	${(props) =>
		!props.active
			? css`
					transform: translateY(100%);
			  `
			: css`
					transform: translateY(0%);
			  `};
`;

const Header = styled.div`
	height: ${(props) => props.theme.size.header.pc}px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const ButtonCustom = styled(Button)``;

const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	justify-content: center;
`;

const AllTags = () => {
	const { tags, selectTag } = useHomeTag();
	const [isClicked, setIsClicked] = useState(false);
	const { uid } = useUser();

	const onShareClick = async () => {
		const url = `${window.location.origin}/profile/${uid}`;
		await window.navigator.clipboard.writeText(url);
		alert(DATA_MESSAGE.share);
	};

	const render = useCallback(() => {
		if (tags.loading) {
			return "loading";
		} else if (tags.error) {
			return tags.error;
		} else if (!tags.data?.length) {
			return "not yet";
		} else {
			return tags.data.map((tag) => {
				return <Tag key={tag.id} {...tag} onClick={() => selectTag(tag.id)} />;
			});
		}
		// eslint-disable-next-line
	}, [tags]);

	return (
		<>
			<BtnWrapper>
				<ButtonCustom iconOption={{ name: "share-social-outline" }} btnType={BtnTypeEnum.LINE} onClick={onShareClick} />
				<ButtonCustom iconOption={{ name: "rocket-outline" }} btnType={BtnTypeEnum.LINE} onClick={() => setIsClicked(true)} />
			</BtnWrapper>
			<Section active={isClicked}>
				<Container>
					<Header>
						<Button iconOption={{ name: "close" }} onClick={() => setIsClicked(false)} />
					</Header>
					<TagWrapper>{render()}</TagWrapper>
				</Container>
			</Section>
		</>
	);
};

export default AllTags;

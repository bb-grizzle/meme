import useSelectedTag from "@/provider/HomeProvider/useSelectedTag";
import { colorPalette } from "@/styles/theme/colorPalette";
import { useCallback } from "react";
import styled, { css } from "styled-components";
import Button from "../shared/Button";

const Wrapper = styled.div<{ active: boolean }>`
	position: fixed;
	left: 50%;
	bottom: 64px;
	border: 1px solid ${(props) => props.theme.colorPalette.bw[900]};

	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity, transform;
	padding: 8px;
	padding-top: 0;
	padding-bottom: 12px;
	border-radius: 8px;

	z-index: ${(props) => props.theme.zIndex.home.applyBtn};

	${(props) =>
		!props.active
			? css`
					opacity: 0;
					transform: translateX(-50%) translateY(100%);
			  `
			: css`
					opacity: 1;
					transform: translateX(-50%) translateY(0%);
			  `};
`;

const ApplyButton = styled(Button)`
	margin-bottom: 8px;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Text = styled.p`
	${(props) => props.theme.fontStyle.label.medium};
`;

const ApplyBtn = () => {
	const { isChanged, applyTag, changedTagsId } = useSelectedTag();

	const renderChanges = useCallback(() => {
		return changedTagsId
			.filter((_, index) => index < 3)
			.map((el) => {
				return (
					<Text key={el.id}>
						{el.active ? "+" : "-"} {el.keyword}
					</Text>
				);
			});
	}, [changedTagsId]);

	return (
		<Wrapper active={isChanged}>
			<ApplyButton text={`Apply ${changedTagsId.length} changes`} mainColor={colorPalette.bw[900]} onClick={applyTag} />
			<TextWrapper>
				{renderChanges()}
				{changedTagsId.length > 3 && <Text>... and {changedTagsId.length - 3} more</Text>}
			</TextWrapper>
		</Wrapper>
	);
};

export default ApplyBtn;

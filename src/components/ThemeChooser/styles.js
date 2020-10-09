import { Selectable } from "../styles";
import styled from "styled-components";
import theme from "../../theme";
import themes from "../../data/themes";

export const Wrapper = styled.div`
	display: grid;
	row-gap: ${theme.gutter / 2}px;
	grid-template-columns: repeat(${themes.length}, 1fr);
`;

export const Item = {
	Outer: styled(Selectable)`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 47px;
		height: 47px;
		border-radius: 47px;
		box-sizing: border-box;
		margin: 0 auto;
	`,
	Inner: styled.div`
		border-radius: 39px;
		width: 39px;
		height: 39px;
		background-image: url("${({ thumb }) => thumb}");
		background-size: cover;
	`,
	Text: styled.p`
		grid-row-start: 2;
		font-size: 11px;
		text-align: center;
		font-weight: 500;
		margin-bottom: 0;

		visibility: ${({ selected }) => (selected ? `visible` : `hidden`)};
	`,
};

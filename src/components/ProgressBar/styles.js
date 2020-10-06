import styled from "styled-components";

import { createBreakpoint } from "styled-components-breakpoint";
import theme from "../../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	grid-column-start: 2;
	grid-column-end: 6;

	${breakpoint("lg")`
		grid-column-start: 3;
		grid-column-end: 6;
	`}
`;

export const Label = styled.label`
	font-family: ${({ theme }) => theme.font.family.sansSerif};
	font-weight: 700;
	font-size: 14px;
	line-height: 30px;
	color: ${({ theme }) => theme.color.white};
`;

export const Notch = styled.div`
	transform: translateX(${({ pos }) => pos * 10}%);
	width: 10%;
	height: 100%;
	border-radius: inherit;
	background-color: ${({ theme }) => theme.color.white};
`;

export const Bar = styled.div`
	position: relative;
	width: 100%;
	height: 6px;
	border-radius: 2px;
	background-color: ${({ theme }) => theme.color.lightgrey};
`;

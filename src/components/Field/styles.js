import { createBreakpoint } from "styled-components-breakpoint";
import styled from "styled-components";
import theme from "../../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

export const Wrapper = styled.section`
	grid-column: 1 / -1;
	${breakpoint("lg")`
		grid-column: 3 / 6;
	`}
`;

export const Title = styled.h4`
	font-weight: 700;
	font-size: 10px;
	border-bottom: 1px solid white;
	text-transform: uppercase;
	padding-bottom: 4px;
	margin: 0 0 3px;
`;

export const Body = styled.p`
	font-weight: 700;

	font-size: 15px;
	line-height: 17.5px;

	${breakpoint("lg")`
	font-size: 13px;
	line-height: 16.5px;
	`}
`;

export const Input = styled.textarea`
	width: 100%;
	color: white;
	outline: none;
	font-size: 22px;
	line-height: 28px;
	border: none;
	padding: 0;
	background-color: transparent;
	font-family: ${({ theme }) => theme.font.family.sansSerif};
	font-weight: 300;
	min-height: 200px;
	resize: none;
`;

export const ValidationWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 30px;
`;

export const Indicator = styled.div`
	display: inline-block;
	border-radius: 7px;
	width: 7px;
	height: 7px;
	margin-right: 5px;
	background-color: ${({ danger, theme }) =>
		danger ? theme.color.danger : theme.color.success};
`;

export const Sub = styled.div`
	font-weight: 600;
	font-size: 10px;
	line-height: 14px;
	font-family: ${({ theme }) => theme.font.family.sansSerif};
	margin-bottom: 0;

	${({ hide }) => hide && `visibility: hidden`}
`;

export const Colored = styled.span`
	color: ${({ danger, theme }) =>
		danger ? theme.color.danger : theme.color.success};
`;

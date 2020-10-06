import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";
import theme from "../../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

const Label = styled.label`
	font-size: 24px;
	line-height: 30px;
	font-family: "neue-haas-grotesk-display", sans-serif;
	font-weight: 300;
`;

export const Number = styled(Label)`
	grid-column-start: 1;
	text-align: center;

	${breakpoint("lg")`
		grid-column-start: 2;
		`}
`;

export const Text = styled(Label)`
	grid-column-start: 2;
	grid-column-end: 6;

	${breakpoint("lg")`
		grid-column-start: 3;
		grid-column-end: 6;
	`}
`;

export const Input = styled.textarea`
	grid-column-start: 2;
	grid-column-end: 6;
	outline: none;
	font-size: 30px;
	line-height: 40px;
	border: none;
	background-color: transparent;
	font-family: ${({ theme }) => theme.font.family.sansSerif};
	font-weight: 300;
	min-height: 150px;
	resize: none;

	${breakpoint("lg")`
		grid-column-start: 3;
		grid-column-end: 6;
	`}
`;

export const ValidationWrapper = styled.section`
	grid-column-start: 2;
	grid-column-end: 6;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 30px;

	${breakpoint("lg")`
		grid-column-start: 3;
		grid-column-end: 6;
	`}
`;

export const Indicator = styled.div`
	display: inline-block;
	border-radius: 10px;
	width: 10px;
	height: 10px;
	margin-right: 5px;
	background-color: ${({ danger, theme }) =>
		danger ? theme.color.danger : theme.color.success};
`;

export const Sub = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	font-family: ${({ theme }) => theme.font.family.sansSerif};
	margin-bottom: 0;
`;

export const Colored = styled.span`
	color: ${({ danger, theme }) =>
		danger ? theme.color.danger : theme.color.success};
`;

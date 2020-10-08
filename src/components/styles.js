import { createBreakpoint } from "styled-components-breakpoint";
import styled from "styled-components";
import theme from "../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

const lightSansSerif = `
    font-family: ${theme.font.family.sansSerif};
	font-weight: 300;
`;

export const Wrapper = styled.main`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 20px;
	width: calc(100% - ${theme.gutter * 2}px);
	max-width: 500px;
	box-sizing: border-box;

	color: white;

	${breakpoint("lg")`
		max-width: 1032px;
		grid-template-columns: repeat(10, 1fr);
    `}
`;

export const Logo = styled.img.attrs({
	src: require("../assets/logo-black.svg"),
})`
	height: 54px;
	margin-top: 50px;
	margin-bottom: 90px;
	grid-column: 1 / -1;
	justify-self: center;
`;

export const Heading = styled.h1`
	${lightSansSerif}
	font-size: 48px;
	line-height: 48px;
	margin-bottom: ${theme.gutter * 2}px;
	text-align: center;

	${breakpoint("lg")`
        text-align: left !important
        `}
`;

export const Subheading = styled.h3`
	${lightSansSerif}
	font-weight: 300;
	font-size: 24px;
	line-height: ${theme.gutter * 2}px;
	text-align: ${({ center }) => (center ? "center" : "left")};

	${breakpoint("lg")`
        text-align: left !important
        `}

	margin-bottom: 40px;

	> a {
		text-decoration: underline;
		color: inherit;
	}
`;

export const Title = styled.h2`
	${lightSansSerif}
	font-size: ${theme.gutter * 2}px;
	line-height: ${theme.gutter * 2}px;
	padding-bottom: 15px;
	border-bottom: 1px solid black;
	margin-bottom: 10px;
`;

export const Subtitle = styled.h4`
	font-family: ${theme.font.family.sansSerif};
	font-weight: 600;
	font-size: 12px;
	line-height: ${theme.gutter * 2}px;
	padding-bottom: 1px;
	${({ borderless }) =>
		!borderless && `border-bottom: 1px solid ${theme.color.grey}`}
`;

export const Selectable = styled.div`
	border-style: solid;
	border-width: 2px;
	border-color: transparent;
	will-change: border-color;
	transition: border-color 0.23s;

	${({ selected }) =>
		selected ? `border-color: #0085FF` : `cursor: pointer`};
`;

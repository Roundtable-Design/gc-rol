import { Wrapper as DefaultWrapper } from "../../components/styles";
import { createBreakpoint } from "styled-components-breakpoint";
import styled from "styled-components";
import theme from "../../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

export const Background = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${theme.color.white};
`;

export const Wrapper = styled(DefaultWrapper)`
	&&& {
		grid-template-columns: 100%;
		/* max-width: 500px; */

		${breakpoint("lg")`
		width: auto;
        grid-template-columns: 400px 400px;
        `}
	}
`;

export const TextWrapper = styled.section`
	grid-column: 1 / -1;
	justify-self: center;
	width: 100%;
	margin-bottom: ${theme.gutter}px;
	overflow-x: scroll;

	${breakpoint("lg")`
		grid-column: 2 / -1;
    `}
`;

export const DeviceWrapper = styled.div`
	width: 275px;
	display: block;
	margin: 0 auto;
	margin-bottom: 40px;
	justify-self: center;
	position: relative;

	grid-column-start: 1;
	grid-row: 3 / 6;
`;

export const DownloadButtonWrapper = styled.div`
	padding-top: 5px;
	margin-bottom: 40px;
	display: flex;
	justify-content: center;

	> .only-mobile {
		display: initial;
	}
	> .only-desktop {
		display: none;
	}

	${breakpoint("lg")`
		> .only-mobile { display: none }
		> .only-desktop {display: initial}
	`}
`;

export const Subtitle = styled.h4`
	font-family: ${theme.font.family.sansSerif};
	font-weight: 600;
	font-size: 12px;
	line-height: 30px;
	color: ${theme.color.grey};
	padding-bottom: 1px;
	${({ borderless }) =>
		!borderless && `border-bottom: 1px solid ${theme.color.grey}`}
`;

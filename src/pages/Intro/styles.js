import { Wrapper as DefaultWrapper } from "../../components/styles";
import { createBreakpoint } from "styled-components-breakpoint";
import styled from "styled-components";
import theme from "../../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

export const Wrapper = styled(DefaultWrapper)`
	max-height: 0;
`;

export const TextWrapper = styled.div`
	text-align: center;

	grid-column: 1 / -1;
	margin-bottom: auto;

	${breakpoint("lg")`
		width: 378px;
		margin-left: auto;
		margin-right: auto;
    `}
`;

export const Title = styled.h1`
	font-family: ${({ theme }) => theme.font.family.sansSerif};
	font-style: normal;
	font-weight: 300;
	font-size: 28px;
	line-height: 34px;
	margin-bottom: 25px;
`;

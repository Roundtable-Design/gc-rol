import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";
import theme from "../../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

export const ButtonWrapper = styled.div`
	grid-column-start: 2;
	grid-column-end: 6;

	margin-bottom: 30px;

	${breakpoint("lg")`
        grid-column-start: 3;
    `}
`;

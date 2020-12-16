import { createBreakpoint } from "styled-components-breakpoint";
import styled from "styled-components";
import theme from "../../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

export const ButtonWrapper = styled.div`
	margin-bottom: 30px;
	grid-column: 1 / -1;

	${breakpoint("xs", "lg")`
	display: flex;
	justify-content: center;
	`}

	${breakpoint("lg")`
        grid-column: 3 / -1;
    `}
`;

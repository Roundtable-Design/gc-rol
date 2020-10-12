import { Subheading } from "../../components/styles";
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

export const SubWrapper = styled.div`
	grid-column: 1 / -1;
	${breakpoint("lg")`
		grid-column: 3 / 6;
	`}
	margin-bottom: ${theme.gutter}px;
`;

export const Title = styled(Subheading)`
	padding-bottom: 2px;
	margin-bottom: 5px;
	font-size: 22px;
	line-height: 22px;
	border-bottom: 1px solid white;
`;

export const Description = styled(Subheading)`
	font-size: 22px;
	line-height: 28px;
`;

import styled from "styled-components";
import Button from "../Button";

export const Wrapper = styled.form`
	margin: 15px 0;
	position: relative;
	min-height: 100vh;
`;

const getX = (disp) => {
	if (disp === 0) return 0;
	else if (disp > 0) return 100;
	else if (disp < 0) return -100;
};

export const SlideWrapper = styled.div`
	height: 264px;
`;

export const ControlWrapper = styled.div`
	margin-left: 70px;
`;

export const Slide = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	transition: all 0.3s;
	${({ disp }) => `
        transform: translateX(${getX(disp)}%);
        opacity: ${disp === 0 ? 1 : 0};
    `}
`;

// type: "button" otherwise it assumes it is a submit button
export const Next = styled(Button).attrs({ type: "button" })`
	grid-column-start: 2;
	grid-row-start: 3;
	width: 103px;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
	grid-column-start: 1;
	min-height: 45px;
	border-radius: 3px;
	display: flex;
	align-items: center;
	padding: 0 15px;
	position: relative;
	background: ${({ gradient }) => gradient || "none"};
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;

export const Indicator = {
	Outer: styled.div`
        width: 15px;
        height: 15px;
        border-radius 15px;
        box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.25);
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
	Inner: styled.div`
		width: 9px;
		height: 9px;
		border-radius: 9px;
		background-color: ${({ theme, active }) =>
			active ? theme.color.grey : "transparent"};
	`,
};

export const Text = styled.label`
	font-weight: 500;
	font-size: 14px;
	line-height: 30px;
	margin-left: 15px;
	margin-bottom: 0;
	font-family: ${({ theme }) => theme.font.family.sansSerif};
`;

export const Input = styled.input.attrs({ type: "radio", name: "radio" })`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
`;

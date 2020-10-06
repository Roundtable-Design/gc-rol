import styled from "styled-components";

export const Text = styled.span`
	font-size: 18px;
	line-height: 30px;
	font-family: "neue-haas-grotesk-display", sans-serif;
	font-weight: 600;
	margin-right: 10px;
	will-change: margin-right;
	transition: margin-right 0.3s;
`;

export const Wrapper = styled.button`
	border: none;
	appearance: none;
	background-color: transparent;
	border-bottom-style: solid;
	border-width: 2px;
	border-color: rgba(255, 255, 255, 0.5);
	transition: border-color 0.3s;
	will-change: border-color;
	outline: none;
	padding: 0;
	color: white;

	&:hover {
		border-color: rgba(255, 255, 255, 1);

		${Text} {
			margin-right: 20px;
		}
	}
`;

export const Arrow = styled.img.attrs({
	src: require("../../assets/arrow.svg"),
})`
	width: 19px;
`;

export const DownArrow = styled.img.attrs({
	src: require("../../assets/down-arrow.svg"),
})`
	width: 9px;
`;

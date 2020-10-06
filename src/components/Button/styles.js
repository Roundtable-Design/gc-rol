import styled from "styled-components";

export const Wrapper = styled.button`
	border: none;
	appearance: none;
	background-color: transparent;
	border-bottom: 2px solid white;
	outline: none;
	padding: 0;
	color: white;
`;

export const Text = styled.span`
	font-size: 18px;
	line-height: 30px;
	font-family: "neue-haas-grotesk-display", sans-serif;
	font-weight: 600;
	margin-right: 10px;
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

import styled, { keyframes } from "styled-components";

const blink = keyframes`
	from {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

export const Logo = styled.img.attrs({
	src: require("../../assets/logo-black.svg"),
})`
	width: 71px;
	height: 54px;
	display: inline-block;
	animation: ${blink} 1s infinite;
`;

export const Wrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #fdfdfd;
	z-index: 1000;
`;

export const Text = styled.p`
	text-align: center;
	font-family: ${({ theme }) => theme.font.family.sansSerif};
	font-size: 18px;
	font-weight: 500;
	margin: 15px 0 0;
`;

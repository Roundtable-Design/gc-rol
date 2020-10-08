import arrow from "../../assets/arrow.svg";
import arrowBlack from "../../assets/arrow-black.svg";
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

export const Arrow = styled.div`
	background-image: url("${({ dark }) => (dark ? arrowBlack : arrow)}");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	display: inline-block;
	width: 20px;
	height: 20px;

	${({ downArrow }) =>
		downArrow
			? `
			transform-origin: 6px 10px;
			transform: rotate(90deg);`
			: `height: 12px;`}
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

	${({ shadow }) =>
		shadow &&
		`
		padding: 6px 10px;
		text-transform: uppercase;
		box-sizing: border-box;
		box-shadow: 0 3px 2px #00000030;
		border: 1px solid #e5e5e5;

		span {
			font-size: 12px;
		}

		${Arrow} {
			transform-origin: center 75%;
			transform: rotate(90deg) scale(0.75);
		}
	`};

	span {
		color: white;
		${({ dark }) => dark && `color: black`};
	}

	&:hover {
		border-color: rgba(255, 255, 255, 1);

		${Text} {
			${({ noAnimate }) => !noAnimate && `margin-right: 20px;`}
		}
	}
`;

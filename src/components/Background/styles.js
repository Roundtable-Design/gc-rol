import styled from "styled-components";

export const Gradient = styled.div.attrs({ id: "background-gradient" })`
	width: 100%;
	height: calc(100% + 100px);
	/* min-height: 100vh; */
	/* background-attachment: fixed; */
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url("${require("../../assets/gradient.jpg")}");
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -5;
	will-change: transform;
	/* transition: 0.3s transform; */

	/* transform: translateY(${({ offsetY }) => offsetY}px); */
`;

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100%;
	/* background-image: url(${require("../../assets/noise.png")}); */
	/* background-repeat: repeat; */
	/* background-size: 375px 667px; */

	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

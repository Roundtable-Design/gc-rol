import styled from "styled-components";

export const Gradient = styled.div`
	width: 100%;
	min-height: 100vh;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url("${require("../../assets/gradient.jpg")}");
	position: relative;
`;

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	/* background-image: url(${require("../../assets/noise.png")}); */
	/* background-repeat: repeat; */
	/* background-size: 375px 667px; */

	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

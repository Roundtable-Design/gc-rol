import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	padding: 15px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${theme.color.grey};
`;

const Preview = ({ image }) => {
	return (
		<Wrapper>
			<img src={image} style={{ maxHeight: "100%", maxWidth: "100%" }} />
		</Wrapper>
	);
};

export default Preview;

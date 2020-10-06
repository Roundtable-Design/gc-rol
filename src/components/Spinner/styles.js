import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Text = styled.p`
	text-align: center;
	font-family: ${({ theme }) => theme.font.family.sansSerif};
	font-size: 18px;
	font-weight: 500;
	margin: 15px 0 0;
`;

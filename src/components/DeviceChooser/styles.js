import { Selectable } from "../styles";
import devices from "../../data/devices";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

// Got a width issues

export const Item = styled(Selectable)`
	width: 93px;
	height: 135px;
	margin: 0 auto;
	background-image: url("${({ image }) => image}");
	background-size: 85px 127px;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 3px;
`;

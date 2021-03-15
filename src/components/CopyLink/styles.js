import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	height: 42px;
	position: relative;
	margin-bottom: ${theme.gutter}px;
`;
export const Text = styled.input.attrs({
	readOnly: true,
	type: "text",
	tabIndex: "-1", // un-focusable
})`
	width: 100%;
	display: block;
	height: 100%;
	background: #f4f4f4;
	border: 0.25px solid #dddddd;
	box-sizing: border-box;
	border-radius: 2px;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;
	padding-left: 10px;
	letter-spacing: 0.015em;
	color: #2e2e2e;
	outline: none;
`;
export const Button = styled.button`
	appearance: none;
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	width: 104px;
	background: #fefefe;
	transition: background 0.2s;
	border: 0.25px solid #dddddd;
	box-sizing: border-box;
	border-radius: 0px 2px 2px 0px;
	display: flex;
	align-items: center;
	justify-content: center;

	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 30px;
	letter-spacing: 0.03em;
	color: #2e2e2e;
	outline: none;

	&:not(:disabled):hover {
		background: #f4f4f4;
	}
`;

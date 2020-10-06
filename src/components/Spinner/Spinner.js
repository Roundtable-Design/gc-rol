import React from "react";
import { Wrapper, Text } from "./styles";
import Loader from "react-loader-spinner";
import theme from "../../theme";

export const Spinner = ({ title }) => {
	return (
		<Wrapper>
			<Loader
				type="Grid"
				color={theme.color.black}
				width={75}
				height={75}
			/>
			<Text>{title}</Text>
		</Wrapper>
	);
};

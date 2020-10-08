import { Logo, Text, Wrapper } from "./styles";

import Loader from "react-loader-spinner";
import React from "react";
import theme from "../../theme";

export const Spinner = ({ title }) => {
	return (
		<Wrapper>
			{/* <Loader
				type="Grid"
				color={theme.color.black}
				width={75}
				height={75}
			/> */}
			<Logo />
			<Text>{title}</Text>
		</Wrapper>
	);
};

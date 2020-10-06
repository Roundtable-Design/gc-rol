import React from "react";
import { Wrapper, Indicator, Input, Text } from "./styles";

import theme from "../../theme";

export const Radio = ({ checked, onChange, label, gradient }) => {
	return (
		<Wrapper gradient={theme.gradients[gradient]}>
			<Input
				checked={checked}
				onChange={({ target }) => onChange(target.checked)}
			/>
			<Indicator.Outer>
				<Indicator.Inner active={checked} />
			</Indicator.Outer>
			<Text>{label}</Text>
		</Wrapper>
	);
};

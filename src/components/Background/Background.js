import { Gradient, Wrapper } from "./styles";

import React from "react";

export const Background = ({ children, fill }) => {
	return (
		<Gradient>
			<Wrapper>{children}</Wrapper>
		</Gradient>
	);
};

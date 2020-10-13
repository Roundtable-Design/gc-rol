import { Gradient, Wrapper } from "./styles";

import React from "react";

export const Background = ({ children }) => {
	return (
		<React.Fragment>
			<Gradient />
			<Wrapper>{children}</Wrapper>
		</React.Fragment>
	);
};

import { Gradient, Wrapper } from "./styles";

import React from "react";

export const Background = ({ children, fill }) => {
	return (
		<React.Fragment>
			<Gradient />
			<Wrapper>{children}</Wrapper>
		</React.Fragment>
	);
};

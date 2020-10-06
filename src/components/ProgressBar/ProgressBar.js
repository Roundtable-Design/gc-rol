import React from "react";

import { Wrapper, Label, Bar, Notch } from "./styles";

export const ProgressBar = ({ pos }) => {
	return (
		<Wrapper>
			<Label>{pos + 1} / 10</Label>
			<Bar>
				<Notch pos={pos} />
			</Bar>
		</Wrapper>
	);
};

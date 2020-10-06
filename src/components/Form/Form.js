import React from "react";

import ProgressBar from "../ProgressBar";
import { ControlWrapper, SlideWrapper, Wrapper, Slide, Next } from "./styles";

export const Form = ({ children: fields }) => {
	const [active, setActive] = React.useState(0);

	const handleNext = () => setActive(active + 1);

	return !isNaN(active) ? (
		<Wrapper>
			<SlideWrapper>
				{fields.map((field, index) => (
					<Slide key={`slide-${index}`} disp={index - active}>
						{field}
					</Slide>
				))}
			</SlideWrapper>
			<ControlWrapper>
				<Next onClick={handleNext}>Next</Next>
				<ProgressBar pos={active} />
			</ControlWrapper>
		</Wrapper>
	) : (
		"oh"
	);
};

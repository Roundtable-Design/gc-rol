import { Content, Frame, Wrapper } from "./styles";

import React from "react";

export const Mockup = ({ device, content, ...props }) => {
	const {
		constraints: { dX, dY, sWidth, dWidth, sHeight, dHeight },
		mockup,
	} = device;

	return (
		<Wrapper {...props}>
			<Content
				dX={dX}
				dY={dY}
				sWidth={sWidth}
				dWidth={dWidth}
				sHeight={sHeight}
				dHeight={dHeight}
				src={content}
			/>
			<Frame src={mockup} />
		</Wrapper>
	);
};

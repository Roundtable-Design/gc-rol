import { Gradient, Wrapper } from "./styles";

import React from "react";

export const Background = ({ children }) => {
	const gradient = React.useRef(null);

	React.useEffect(() => {
		window.addEventListener("scroll", () => {
			if (gradient.current !== null) {
				const { scrollHeight } = document.body;
				const { scrollTop } = document.documentElement;

				gradient.current.style.transform = `translateY(${
					(scrollTop / scrollHeight) * -100
				}px)`;
			}
		});
	}, []);

	return (
		<React.Fragment>
			<Gradient ref={gradient} />
			<Wrapper>{children}</Wrapper>
		</React.Fragment>
	);
};

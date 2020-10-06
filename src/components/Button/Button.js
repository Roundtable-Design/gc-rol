import React from "react";

import { Wrapper, DownArrow, Text, Arrow } from "./styles";

export const Button = ({
	children: text,
	onClick,
	type,
	className,
	downArrow,
}) => {
	return (
		<Wrapper className={className} onClick={onClick} type={type}>
			<Text>{text}</Text>
			{downArrow ? <DownArrow /> : <Arrow />}
		</Wrapper>
	);
};

import { Arrow, DownArrow, Text, Wrapper } from "./styles";

import React from "react";

export const Button = ({
	children: text,
	onClick,
	type,
	className,
	downArrow,
	...props
}) => {
	return (
		<Wrapper className={className} onClick={onClick} type={type} {...props}>
			<Text>{text}</Text>
			{downArrow ? <DownArrow /> : <Arrow />}
		</Wrapper>
	);
};

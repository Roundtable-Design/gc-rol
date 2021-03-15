import { Arrow, DownArrow, Filled, Text, Wrapper } from "./styles";

import React from "react";

export const Button = ({
	children: text,
	onClick,
	type,
	className,
	downArrow,
	dark,
	disabled,
	...props
}) => {
	return (
		<Wrapper
			className={className}
			onClick={onClick}
			type={type}
			dark={dark}
			noAnimate={downArrow}
			disabled={disabled}
			{...props}
		>
			<Text>{text}</Text>
			<Arrow
				downArrow={downArrow}
				style={{ height: "20px !important " }}
				dark={dark}
			/>
		</Wrapper>
	);
};

Button.Filled = ({ children, icon, ...props }) => (
	<Filled.Wrapper {...props}>
		<Filled.Text>{children}</Filled.Text>
		<Filled.Icon src={icon} />
	</Filled.Wrapper>
);

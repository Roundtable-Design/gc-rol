import { Item, Wrapper } from "./styles";

import React from "react";
import devices from "../../data/devices";

export const DeviceChooser = ({ selected, onChange, ...props }) => {
	return (
		<Wrapper {...props}>
			{devices.map(({ title, image }, index) => {
				return (
					<Item
						image={image}
						selected={index === selected}
						onClick={() => onChange(index)}
					/>
				);
			})}
		</Wrapper>
	);
};

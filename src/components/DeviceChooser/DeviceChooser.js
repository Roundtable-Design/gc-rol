import { Item, Wrapper } from "./styles";

import React from "react";
import devices from "../../data/devices";

export const DeviceChooser = ({ ...props }) => {
	const [selectedIndex, setSelectedIndex] = React.useState();

	return (
		<Wrapper {...props}>
			{devices.map(({ title, image }, index) => {
				return (
					<Item
						image={image}
						selected={index === selectedIndex}
						onClick={() => setSelectedIndex(index)}
					/>
				);
			})}
		</Wrapper>
	);
};

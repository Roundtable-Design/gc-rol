import { Item, Wrapper } from "./styles";

import React from "react";
import themes from "../../data/themes";

export const ThemeChooser = ({ ...props }) => {
	const [selectedIndex, setSelectedIndex] = React.useState();

	return (
		<Wrapper {...props}>
			{themes.map(({ title, thumb, image }, index) => {
				return (
					<React.Fragment>
						<Item.Outer
							key={`theme-choice-tn-${index}`}
							onClick={() => setSelectedIndex(index)}
							selected={index === selectedIndex}
						>
							<Item.Inner thumb={thumb} />
						</Item.Outer>
						<Item.Text
							key={`theme-choice-text-${index}`}
							selected={index === selectedIndex}
						>
							{title}
						</Item.Text>
					</React.Fragment>
				);
			})}
		</Wrapper>
	);
};

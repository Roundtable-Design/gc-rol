import { Item, Wrapper } from "./styles";

import React from "react";
import themes from "../../data/themes";

export const ThemeChooser = ({ selected, onChange, ...props }) => {
	return (
		<Wrapper {...props}>
			{themes.map(({ title, thumb, image }, index) => {
				return (
					<React.Fragment>
						<Item.Outer
							key={`theme-choice-tn-${index}`}
							onClick={() => onChange(index)}
							selected={index === selected}
						>
							<Item.Inner thumb={thumb} />
						</Item.Outer>
						<Item.Text
							key={`theme-choice-text-${index}`}
							selected={index === selected}
						>
							{title}
						</Item.Text>
					</React.Fragment>
				);
			})}
		</Wrapper>
	);
};

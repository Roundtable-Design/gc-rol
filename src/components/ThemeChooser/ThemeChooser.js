import { Item, Wrapper } from "./styles";

import React from "react";
import themes from "../../data/themes";

export const ThemeChooser = ({ selected, onChange, ...props }) => {
	return (
		<Wrapper {...props}>
			{themes.map(({ title, thumb, image }, index) => {
				return (
					<React.Fragment key={`theme-${index}`}>
						<Item.Outer
							onClick={() => onChange(index)}
							selected={index === selected}
						>
							<Item.Inner thumb={thumb} />
						</Item.Outer>
						<Item.Text selected={index === selected}>
							{title}
						</Item.Text>
					</React.Fragment>
				);
			})}
		</Wrapper>
	);
};

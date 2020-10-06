import {
	Body,
	Colored,
	Indicator,
	Input,
	Sub,
	Title,
	ValidationWrapper,
	Wrapper,
} from "./styles";

import React from "react";
import { isValidField } from "../../functions";

export const Field = React.forwardRef(
	({ index, title, body, placeholder, value, onChange }, ref) => {
		const invalid = !isValidField(value);
		const [focused, setFocused] = React.useState(false);
		const [visited, setVisited] = React.useState(false);

		const handleFocus = () => setFocused(true);
		const handleBlur = () => {
			if (!visited) setVisited(true);
			setFocused(false);
		};
		const handleChange = ({ target }) => {
			if (!visited) setVisited(true);
			onChange(target.value);
		};

		return (
			<Wrapper>
				<Title>
					{index}. {title}
				</Title>
				<Body>{body}</Body>
				<Input
					ref={ref}
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
				/>
				<ValidationWrapper>
					{focused && (
						<React.Fragment>
							<Sub>
								<Indicator danger={visited && invalid} />
								<Colored danger={visited && invalid}>
									{value.length}
								</Colored>
								/60 characters
							</Sub>
						</React.Fragment>
					)}
					{invalid && visited && (
						<Sub>
							<Colored danger>
								Please make sure this field is filled out
								correctly
							</Colored>
						</Sub>
					)}
				</ValidationWrapper>
			</Wrapper>
		);
	}
);

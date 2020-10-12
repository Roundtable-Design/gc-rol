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
	({ index, numbered, title, body, placeholder, value, onChange }, ref) => {
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
					{numbered && (
						<React.Fragment>
							{index}.
							<span style={{ visibility: "hidden" }}>–</span>
						</React.Fragment>
					)}
					{title}
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
					<Sub hide={!focused}>
						<Indicator danger={visited && invalid} />
						<Colored danger={visited && invalid}>
							{value.length}
						</Colored>
						/60 characters
					</Sub>
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

import React from "react";

import Field from "../../components/Field";
import { Redirect } from "react-router-dom";
import {
	getPractices,
	isValidResults,
	setField,
	isCompletedResults,
	isValidField,
} from "../../functions";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { Wrapper, Logo } from "../../components/styles";
import Background from "../../components/Background";
import { ButtonWrapper } from "./styles";
import animateScrollTo from "animated-scroll-to";

const Review = ({ results = [], onResultsChange }) => {
	const history = useHistory();
	const [fieldRefs, setFieldRefs] = React.useState([]);

	const addFieldRef = (ref) => {
		if (ref && !fieldRefs.includes(ref)) {
			let refs = [...fieldRefs];
			refs.unshift(ref);
			setFieldRefs(refs);
		}
	};

	const handleSubmit = async () => {
		if (isValidResults(results)) {
			if (isCompletedResults(results)) {
				history.push("/results");
			} else {
				const field = fieldRefs.find(
					({ value }) => !isValidField(value)
				);
				await animateScrollTo(field.previousSibling);
				field.focus();
			}
		}
	};

	const handleFieldChange = (field) => {
		const updatedResults = setField(results, field);
		onResultsChange(updatedResults);
	};

	return isValidResults(results) ? (
		<Background>
			<Wrapper>
				<Logo />
				{getPractices(results).map(({ value, label, title }, index) => {
					return (
						<Field
							onChange={(value) =>
								handleFieldChange({ label, value })
							}
							value={value}
							label={title}
							index={index + 1}
							key={`review-field-${index}`}
							ref={(ref) => addFieldRef(ref)}
						/>
					);
				})}
				<ButtonWrapper>
					<Button onClick={handleSubmit}>Create Rule of Life</Button>
				</ButtonWrapper>
			</Wrapper>
		</Background>
	) : (
		<Redirect to="/" />
	);
};

export default Review;

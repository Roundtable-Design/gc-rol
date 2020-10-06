import { Logo, Wrapper } from "../../components/styles";
import {
	getPractices,
	isCompletedResults,
	isValidField,
	isValidResults,
	setField,
} from "../../functions";

import Background from "../../components/Background";
import Button from "../../components/Button";
import { ButtonWrapper } from "./styles";
import Field from "../../components/Field";
import React from "react";
import { Redirect } from "react-router-dom";
import animateScrollTo from "animated-scroll-to";
import { useHistory } from "react-router-dom";

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
				{getPractices(results).map(
					({ value, body, title, placeholder }, index) => {
						return (
							<Field
								onChange={(value) =>
									handleFieldChange({ title, value })
								}
								value={value}
								body={body}
								title={title}
								placeholder={placeholder}
								index={index + 1}
								key={`review-field-${index}`}
								ref={(ref) => addFieldRef(ref)}
							/>
						);
					}
				)}
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

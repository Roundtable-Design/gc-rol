import { ButtonWrapper, Description, SubWrapper, Title } from "./styles";
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
import Field from "../../components/Field";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react";
import { Redirect } from "react-router-dom";
import animateScrollTo from "animated-scroll-to";
import fields from "../../data/fields";
import { useHistory } from "react-router-dom";
import validate from "js-email-validator";

const Review = ({ results = [], onResultsChange }) => {
	const history = useHistory();
	const [fieldRefs, setFieldRefs] = React.useState([]);
	const emailRef = React.useRef(null);
	const [email, setEmail] = React.useState("");
	const [emailValid, setEmailValid] = React.useState();

	const addFieldRef = (ref) => {
		if (ref && !fieldRefs.includes(ref)) {
			let refs = [...fieldRefs];
			refs.unshift(ref);
			setFieldRefs(refs);
		}
	};

	const handleSubmit = async () => {
		if (!emailValid) {
			await animateScrollTo(emailRef.current);
			emailRef.current.focus();
		}

		if (isValidResults(results) && emailValid) {
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

	const handleEmailChange = (email) => {
		setEmailValid(validate(email));
		setEmail(email);
	};

	const handleFieldChange = (field) => {
		const updatedResults = setField(results, field);
		onResultsChange(updatedResults);
	};

	return isValidResults(results) ? (
		<Background>
			<Wrapper>
				<Logo />
				{fields.map(
					({ title, description, numbered, practices }, index) => (
						<React.Fragment key={`field-${index}`}>
							{title && description && (
								<SubWrapper>
									<Title>{title}</Title>
									<Description>{description}</Description>
								</SubWrapper>
							)}
							{practices.map(
								(
									{ value, body, title, placeholder },
									index
								) => (
									<Field
										onChange={(value) =>
											handleFieldChange({ title, value })
										}
										numbered={numbered}
										value={value}
										body={body}
										title={title}
										placeholder={placeholder}
										index={index + 1}
										key={`review-field-${index}`}
										ref={(ref) => addFieldRef(ref)}
									/>
								)
							)}
						</React.Fragment>
					)
				)}
				<Field
					ref={emailRef}
					onChange={handleEmailChange}
					value={email}
					title={"Email"}
					body={"Please enter your email address for our records."}
					placeholder={"Enter your email address"}
					type={"email"}
					maxLength={false}
					validationMessage={
						emailValid === false &&
						"Please enter a valid email address"
					}
				/>
				<ButtonWrapper>
					<MailchimpSubscribe
						url={
							"https://round-table.us3.list-manage.com/subscribe/post?u=deab99e3508f13360b7ea5ae0&amp;id=89eab3078b"
						}
						render={({ subscribe, status, message }) => {
							console.log({ status, message });

							if (status === "success") {
								handleSubmit();
							}

							return (
								<React.Fragment>
									<Button
										onClick={
											status !== "success"
												? () =>
														subscribe({
															EMAIL: email,
														})
												: null
										}
									>
										Create Rule of Life
									</Button>
								</React.Fragment>
							);
						}}
					/>
				</ButtonWrapper>
			</Wrapper>
		</Background>
	) : (
		<Redirect to="/" />
	);
};

export default Review;

import {
	ButtonWrapper,
	Description,
	Paragraph,
	SubWrapper,
	Title,
} from "./styles";
import { Colored, Indicator, Sub } from "../../components/Field/styles";
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

	React.useEffect(() => {
		if (window.localStorage) {
			let email = localStorage.getItem("rol-email");
			if (email) setEmail(email);
		}
	}, []);

	const addFieldRef = (ref) => {
		if (ref && !fieldRefs.includes(ref)) {
			let refs = [...fieldRefs];
			refs.unshift(ref);
			setFieldRefs(refs);
		}
	};

	const saveFieldsToLocalStorage = (fields) => {
		if (window.localStorage) {
			localStorage.setItem("rol-fields", JSON.stringify(fields));
			localStorage.setItem("rol-email", email);
		}
	};

	const handleSubmit = async () => {
		if (isValidResults(results)) {
			if (isCompletedResults(results)) {
				console.log({ results });

				saveFieldsToLocalStorage(results);
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
		console.log({ results, field });

		const updatedResults = setField(results, field);

		onResultsChange(updatedResults);
	};

	return isValidResults(results) ? (
		<Background>
			<Wrapper>
				<Logo />
				<SubWrapper style={{ marginBottom: 100 }}>
					<Paragraph>
						Welcome to the Garden Rule of Life generator. This is a
						flexible tool designed to help you on the simple path of
						discipleship.
						<br />
						<br />
						Below you will find twelve practices that fall under
						four spheres: life with God, life with others, work
						life, and soul care. Respond to each corresponding
						prompt with a simple way you want to engage with each
						practice. When you're done, you will be prompted to the
						next page where you will be able to save and download
						your rule.
						<br />
						<br />
						Remember, this is all a part of the easy yoke of Jesus,
						so go through this prayerfully and lightly.
					</Paragraph>
				</SubWrapper>
				{results.map(
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
							"//church.us8.list-manage.com/subscribe/post?u=59f5aadb0bf1ba7a3deaec063&amp;id=9c5ef83e83"
						}
						render={({ subscribe, status, message }) => {
							if (status) {
								console.log({ status, message });
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

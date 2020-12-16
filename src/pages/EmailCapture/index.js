import { Logo, Wrapper } from "../../components/styles";

import Background from "../../components/Background";
import Button from "../../components/Button";
import { ButtonWrapper } from "./styles";
import Field from "../../components/Field";
import React from "react";
import { useHistory } from "react-router-dom";
import validate from "js-email-validator";

export default () => {
	const history = useHistory();

	const [email, setEmail] = React.useState("");
	const [valid, setValid] = React.useState();

	const handleEmailChange = (value) => {
		setValid(validate(email));
		setEmail(value);
	};

	const handleSubmit = () => {
		if (valid) history.push("/results");
	};

	return (
		<Background>
			<Wrapper>
				<Logo />
				<Field
					onChange={handleEmailChange}
					value={email}
					title={"Email"}
					body={"Please enter your email address for our records."}
					placeholder={"Enter your email address"}
					type={"email"}
					maxLength={false}
					validationMessage={
						valid === false && "Please enter a valid email address"
					}
				/>
				<ButtonWrapper>
					<Button disabled={!valid} onClick={handleSubmit}>
						Create Rule of Life
					</Button>
				</ButtonWrapper>
			</Wrapper>
		</Background>
	);
};

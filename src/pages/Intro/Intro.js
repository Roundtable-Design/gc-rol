import { Logo, Subtitle, Wrapper } from "../../components/styles";
import { TextWrapper, Title } from "./styles";

import Background from "../../components/Background";
import Button from "../../components/Button";
import React from "react";
import { useHistory } from "react-router-dom";

export const Intro = () => {
	const history = useHistory();

	const handleBegin = () => {
		history.push("/review");
	};

	return (
		<Background>
			<Wrapper>
				<Logo />
				<TextWrapper>
					<Title>
						"This is what my Father wants: that anyone who sees the
						Son and trusts who he is and what he does and then
						aligns with him will enter real life, eternal life. My
						part is to put them on their feet alive and whole at the
						completion of time."
					</Title>
					<Subtitle borderless style={{ marginBottom: 100 }}>
						John 6: 39-40 MSG
					</Subtitle>
					<Button onClick={handleBegin}>Begin</Button>
				</TextWrapper>
			</Wrapper>
		</Background>
	);
};

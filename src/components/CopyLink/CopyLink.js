import { Button, Text, Wrapper } from "./styles";

import React from "react";

export const CopyLink = ({ link, ...props }) => {
	const [buttonText, setButtonText] = React.useState("Copy link");
	const [buttonDisabled, setButtonDisabled] = React.useState(false);

	const fieldRef = React.useRef(null);

	const handleCopy = () => {
		const { current: field } = fieldRef;

		if (field) {
			field.select();
			field.setSelectionRange(0, 99999);
			document.execCommand("copy");

			setButtonText("Copied!");
			setButtonDisabled(true);
		}
	};

	return (
		<Wrapper {...props}>
			<Text ref={fieldRef} value={link} />
			<Button disabled={buttonDisabled} onClick={handleCopy}>
				{buttonText}
			</Button>
		</Wrapper>
	);
};

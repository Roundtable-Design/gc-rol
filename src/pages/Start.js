import Field from "../components/Field";
import Form from "../components/Form";
import React from "react";
import fields from "../data/fields";
import { getPractices } from "../functions";

const Start = () => {
	return (
		<Form>
			{getPractices(fields).map(({ label, placeholder }, index) => (
				<Field
					key={`field-${index}`}
					label={label}
					placeholder={placeholder}
					index={index + 1}
				/>
			))}
		</Form>
	);
};

export default Start;

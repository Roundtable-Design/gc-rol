import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const fieldsTemplate = [
	{
		title: "Come",
		value: "Joining in with a KXC online service once a week",
	},
	{
		title: "Belong",
		value: "Joining a KXC hub and gather virtually once a week",
	},
	{
		title: "Serve",
		value: "Voolunteer with Foodbank to deliver parcels once per week",
	},
	{
		title: "Give",
		value: "Tithe monthly to KXC, give £10 per week to someone in need",
	},
	{
		title: "Scripture",
		value: "Join with the rest of the KXC community with reading plan",
	},
	{
		title: "Prayer",
		value: "Saying the Lord's Prayer at midday everyday",
	},
	{
		title: "Start the Day Right",
		value: "Naming ten things I am thankful for before I start my day",
	},
];

export default function FormOld() {
	const [fields, setFields] = React.useState(fieldsTemplate);
	const [showModal, setShowModal] = React.useState(false);
	const [dataURL, setDataURL] = React.useState(null);

	const handleFieldChange = (title, value) => {
		let fieldsCopy = [...fields];

		fieldsCopy.find((field) => field.title === title).value = value;

		setFields(fieldsCopy);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = [...fields].map(({ title, value }) => ({
			title,
			value,
		}));

		const res = await fetch("http://localhost:4000/form", {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(formData),
		});
		const { success, data, error } = await res.json();

		if (success) {
			setDataURL(data);
			setShowModal(true);
		} else {
			console.error(error);
		}
	};

	return (
		<Container
			style={{
				maxWidth: "600px",
				marginTop: "20px",
				marginBottom: "20px",
			}}
		>
			<h1 style={{ fontFamily: "Charter", fontWeight: "600" }}>
				Rule of Life
			</h1>
			<hr />
			<Form onSubmit={handleSubmit}>
				{fields.map(({ title, placeholder, value }, index) => (
					<Form.Group key={index}>
						<Form.Label>{title}</Form.Label>
						<Form.Control
							placeholder={placeholder}
							value={value}
							onChange={(event) =>
								handleFieldChange(title, event.target.value)
							}
						/>
					</Form.Group>
				))}
				<Button type="submit" variant="secondary">
					Go
				</Button>
			</Form>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Body>
					<h3
						style={{
							fontFamily: "Charter",
							fontWeight: "300",
							marginBottom: "10px",
						}}
					>
						Your wallpaper
					</h3>
					<br />
					<img style={{ width: "100%" }} src={dataURL} />
					<br />
					<a download="image.jpg" href={dataURL}>
						<Button variant="secondary">Download</Button>
					</a>
				</Modal.Body>
			</Modal>
		</Container>
	);
}

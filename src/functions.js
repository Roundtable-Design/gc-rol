export const getPractices = (fields) => {
	let flat = [];

	fields.forEach(({ practices }) =>
		practices.forEach((practice) => flat.push(practice))
	);

	return flat;
};

export const setField = (results, { label, value }) => {
	const updatedResults = [...results];

	for (const [outer, section] of updatedResults.entries()) {
		let inner = section.practices.findIndex(
			(practice) => practice.label === label
		);

		if (inner > -1) {
			updatedResults[outer].practices[inner].value = value;
			break;
		}
	}

	return updatedResults;
};

export const isValidField = (value) => value.length > 0 && value.length < 60;

export const isValidResults = (results) => {
	if (typeof results === "object") {
		if (results.hasOwnProperty("length")) {
			if (results.length > 0) {
				return true;
			} else console.warn("results has no length");
		} else console.warn("results not an array");
	} else console.warn("results not an object");

	console.warn("Invalid results.", { results });

	return false;
};

export const isCompletedResults = (results) => {
	if (
		!getPractices(results).find(
			({ value }) => typeof value === "undefined" || !isValidField(value)
		)
	) {
		return true;
	}
};

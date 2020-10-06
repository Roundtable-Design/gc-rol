import Canvas from "./canvas";

const format = {
	renderGradient: async (canvas, theme) => {
		await canvas.gradient(theme);
	},

	renderLogo: async (canvas) => {
		const width = 71;
		const height = 54;

		await canvas.image(
			require("./assets/logo.png"),
			canvas.canvasElement.width / (canvas.scale * 2) - width / 2,
			20,
			width,
			height,
			{ blendMode: "multiply" }
		);
	},

	renderFooter: (canvas) => {
		canvas.text("Be with Jesus. Become like Jesus. Do what Jesus did.", {
			x: canvas.canvasElement.width / canvas.scale / 2,
			y: canvas.canvasElement.height / canvas.scale - 28,
			fontFamily: "neue-haas-grotesk-display",
			fontWeight: 600,
			fontSize: 9,
			lineHeight: 12,
			textAlign: "center",
		});
	},

	renderPractices: (canvas, sections) => {
		let offsetTop = 78,
			offsetLeft = 20;

		sections.forEach(({ title, practices }) => {
			canvas.text(title, {
				x: offsetLeft,
				y: offsetTop,
				fontFamily: "starling, serif",
				fontWeight: 700,
				fontSize: 14,
				lineHeight: 17,
			});

			offsetTop += 19;

			practices.forEach(({ title, value }) => {
				// Human Resources
				canvas.hr(offsetLeft, offsetTop);
				offsetTop += 6;

				// title
				canvas.text(title, {
					x: offsetLeft,
					y: offsetTop,
					fontFamily: "neue-haas-grotesk-display, sans-serif",
					fontWeight: 300,
					fontSize: 22,
					lineHeight: 25,
				});

				// Value
				canvas.text(value, {
					x: 162,
					y: offsetTop,
					maxWidth: 192,
					fontFamily: "neue-haas-grotesk-display, sans-serif",
					fontWeight: 500,
					fontSize: 11,
					lineHeight: 14,
				});

				offsetTop += 39;
			});

			offsetTop += 5;
		});
	},

	toImage: async ({ practices, theme, constraints }) => {
		const [width, height] = constraints;

		const canvas = new Canvas().init(width, height);
		await format.renderGradient(canvas, theme);
		await format.renderLogo(canvas);
		format.renderPractices(canvas, practices);

		// format.renderFooter(canvas);

		return canvas.canvasElement.toDataURL("image/png", 1);
	},
};

export default format;

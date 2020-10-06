import Canvas from "./canvas";

const format = {
	renderGradient: async (canvas, theme) => {
		await canvas.gradient(theme);
	},

	renderLogo: async (canvas) => {
		const width = 71.72;
		const height = 32;

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

		sections.forEach(({ label, practices }) => {
			canvas.text(label, {
				x: offsetLeft,
				y: offsetTop,
				fontFamily: "starling, serif",
				fontWeight: 700,
				fontSize: 14,
				lineHeight: 17,
			});

			offsetTop += 19;

			practices.forEach(({ label, value }) => {
				// Human Resources
				canvas.hr(offsetLeft, offsetTop);
				offsetTop += 6;

				// label
				canvas.text(label, {
					x: offsetLeft,
					y: offsetTop,
					fontFamily: "neue-haas-grotesk-display, sans-serif",
					fontWeight: 300,
					fontSize: 24,
					lineHeight: 27,
				});

				// Value
				canvas.text(value, {
					x: 192,
					y: offsetTop,
					maxWidth: 162,
					fontFamily: "neue-haas-grotesk-display, times",
					fontWeight: 500,
					fontSize: 12,
					lineHeight: 14,
				});

				offsetTop += 45;
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
		format.renderFooter(canvas);

		return canvas.canvasElement.toDataURL("image/png", 1);
	},
};

export default format;

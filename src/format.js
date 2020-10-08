import Canvas from "./canvas";

const format = {
	offsetTop: 0,

	renderGradient: async (canvas, theme) => {
		await canvas.gradient(theme);
	},

	renderImage: async (canvas, src) => {
		await canvas.image(
			src,
			0,
			0,
			canvas.canvasElement.width / canvas.scale,
			canvas.canvasElement.height / canvas.scale,
			{ blendMode: "multiply" }
		);
	},

	renderLogo: async (canvas, fgDark) => {
		format.offsetTop += 20;

		const width = 71;
		const height = 54;

		const image = fgDark
			? require("./assets/logo-black.png")
			: require("./assets/logo.png");

		await canvas.image(
			image,
			canvas.canvasElement.width / (canvas.scale * 2) - width / 2,
			format.offsetTop,
			width,
			height
			// { blendMode: "multiply" }
		);

		format.offsetTop += 55;
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
		const offsetLeft = 20;

		sections.forEach(({ title, practices }) => {
			canvas.text(title, {
				x: offsetLeft,
				y: format.offsetTop,
				fontFamily: "starling, serif",
				fontWeight: 700,
				fontSize: 14,
				lineHeight: 17,
			});

			format.offsetTop += 19;

			practices.forEach(({ title, value }) => {
				// Human Resources
				canvas.hr(offsetLeft, format.offsetTop);
				format.offsetTop += 6;

				// title
				canvas.text(title, {
					x: offsetLeft,
					y: format.offsetTop,
					fontFamily: "neue-haas-grotesk-display, sans-serif",
					fontWeight: 300,
					fontSize: 22,
					lineHeight: 25,
				});

				// Value
				canvas.text(value, {
					x: 162,
					y: format.offsetTop,
					maxWidth: 192,
					fontFamily: "neue-haas-grotesk-display, sans-serif",
					fontWeight: 500,
					fontSize: 11,
					lineHeight: 14,
				});

				format.offsetTop += 39;
			});

			format.offsetTop += 5;
		});
	},

	toImage: async ({ practices, theme, fgDark, constraints }) => {
		const { sWidth, sHeight } = constraints;

		const canvas = new Canvas().init(sWidth, sHeight);

		format.offsetTop = sHeight > 670 ? 30 : 0;

		canvas.canvasElement.getContext("2d").fillStyle = fgDark
			? "#1a1a1a"
			: "white";
		canvas.canvasElement.getContext("2d").strokeStyle = fgDark
			? "#1a1a1a"
			: "white";

		if (Array.isArray(theme)) await format.renderGradient(canvas, theme);
		else await format.renderImage(canvas, theme);

		await format.renderLogo(canvas, fgDark);

		format.renderPractices(canvas, practices);

		// format.renderFooter(canvas);

		return canvas.canvasElement.toDataURL("image/png", 1);
	},
};

export default format;

const gutter = 20;

export default function Canvas() {
	this.scale = 4;
	this.canvasElement = null;
	this.context = null;

	this.init = (width, height) => {
		const canvasElement = document.createElement("canvas"),
			context = canvasElement.getContext("2d");

		canvasElement.width = width * this.scale;
		canvasElement.height = height * this.scale;

		context.fillStyle = "black";
		context.strokeStyle = "black";
		context.textBaseline = "top";
		context.lineWidth = 2;

		this.canvasElement = canvasElement;
		this.context = context;

		return this;
	};

	this.image = async (src, x, y, width, height, options = {}) => {
		const outer = await new Promise((res) => {
			const inner = new Image();
			inner.onload = () => {
				res(inner);
			};
			inner.src = src;
		});

		this.context.save();
		if (options.hasOwnProperty("blendMode"))
			this.context.globalCompositeOperation = options.blendMode;

		this.context.drawImage(
			outer,
			x * this.scale,
			y * this.scale,
			width * this.scale,
			height * this.scale
		);
		this.context.restore();
	};

	this.hr = (
		x,
		y,
		width = this.canvasElement.width - gutter * (this.scale * 2)
	) => {
		const { context } = this;

		context.moveTo(x * this.scale, y * this.scale);
		context.lineTo(x * this.scale + width, y * this.scale);
		context.stroke();
	};

	this.text = (
		string,
		{
			x,
			y,
			fontFamily,
			fontWeight,
			fontSize,
			lineHeight,
			textAlign,
			maxWidth = this.canvasElement.width,
		}
	) => {
		const { context } = this;

		const words = string.split(" "),
			lines = [];

		context.save();
		if (textAlign) context.textAlign = textAlign;
		context.font = `normal normal ${fontWeight} ${
			fontSize * this.scale
		}px/${lineHeight * this.scale}px ${fontFamily}`;

		let current = [];
		words.forEach((word, index) => {
			current.push(word);

			if (
				context.measureText(current.join(" ")).width >
				maxWidth * this.scale
			) {
				current.pop();
				lines.push(current.join(" "));
				current = [word];
			}
		});

		lines.push(current.join(" "));

		lines.forEach((line, index) =>
			context.fillText(
				line,
				x * this.scale,
				(y + lineHeight * index) * this.scale
			)
		);
		context.restore();
	};

	this.gradient = async (colorStops) => {
		const { width, height } = this.canvasElement;
		const { context } = this;

		const grad = context.createLinearGradient(
			0,
			height / 4,
			width * 1.5,
			height
		);
		colorStops.forEach((color, index) => {
			grad.addColorStop(index / (colorStops.length - 1), color);
		});

		context.save();

		context.fillStyle = grad;
		context.fillRect(0, 0, width, height);

		context.restore();

		await this.image(
			require("./assets/noise.png"),
			0,
			0,
			width / this.scale,
			height / this.scale
		);

		return this;
	};
}

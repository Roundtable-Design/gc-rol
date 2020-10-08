import styled from "styled-components";

const outerWidth = 275;

export const Wrapper = styled.div`
	width: ${outerWidth}px;
	position: relative;
`;

export const Content = styled.img`
	position: absolute;
	z-index: 1;

	${({ dX, dY, sWidth, dWidth, sHeight, dHeight }) => {
		const percX = (dX / dWidth) * 100;
		const percY = (dY / dHeight) * 100;

		const scale = outerWidth / dWidth;

		return `
            left: ${dX * scale}px;
            top: ${dY * scale}px;
            width: ${sWidth * scale}px;
            // left: ${percX}%;
            // top: ${percY}%;
            // width: ${100 - percX * 2}%;
        `;
	}}
`;

export const Frame = styled.img`
	position: relative;
	z-index: 2;
	width: 100%;
	mix-blend-mode: multiply;
`;

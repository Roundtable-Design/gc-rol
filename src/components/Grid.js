import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: ${({ columnCount, columnWidth }) =>
		`repeat(${columnCount}, ${columnWidth})`}};
    column-gap: 10px;
`;

const Grid = ({ children, columnWidth = "auto", columnCount, style }) => {
	return (
		<Wrapper
			columnCount={columnCount}
			style={style}
			columnWidth={columnWidth}
		>
			{children.map((child, index) => (
				<div
					key={`grid-item-${index}`}
					style={{ gridColumnStart: (index + 1) % columnCount }}
				>
					{child}
				</div>
			))}
		</Wrapper>
	);
};

export default Grid;

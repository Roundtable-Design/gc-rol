import React from "react";

import "html5-device-mockups";

const Mockup = ({ src }) => {
	return (
		<div className="device-wrapper">
			<div
				className="device"
				data-device="iPhone7"
				data-orientation="portrait"
				data-color="white"
			>
				<div className="screen">
					<img
						style={{
							border: "1px solid black",
							borderRadius: "2px",
						}}
						width="100%"
						src={src}
					/>
				</div>
				<div className="button"></div>
			</div>
		</div>
	);
};

export default Mockup;

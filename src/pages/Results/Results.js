import {
	Background,
	DeviceWrapper,
	DownloadButtonWrapper,
	TextWrapper,
	Wrapper,
} from "./styles";
import { Heading, Logo, Subheading, Subtitle } from "../../components/styles";
import { Redirect, useHistory } from "react-router-dom";
import { isCompletedResults, isValidResults } from "../../functions";

import Button from "../../components/Button";
import DeviceChooser from "../../components/DeviceChooser";
import Grid from "../../components/Grid";
import Mockup from "../../components/Mockup";
import Radio from "../../components/Radio";
import React from "react";
import Spinner from "../../components/Spinner";
import ThemeChooser from "../../components/ThemeChooser";
import constants from "../../constants";
import devices from "../../data/devices";
import format from "../../format";
import theme from "../../theme";
import themes from "../../data/themes";

export const Results = ({ results, onImageLoaded, image }) => {
	const history = useHistory();

	const [selectedDevice, setSelectedDevice] = React.useState(1);
	const [selectedTheme, setSelectedTheme] = React.useState(0);

	React.useEffect(() => {
		(async function () {
			let uri = await format.toImage({
				practices: results,
				theme: themes[selectedTheme].gradient,
				fgDark: themes[selectedTheme].hasOwnProperty("dark"),
				constraints: devices[selectedDevice].constraints,
			});

			onImageLoaded(uri);
		})();
	}, [selectedTheme, selectedDevice]);

	const handleDownload = () => {
		history.push("/preview");
	};

	if (!isValidResults(results) || !isCompletedResults(results)) {
		return <Redirect to="/review" />;
	} else {
		return image ? (
			<Background>
				<Wrapper style={{ color: "black" }}>
					<Logo />
					<TextWrapper>
						<Heading>Nice one!</Heading>
						<Subheading center>
							Your new <i>at home</i> rule of life is ready to
							download, choose a theme below and hit download
						</Subheading>
					</TextWrapper>
					<DeviceWrapper>
						<Mockup
							device={devices[selectedDevice]}
							content={image}
						/>
					</DeviceWrapper>
					<TextWrapper>
						<Subtitle>Choose your device</Subtitle>

						<DeviceChooser
							onChange={(index) => setSelectedDevice(index)}
							selected={selectedDevice}
						/>
					</TextWrapper>
					<TextWrapper>
						<Subtitle>Choose your theme</Subtitle>

						{/* Make this state controlled */}
						<ThemeChooser
							onChange={(index) => setSelectedTheme(index)}
							selected={selectedTheme}
						/>
					</TextWrapper>
					<TextWrapper>
						<DownloadButtonWrapper>
							<span className="only-mobile">
								<Button dark downArrow onClick={handleDownload}>
									Download
								</Button>
							</span>
							<a
								className="only-desktop"
								download="RuleOfLife.png"
								href={image}
							>
								<Button dark downArrow onClick={handleDownload}>
									Download
								</Button>
							</a>
						</DownloadButtonWrapper>
						<Subtitle>Next up</Subtitle>
						<Subheading>
							Share with your Pattern group so they can
							practically and prayerfully contend for you
						</Subheading>
						<Subtitle>And if you wanted to...</Subtitle>
						<Subheading>
							Stir the conversation by sharing with others who
							might find it helpful
						</Subheading>
						<Subtitle>Learn more about Pattern</Subtitle>
						<Subheading>
							Want to learn more about practices that shape us to
							be with Jesus, become like him and do what he did?
							Visit{" "}
							<a href="https://pattern.org.uk">pattern.org.uk</a>
						</Subheading>
					</TextWrapper>
				</Wrapper>
			</Background>
		) : (
			<Spinner title="Loading resources" />
		);
	}
};

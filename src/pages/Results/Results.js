import {
	Background,
	ButtonWrapper,
	DeviceWrapper,
	TextWrapper,
	Wrapper,
} from "./styles";
import { Heading, Logo, Subheading, Subtitle } from "../../components/styles";
import { Redirect, useHistory } from "react-router-dom";
import { isCompletedResults, isValidResults } from "../../functions";

import Button from "../../components/Button";
import { CopyLink } from "../../components/CopyLink/CopyLink";
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

	const [loaded, setLoaded] = React.useState(false);

	React.useEffect(() => {
		setLoaded(false);
	}, [selectedTheme, selectedDevice]);

	React.useEffect(() => {
		if (!loaded) {
			// Allow loading wheel to load
			window.setTimeout(() => {
				(async function () {
					let uri = await format.toImage({
						practices: results,
						theme: themes[selectedTheme].gradient,
						fgDark: themes[selectedTheme].hasOwnProperty("dark"),
						constraints: devices[selectedDevice].constraints,
					});

					onImageLoaded(uri);
				})();
			}, 500);
		}
	}, [loaded]);

	const handleDownload = () => {
		history.push("/preview");
	};

	if (!isValidResults(results) || !isCompletedResults(results)) {
		return <Redirect to="/review" />;
	} else {
		return image ? (
			<Background>
				<Wrapper style={{ color: "black" }}>
					<Logo dark />
					<TextWrapper>
						<Heading>Nice one!</Heading>
						<Subheading center>
							Your new <i>at home</i> rule of life is ready to
							download, choose a theme and device below and hit
							download
						</Subheading>
					</TextWrapper>
					<DeviceWrapper>
						{!loaded && <Spinner style={{ height: "556px" }} />}
						<Mockup
							loaded={loaded}
							device={devices[selectedDevice]}
							content={image}
							onLoad={() => setLoaded(true)}
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
						<Subheading>
							Are you on your mobile? If so, hit download, save
							the image to your phone by holding your finger down
							on the popped up image. Save to photos and enjoy!
						</Subheading>
						<ButtonWrapper>
							<span className="only-mobile">
								{/* <Button
									shadow
									dark
									downArrow
									onClick={handleDownload}
								>
									Download
								</Button> */}
								<Button.Filled
									onClick={handleDownload}
									icon={require("../../assets/download-arrow.svg")}
								>
									Download
								</Button.Filled>
							</span>
							<a
								className="only-desktop"
								download="RuleOfLife.png"
								href={image}
							>
								{/* <Button
									shadow
									dark
									downArrow
									onClick={handleDownload}
								>
									Download
								</Button> */}
								<Button.Filled
									onClick={handleDownload}
									icon={require("../../assets/download-arrow.svg")}
								>
									Download
								</Button.Filled>
							</a>
						</ButtonWrapper>

						<Subtitle>Printed version</Subtitle>

						<Subheading>
							Click print and stick your rule of life on your
							fridge, door or by your bed as a reminder of
							rhythmns
						</Subheading>
						<ButtonWrapper>
							<Button.Filled
								icon={require("../../assets/print-version.svg")}
							>
								Print Version
							</Button.Filled>
						</ButtonWrapper>
						{/* <Subtitle>Save your Rule of Life</Subtitle>
						<CopyLink
							link={
								"https://rule.garden.church/results/2435n3rt24tlk32t"
							}
						/> */}
						{/* <Subheading>
							Hit download, save the image to your phone by
							holding your finger down on the popped up image.
							Save to photos and enjoy!
						</Subheading> */}
						<Subtitle>And if you wanted to...</Subtitle>
						<Subheading>
							Stir the conversation by sharing with others who
							might find it helpful
						</Subheading>
						<Subtitle>
							Learn more about Spiritual Formation
						</Subtitle>
						<Subheading>
							Want to learn more about practices that shape us to
							be with Jesus, become like him and do what he did?
							Visit{" "}
							<a href="https://garden.church/ruleoflife">
								garden.church/ruleoflife
							</a>
						</Subheading>
					</TextWrapper>
				</Wrapper>
			</Background>
		) : (
			<Spinner title="Loading resources" />
		);
	}
};

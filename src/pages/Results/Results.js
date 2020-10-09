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

	const [loaded, setLoaded] = React.useState(false);

	React.useEffect(() => {
		setLoaded(false);
	}, [selectedTheme, selectedDevice]);

	React.useEffect(() => {
		if (!loaded) {
			(async function () {
				let uri = await format.toImage({
					practices: results,
					theme: themes[selectedTheme].gradient,
					fgDark: themes[selectedTheme].hasOwnProperty("dark"),
					constraints: devices[selectedDevice].constraints,
				});

				onImageLoaded(uri);
			})();
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
						<DownloadButtonWrapper>
							<span className="only-mobile">
								<Button
									shadow
									dark
									downArrow
									onClick={handleDownload}
								>
									Download
								</Button>
							</span>
							<a
								className="only-desktop"
								download="RuleOfLife.png"
								href={image}
							>
								<Button
									shadow
									dark
									downArrow
									onClick={handleDownload}
								>
									Download
								</Button>
							</a>
						</DownloadButtonWrapper>
						<Subtitle>Next up</Subtitle>
						<Subheading>
							Share with your Digital Community/House Church so
							they can practically and prayerfully contend for you
						</Subheading>
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
							<a href="https://garden.church/resources">
								garden.church/resources
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

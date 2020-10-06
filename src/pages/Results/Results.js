import React from "react";

import format from "../../format";
import constants from "../../constants";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import { Logo, Heading, Subheading, Subtitle } from "../../components/styles";
import {
	Wrapper,
	Background,
	TextWrapper,
	DeviceWrapper,
	DownloadButtonWrapper,
} from "./styles";
import Radio from "../../components/Radio";
import Grid from "../../components/Grid";
import { useHistory, Redirect } from "react-router-dom";
import Mockup from "../../components/Mockup";
import theme from "../../theme";
import { isValidResults, isCompletedResults } from "../../functions";

export const Results = ({ results, onImageLoaded, image }) => {
	const history = useHistory();

	const [selectedTheme, setSelectedTheme] = React.useState("sunset");

	React.useEffect(() => {
		(async function () {
			let uri = await format.toImage({
				practices: results,
				theme: theme.themes[selectedTheme],
				constraints: constants.constraints["iPhone 8"],
			});

			onImageLoaded(uri);
		})();
	}, [selectedTheme]);

	const handleDownload = () => {
		history.push("/preview");
	};

	if (!isValidResults(results) || !isCompletedResults(results)) {
		return <Redirect to="/review" />;
	} else {
		return image ? (
			<Background>
				<Wrapper>
					<Logo />
					<TextWrapper>
						<Heading>Nice one!</Heading>
						<Subheading center>
							Your new <i>at home</i> rule of life is ready to
							download, choose a theme below and hit download
						</Subheading>
					</TextWrapper>
					<DeviceWrapper>
						<Mockup src={image} />
					</DeviceWrapper>
					<TextWrapper>
						<Subtitle>Choose your theme</Subtitle>
						<Grid columnCount={2} style={{ marginBottom: 40 }}>
							<Radio
								checked={selectedTheme === "sunset"}
								onChange={() => setSelectedTheme("sunset")}
								label="Sunset"
								gradient="sunset"
							/>
							<Radio
								checked={selectedTheme === "light"}
								onChange={() => setSelectedTheme("light")}
								label="Light"
								gradient="light"
							/>
						</Grid>
						<DownloadButtonWrapper>
							<span className="only-mobile">
								<Button downArrow onClick={handleDownload}>
									Download
								</Button>
							</span>
							<a
								className="only-desktop"
								download="RuleOfLife.png"
								href={image}
							>
								<Button downArrow onClick={handleDownload}>
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

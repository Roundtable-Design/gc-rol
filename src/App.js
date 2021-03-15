import { Route, Router, Switch } from "react-router-dom";

import EmailCapture from "./pages/EmailCapture";
import FontFaceObserver from "fontfaceobserver";
import Intro from "./pages/Intro";
import Preview from "./pages/Preview";
import React from "react";
import ReactGA from "react-ga";
import Results from "./pages/Results";
import Review from "./pages/Review/Review";
import Spinner from "./components/Spinner";
import Start from "./pages/Start";
import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";
import fields from "./data/fields";
import theme from "./theme";

const trackingId = "UA-180185241-1";
ReactGA.initialize(trackingId); // initialize ReactGA with trackingId

const history = createBrowserHistory();
history.listen((location) => {
	ReactGA.set({ page: location.pathname }); // Update the user's current page
	ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

export default function App() {
	const [fontsLoaded, setFontsLoaded] = React.useState(false);
	const [results, setResults] = React.useState([]);
	const [image, setImage] = React.useState(null);
	const [error, setError] = React.useState(null);

	// Check if this is happening properly
	const handleResultsChange = (updatedResults) => setResults(updatedResults);

	React.useEffect(() => {
		if (window.localStorage && window.localStorage.getItem("rol-fields")) {
			let results = localStorage.getItem("rol-fields");

			console.log("Fields from localStorage", JSON.parse(results));

			if (results) setResults(JSON.parse(results));
		} else {
			setResults(fields);
		}

		(async function () {
			const timeout = 7500;
			const fonts = [
				{ name: "neue-haas-grotesk-display", weight: 400 },
				{ name: "neue-haas-grotesk-display", weight: 500 },
				{ name: "neue-haas-grotesk-display", weight: 600 },
				{ name: "starling", weight: 700, style: "italic" },
			].map(
				({ name, weight, style = "normal" }) =>
					new FontFaceObserver(name, { weight, style })
			);

			for (const font of fonts) {
				await font.load("BES", timeout);
			}

			setFontsLoaded(true);
		})();
	}, []);

	return (
		<Router history={history}>
			<ThemeProvider theme={theme}>
				{!fontsLoaded ? (
					<Spinner title="Loading fonts" />
				) : (
					<Switch>
						<Route exact path="/" component={Intro} />
						<Route
							path="/results"
							render={() => (
								<Results
									results={results}
									image={image}
									onImageLoaded={setImage}
								/>
							)}
						/>
						<Route
							exact
							path="/review"
							render={() => (
								<Review
									results={results}
									onResultsChange={handleResultsChange}
								/>
							)}
						/>
						<Route
							exact
							path="/email"
							render={() => <EmailCapture />}
						/>
						<Route
							path="/preview"
							render={() => <Preview image={image} />}
						/>
					</Switch>
				)}
			</ThemeProvider>
		</Router>
	);
}

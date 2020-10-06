import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Results from "./pages/Results";
import Start from "./pages/Start";
import { ThemeProvider } from "styled-components";
import Review from "./pages/Review/Review";
import FontFaceObserver from "fontfaceobserver";
import Intro from "./pages/Intro";
import theme from "./theme";
import fields from "./fields";
import Spinner from "./components/Spinner";
import Preview from "./pages/Preview";

const trackingId = "UA-165932948-1";
ReactGA.initialize(trackingId); // initialize ReactGA with trackingId

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


export default function App() {
	const [fontsLoaded, setFontsLoaded] = React.useState(false);
	const [results, setResults] = React.useState(fields);
	const [image, setImage] = React.useState(null);
	const [error, setError] = React.useState(null);

	const handleResultsChange = (updatedResults) => setResults(updatedResults);

	React.useEffect(() => {
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
							path="/start"
							render={() => (
								<Start
									results={results}
									onResultsChange={handleResultsChange}
								/>
							)}
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

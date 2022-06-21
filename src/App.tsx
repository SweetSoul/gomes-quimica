import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Home from "./Pages/Home/home";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const colors = {
	brand: {
		100: "#060561",
		200: "#6665fe",
		300: "#B39924",
		400: "#f4f4f4",
	},
	brandBg: {
		100: "#eee",
		200: "#FFE466",
		300: "#6665fe",
		400: "#060561",
	},
};

const theme = extendTheme({ colors });
function App() {
	return (
		<ChakraProvider theme={theme}>
			<div>
				<Header />
				<main>
					<Home />
				</main>
				<Footer />
			</div>
		</ChakraProvider>
	);
}

export default App;

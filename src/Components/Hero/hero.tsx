import Lottie from "react-lottie-player";
import { Box, Text } from "@chakra-ui/react";
import chemAnimation from "./chem-exam.json";

export default function Hero() {
	return (
		<>
			<Box
				id="home"
				display="flex"
				alignItems="center"
				justifyContent="space-evenly"
				height="calc(100vh - 95px)"
				padding="0 24px"
				flexWrap={{ base: "wrap" }}
			>
				<Box textAlign="center" flex={{ base: "0 0 100%", md: "0 0 auto" }}>
					<Text as="h1" fontSize="4xl" color="brand.100" fontWeight="700">
						Química descomplicada
					</Text>
					<Text fontSize="2xl" color="brand.100">
						Aprenda o conteúdo de forma rápida e eficiente.
					</Text>
				</Box>
				<Box w="min(900px, 95vw)" filter="hue-rotate(100deg)" flex={{ base: "0 0 100%", md: "0 0 auto" }}>
					<Lottie animationData={chemAnimation} loop play />
				</Box>
			</Box>
		</>
	);
}

import Lottie from "react-lottie-player";
import styles from "./hero.module.sass";
import { Box, Text } from "@chakra-ui/react";
import chemAnimation from "./chem-exam.json";

export default function Hero() {
	return (
		<>
			<div className={styles.container}>
				<Box textAlign="center">
					<Text as="h1" fontSize="4xl" color="brand.100" className={styles.heroTitle}>
						Química descomplicada
					</Text>
					<Text fontSize="2xl" color="brand.100">
						Aprenda a fazer exercícios e seguir o curso de forma rápida e eficiente.
					</Text>
				</Box>
				<div className={styles.lottieContainer}>
					<Lottie animationData={chemAnimation} loop play />
				</div>
			</div>
		</>
	);
}

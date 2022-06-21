import { Box, Link } from "@chakra-ui/react";
import styles from "./header.module.sass";

export default function MenuLinks() {
	return (
		<>
			<Box>
				<Link color={{ base: "brand.400", md: "brand.100" }} className={styles.navLink} href="#home">
					Home
				</Link>
			</Box>
			<Box marginTop={{ base: "12px", md: "0" }}>
				<Link color={{ base: "brand.400", md: "brand.100" }} className={styles.navLink} href="#planos">
					Planos
				</Link>
			</Box>
			<Box marginTop={{ base: "12px", md: "0" }}>
				<Link color={{ base: "brand.400", md: "brand.100" }} className={styles.navLink} href="#sobre">
					Prof. Marco Gomes
				</Link>
			</Box>
			<Box marginTop={{ base: "12px", md: "0" }}>
				<Link color={{ base: "brand.400", md: "brand.100" }} className={styles.navLink} href="#contato">
					Contato
				</Link>
			</Box>
		</>
	);
}

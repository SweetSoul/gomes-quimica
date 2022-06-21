import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
	return (
		<footer>
			<Box textAlign="center" bg="brand.100" padding="12px 0">
				<Text color="white">{new Date().getFullYear()} © Todos os direitos reservados para Marco Gomes.</Text>
			</Box>
		</footer>
	);
}

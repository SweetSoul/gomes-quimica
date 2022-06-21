import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import MenuLinks from "../Header/links";

export default function DrawerMenu() {
	const [isOpen, seIsOpen] = useState(false);

	const toggleMenu = () => {
		seIsOpen(!isOpen);
	};
	return (
		<>
			<Button
				bg="brand.100"
				display={{ base: "initial", md: "none" }}
				onClick={toggleMenu}
				_hover={{ background: "brand.200" }}
			>
				<HamburgerIcon color="white" fontSize="22px" />
			</Button>
			<Box
				position="absolute"
				left="0"
				top="100px"
				w="100vw"
				display={{ base: "flex", md: "none" }}
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
				bg="brand.100"
				height={isOpen ? "200px" : "0"}
				transition="height 0.3s ease-in-out"
				overflow="hidden"
			>
				<MenuLinks />
			</Box>
		</>
	);
}

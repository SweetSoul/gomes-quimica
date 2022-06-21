import { Link } from "@chakra-ui/react";
import DrawerMenu from "../Drawer/drawer";
import styles from "./header.module.sass";
import MenuLinks from "./links";

export default function Header() {
	return (
		<header>
			<div className={styles.container}>
				<div className={styles.logoContainer}>
					<img src="/Media/logo-stacked.png" alt="logo" />
				</div>
				<nav className={styles.navMenu}>
					<MenuLinks />
				</nav>
				<DrawerMenu />
			</div>
		</header>
	);
}

import { Link } from "@chakra-ui/react";
import styles from "./header.module.sass";

export default function Header() {
	return (
		<header>
			<div className={styles.container}>
				<div className={styles.logoContainer}>
					<img src="/Media/logo-stacked.png" alt="logo" />
				</div>
				<nav className={styles.navMenu}>
					<Link color="brand.100" className={styles.navLink} href="#home">
						Home
					</Link>
					<Link color="brand.100" className={styles.navLink} href="#planos">
						Planos
					</Link>
					<Link color="brand.100" className={styles.navLink} href="#sobre">
						Prof. Marco Gomes
					</Link>
					<Link color="brand.100" className={styles.navLink} href="#contato">
						Contato
					</Link>
				</nav>
			</div>
		</header>
	);
}

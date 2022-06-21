import About from "../../Components/About/about";
import Contact from "../../Components/Contact/contact";
import Footer from "../../Components/Footer/footer";
import Hero from "../../Components/Hero/hero";
import Products from "../../Components/Products/products";

export default function Home() {
	return (
		<>
			<Hero />
			<Products />
			<About />
			<Contact />
		</>
	);
}

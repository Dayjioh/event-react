import ArrowUp from "../ArrowUp/ArrowUp";
import Article from "../Article/Article";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Top from "../Top/Top";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

export default function Homepage() {
	return (
		<>
			
				<Top />
				<Header
					suptitle="managed it services"
					subtitle="Global Managed <br/> IT Services"
				/>
				<Article
					suptitle="about our company"
					subtitle="We do design, code & develop."
					btn="Read More"
					img="about-image-left.png"
				/>
				<WhyChooseUs />
				<Footer />
		</>
	);
}

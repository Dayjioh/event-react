import React from "react";
import Top from "../Top/Top";
import "./ServicePage.css";
import Footer from "../Footer/Footer";
import Brand from "../Brand/Brand";
import Services from "../Services/Services";
import Article from "../Article/Article";

export default function ServicePage() {

	const direction = 'row-reverse'
	return (
		<>
			<Top />
			<Brand />
			<Article
				suptitle="about our company"
				subtitle="We do design, code & develop."
				btn="Read More"
				img="about-image-left.png"
				test= {direction}
			/>
			<Services />
			<Footer />
		</>
	);
}

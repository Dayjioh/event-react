import React from "react";
import Service01 from "../Service01/Service01";

export default function Services() {
	const SERVICES = [
		{ title: "Design", img: "service1.png" },
		{ title: "Development", img: "service2.png" },
		{ title: "Online Marketing", img: "service3.png" },
		{ title: "Business", img: "service4.png" },
		{ title: "Technology", img: "service5.png" },
		{ title: "Content Strategy", img: "service6.png" },
	];
	return (
		<section className="section section-content-center">
			<p className="suptitle">our services</p>
			<h2 className="subtitle">We offer a wide variety of IT services</h2>
			<p className="article-content text-center">
				There are many variations of passages of Lorem Ipsum available but the
				majority have suffered alteration
			</p>
			<div className="grid-3cols">
				{SERVICES.map((data) => (
					<Service01 title={data.title} img={data.img} />
				))}
			</div>
		</section>
	);
}

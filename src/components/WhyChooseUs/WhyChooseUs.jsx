import Feature from "../Feature/Feature";

export default function WhyChooseUs() {
	const data = [
		{
			img: "features1.png",
			title: "Dedicated IT Solution",
			color: "red",
		},
		{
			img: "features2.png",
			title: "Expertise & Leadership",
			color: "green",
		},
		{
			img: "features3.png",
			title: "IT Industry Expertise",
			color: "gold",
		},
	];
	return (
		<>
			<section class="section section-content-center">
				<p class="suptitle">why choose us</p>
				<h2 class="subtitle">For over 12 years in the tech area.</h2>
				<p class="article-content text-center">
					There are many variations of passages of Lorem Ipsum available but the
					majority have suffered alteration
				</p>
				<div class="section-3cols">
					{
						data.map(value => (
							<Feature img={value.img} title={value.title} color={value.color} />
						))
					}
				</div>
			</section>
		</>
	);
}

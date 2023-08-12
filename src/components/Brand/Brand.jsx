import Brand01 from "../Brand01/Brand01";

const Brand = () => {
	const BRAND = [
		{
			img: "client1.png",
		},
		{
			img: "client2.png",
		},
		{
			img: "client3.png",
		},
		{
			img: "client4.png",
		},
	];

	return (
		<>
			<article className="article article-2cols">
				<div className="article-col article-col-center">
					<p className="suptitle">our vision & mission</p>
					<h2 className="subtitle">Innovate with the tech trends</h2>
					<p className="article-content">
						There are many variations of passages of Lorem Ipsum available but
						the majority have suffered
					</p>
					<a href="#" className="btn">
						Read More
					</a>
				</div>
				<div className="article-col">
					<img src="img/about-image-right.png" alt="" />
				</div>
			</article>
			<div className="clients">
				{BRAND.map((value) => (
					<Brand01 img={value.img} />
				))}
			</div>
		</>
	);
};

export default Brand;

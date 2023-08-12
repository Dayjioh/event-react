export default function Article({ img, suptitle, subtitle, btn, test }) {
	return (
		<article
			className="article article-2cols"
			style={{ flexDirection:test }}
		>
			<div className="article-col">
				<img src={`img/${img}`} alt="" />
			</div>
			<div className="article-col article-col-center">
				<p className="suptitle">{suptitle}</p>
				<h2 className="subtitle">{subtitle}</h2>
				<p className="article-content">
					There are many variations of passages of Lorem Ipsum available but the
					majority have suffered
				</p>
				<a href="#" className="btn">
					{btn}
				</a>
			</div>
		</article>
	);
}

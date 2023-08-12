import React from "react";

const Service01 = ({title,img}) => {
	return (
		<article className="article-service">
			<img src={`img/${img}`} alt="" />
			<h3 className="article-service-title"> {title} </h3>
		</article>
	);
};

export default Service01;

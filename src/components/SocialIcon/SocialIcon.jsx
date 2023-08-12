import ArrowUp from "../ArrowUp/ArrowUp";
import SocialIcon01 from "../SocialIcon01/SocialIcon01";

export default function SocialIcon() {
	const ICON = [
		{ img: "facebook.png" },
		{ img: "twitter.png" },
		{ img: "instagram.png" },
		{ img: "snapchat.png" },
		{ img: "pinterest.png" },
		{ img: "youtube.png" },
	];
	return (
		<>
			<footer class="footer">
				<h2 class="footer-logo">agency</h2>
				<p class="footer-socials">
					{ICON.map((v) => (
						<SocialIcon01 img={v.img} />
					))}
					{/* <a href="#" target="_blank">
					<img src="img/facebook.png" alt="">
				</a>
				<a href="#" target="_blank">
					<img src="img/twitter.png" alt="">
				</a>
				<a href="#" target="_blank">
					<img src="img/instagram.png" alt="">
				</a>
				<a href="#" target="_blank">
					<img src="img/snapchat.png" alt="">
				</a>
				<a href="#" target="_blank">
					<img src="img/pinterest.png" alt="">
				</a>
				<a href="#" target="_blank">
					<img src="img/youtube.png" alt="">
				</a> */}
				</p>
				<p class="footer-links">
					<a href="#">Privacy</a>
					<a href="#">Support</a>
					<a href="#">Helpdesk</a>
					<a href="#">Faq</a>
				</p>
				<ArrowUp/>
			</footer>
		</>
	);
}

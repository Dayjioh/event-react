import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import "./Top.css"

export default function Top() {
	return (
		<>
			<div className="top">
				<Logo />
				<Menu />
			</div>
		</>
	);
}

import './ArrowUp.css'

const ArrowUp = () => {
	const handleClick = () => {
		window.scrollTo(0,0);
	};
	return <img className='arrow'  onClick={handleClick} src="img/arrowup.png" />
	
};

export default ArrowUp;

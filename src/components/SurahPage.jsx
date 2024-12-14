import { useLocation } from "react-router-dom";

const SurahPage = () => {
	const location = useLocation();
	console.log(location);
	
	return (
		<div className="page-font">
			{location.state.name}
			<hr/>
			{
				location.state.ayats.split('\n').map((ayat, index) => <p key={index}>{ayat}</p>)			
			}
			<p>{}</p>
		</div>
	)
};

export default SurahPage;
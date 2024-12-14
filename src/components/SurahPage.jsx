import { useLocation } from "react-router-dom";

const SurahPage = () => {
	const location = useLocation();
	console.log(location);

	return (
		<div className="page-font">
			<div className="surah-page-header">
				{location.state.name}
			</div>
			{
				location.state.ayats.split('\n').map((ayat, index) => <p key={index}>{ayat}</p>)
			}
			<p>{ }</p>
		</div>
	)
};

export default SurahPage;
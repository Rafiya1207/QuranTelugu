import { Link } from "react-router-dom";

const SurahNavigator = ({surah}) => {
	return (
		<div className="navigator">
			<Link to={`/QuranTelugu/${surah.name}`} state={surah}>{surah.name}</Link>
		</div>
	)
};

export default SurahNavigator;
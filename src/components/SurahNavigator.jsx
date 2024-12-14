import { Link } from "react-router-dom";

const SurahNavigator = ({surah}) => {
	return (
		<div className="navigator">
			<Link to={`/${surah.name}`} state={surah}>{surah.name}</Link>
			{/* {surah.name} */}
		</div>
	)
};

export default SurahNavigator;
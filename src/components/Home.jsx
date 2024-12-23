import { Link } from 'react-router-dom';
import { surahs } from '../Surahs/surahs.js';
import SurahNavigator from './SurahNavigator';
const Home = () => {
	return (
		<Link to={'/QuranTelugu'}>
			<div className='page-font surah-list'>
				{
					surahs.map((surah) =>
						<SurahNavigator surah={surah} key={surah.name} />)
				}
			</div>
		</Link>
	)
}

export default Home;
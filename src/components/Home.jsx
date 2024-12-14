import { surahs } from '../Surahs/surahs.js';
import SurahNavigator from './SurahNavigator';
const Home = () => {
	return (
		<div className='page-font surah-list'>
			{
				surahs.map((surah) =>
					<SurahNavigator surah={surah} key={surah.name}/>)
			}
		</div>
	)
}

export default Home;
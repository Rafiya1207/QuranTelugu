import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SurahPage from './components/SurahPage'

function App() {

  return (
    <>
      <Routes>
				<Route path='/QuranTelugu' element={<Home />} />
				<Route path='/:id' element={<SurahPage />} />
			</Routes>
    </>
  )
}

export default App

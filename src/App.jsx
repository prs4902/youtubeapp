import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/Navbar'
import Player from './components/play/Player'
import ContextProvider from './context/ContextProvider'
import Homepage from './components/Homepage'
import TestAPI from './TestAPI'
import SearchResult from './components/search/SearchResult'
import ErrorLoader from './ErrorLoader'

import ErrorImage from '../src/assets/error/404.jpeg'
import Main from './components/main/Main'
import Aside from './components/aside/Aside'
import Category from './components/Category'
import Suggestions from './components/main/Suggestions'
function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
          <div className='flex items-start'>
          <Aside />
          <div className="overflow-y-scroll h-[calc(100dvh-70px)] w-full">
          <Suggestions />
        <Routes>
          <Route path='*' element={<ErrorLoader image={ErrorImage} errorMsg={'The page you are looking for could not be located. It may have been moved or deleted.'} />} />
          <Route path='/' element={<Main />} />
          <Route path='player/:vId/:catId' element={<Player />} />
          <Route path='search/:q' element={<SearchResult />} />
          <Route path='category/:catId' element={<Category />} />
          <Route path='test' element={<TestAPI />} />
        </Routes>
          </div>
          </div>
      </Router>

    </ContextProvider>
  )
}

export default App

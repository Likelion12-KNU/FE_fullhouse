import { useState } from 'react'
import './App.css'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import StoryPage from './Pages/StoryPage'
import SajangPage from './Pages/SajangPage'
import MatPage from './Pages/MatPage'
import SearchPage from './Pages/SearchPage'
import NewPostPage from './Pages/NewPostPage'
import NewStoryPage from './Pages/NewStoryPage'
import storyimg from './img/story.png'
import postimg from './img/post.png'

function App() {
  return (
    <>
      <Router>
        <header><Link to="/">mat.zip</Link></header>
        <div className='buttons'>
          <Link to="/newPost"><img src={postimg}></img></Link>
          <Link to="/newStory"><img src={storyimg}></img></Link>
        </div>
        <div className='navi'>
          <nav> 
            <Link to="/story">스토리</Link>
            <Link to="/sajang">사장님 게시판</Link>
            <Link to="/mat">맛집 게시판</Link>
            <Link to="/search">검색</Link>
          </nav>
          < div className='matBar'>
              <Link>전체</Link>
              <Link>후문</Link>
              <Link>정문</Link>
              <Link>동문</Link>
              <Link>쪽문</Link>
          </div>
        </div>
        <main>
          <Routes> // Routes 태그 안에 있는 Route 중 하나가 페이지에 적재됩니다. 각각의 Route는 element 요소를 통해 각각 알맞은 컴포넌트와 연결됩니다.
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/sajang" element={<SajangPage />} />
            <Route path="/mat" element={<MatPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/newPost" element={<NewPostPage/>} />
            <Route path="/newStory" element={<NewStoryPage/>} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App

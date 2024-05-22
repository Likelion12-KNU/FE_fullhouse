import { useState } from 'react';
import Post from './post/Post.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </>
  )
};

export default App;

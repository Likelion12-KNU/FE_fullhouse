import React, { useState, useEffect } from 'react';
import Post from './post/Post';
import info from './assets/info.json'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {info.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          // src={post.src}
          article={post.article}
        />
      ))}

      {
        // /* API 호출 후 받아오기 */
        // useEffect(() => {
        //   fetch(/* api url */)
        //     .then(response => {
        //       if (response.ok) {
        //         console.log(response);
        //         return response.json();
        //       }
        //       throw new Error('Network response was not ok.');
        //     }).then(jsonData => {
        //       setData(jsonData);
        //     }).catch(error => {
        //       console.error('There was been a problem with your fetch operation: ', error); // 오류 처리
        //     });
        // }, []);
      }
    </>
  )
};

export default App;

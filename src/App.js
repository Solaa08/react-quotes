import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './app.css';


export default function App() {

  const [post, setPost] = useState(undefined);
  const [savedPosts, setSavedPosts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const getData = async ()=>{
   const response = await axios.get('https://api.quotable.io/random')
   setPost(response.data)
   setLoadingData(false);
  }

  useEffect(()=>{
   getData()
  },[])

  if (!post) return null;

  const handleSaveClick = () => {
    setSavedPosts([...savedPosts, post])
    getData()
  }

  const handleDeleteClick = (post) => {
    setSavedPosts(savedPosts.filter(p => p._id !== post._id))
  }

  return (
    <div>
      <div className="navbar">
       <h1>Random Quotes Generator</h1>
      </div>
      <div className="content">
      <h2>{post.author}</h2>
      <div className="line">
      <p>{post.content}</p>
      <button onClick={handleSaveClick} className="save-button">Save this one</button>
      </div>
      </div>
      <div className="saved-title">
      <h2>Saved ones</h2>
      </div>
      <div className="content">
      {savedPosts.map(s => {
        return <>
        <h2 key={s._id}>{s.author}</h2>
        <div className="line">
        <p key={s._id}>{s.content}</p>
        <button onClick={() => handleDeleteClick(s)} className="delete-button">Delete it</button>
        </div>
        </> 
      })}
      </div>
    </div>
  );
}
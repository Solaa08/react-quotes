import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './app.css';


export default function App() {

  const [post, setPost] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [refreshData, setRefreshData] = useState(false);
  
  const getData = async ()=>{
   const response = await axios.get('https://api.quotable.io/random')
   setPost(response.data)
   setLoadingData(false);
  }
  
  useEffect(()=>{
   getData()
  },[refreshData])

  if (!post) return null;
  

  //faire copie du state en tableau / remplir tableau onClick / maper tableau state

  return (
    <div>
      <div className="navbar">
       <h1>Random Quotes Generator</h1>
      </div>
      <div className="content">
      <h2>{post.author}</h2>
      <div className="line">
      <p>{post.content}</p>
      <button onClick={getData} className="save-button">Save this one</button>
      </div>
      </div>
      <div className="saved-title">
      <h2>Saved ones</h2>
      </div>
      <div className="content">
      <h2>{}</h2>
      <div className="line">
      <p></p>
      <button className="delete-button">Delete it</button>
      </div>
      </div>
    </div>
  );
}
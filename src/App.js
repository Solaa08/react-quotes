import axios from "axios";
import React from "react";
import './app.css';

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//   }
// };

const baseURL = "https://api.quotable.io/random";

export default function App() {
  const [post, setPost] = React.useState(null);
  const [save, setSave] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  
  // const datas = [
  //   { author: post.author },
  //   { content: post.content }
  // ]

  

  const handleSave = (e) => {
    console.log(e.target.value)
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
      <button onClick={handleSave} value={post} className="save-button">Save this one</button>
      </div>
      </div>
      <div className="saved-title">
      <h2>Saved ones</h2>
      </div>
      <div className="content">
      <h2>{post.author}</h2>
      <div className="line">
      <p>{post.content}</p>
      <button className="delete-button">Delete it</button>
      </div>
      </div>


    </div>
  );
}
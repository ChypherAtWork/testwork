import React, { useEffect, useState } from 'react';


export default function  Card() {
 
    const [post, setPost] = useState({});
    const [id, setId] = useState('1');
   
    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(response => response.json())
         .then(json => setPost(json))
         .catch(error => console.log('Error:', error));
    }, [id]);
   
    return (
       <div>
         <h1>User Model</h1>
         <input value={id} onChange={(e) => setId(e.target.value)} />
         <div>
           <h2>Body:</h2>
           <p>{post.body}</p>
         </div>
       </div>
    );
    };
    


import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"

const Posts =()=>{
    let [lists, setLists] = useState([])
    
    useEffect(()=>{
       axios.get("http://35.73.195.40:8080/posts/index")
       .then((res) =>{
           console.log(res.data)
           setLists(res.data.posts)
       })
       .catch((err) => {
           console.error(err)
       })
   },[])
   
   console.log(lists)
 
 
   const pLists = lists.map((list) =>{
       return (
           <div>
               <h3>{list.title}타이틀</h3>
               <p>{list.body}내용。</p>
           </div>
           )
    })
 
    return(
        <div>
          <h2>post list</h2>
          {pLists}
        </div>
    )
}

export default Posts;
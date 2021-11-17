import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import CardPost from './postcard'
function PostMain({toShowPosts}){
  const [allPosts,setPosts] = useState([])
  async function fetchMyApi(){
    let response = await fetch('/api/post/')
    response = await response.json()
    setPosts(response)
  }
  useEffect(()=>{
    fetchMyApi()
  },[])
    
  let cars = allPosts.map(card =>{
    return <CardPost postData={card} />
  })
  return(
        <>
           <div class="row mr-0 mb-2">
          {cars}
             </div>
        </>
    )
}

export default PostMain

import React from 'react';
import {useHistory} from 'react-router-dom';
function CardPost({postData}){
  let handlerHistory = useHistory()
  function goToPost(){
    handlerHistory.push({pathname:'post/' + postData.title,
        state:{
          postData:postData,
   }})
    
  }
  return(
 <>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{postData.title}</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <button onClick={goToPost} class="stretched-link" >Continue reading</button>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placehlder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" src={postData.image}/>
       </div>
      </div>
  </div>
        </>
  )
}

export default CardPost

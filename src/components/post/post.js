import React ,{useEffect} from 'react'
import { useParams , useHistory} from 'react-router-dom';
function Post(props){
  let  history = useHistory()
  useEffect(()=>{
  },[])
  let {description} = props.dataProps.location.state.postData
  return(
    <>
  
      <article className="mt-5">
<div class="container">
              <div class="row">
        <div class ="col-sm-1"></div>
        <div class ="col-sm-10">
          <br />
          <br />
          <h1><b></b></h1>
          <br/>
          <div dangerouslySetInnerHTML={{ __html: description }}>
          </div>

      </div>
        <div class ="col-sm-1"></div>
      </div>

</div>
</article>





    </>
  )
}
  export default Post 

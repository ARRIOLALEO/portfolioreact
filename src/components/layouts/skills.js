import React,  { useState, useEffect}  from 'react';

function Skill(){
   const [data, dataSet] = useState([])
    async function fetchMyAPI() {
      let response = await fetch('/api/skils')
      response = await response.json()
      dataSet(response)
    }
  useEffect(() => {
    fetchMyAPI()
  }, [])

  let mySkills = data.map(element=>{
    return <img src={`${element.image}`}/>
  })

  return <div>{mySkills}</div>
}

export default Skill

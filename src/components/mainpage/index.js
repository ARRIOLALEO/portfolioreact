import React from 'react'
import Hero from '../layouts/hero';
import Skills from '../layouts/skills';
import Projects  from '../layouts/projects';
import Postmain from '../layouts/blogmain';
function Index(){
  return(
    <>
      <Hero/>
      <Skills/>
      <Projects/>
      <Postmain toShowPosts="2"/>
    </>
  )
}

export default Index

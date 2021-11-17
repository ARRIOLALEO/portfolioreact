import React,{ useState, useEffect} from 'react';

function Projects() {
    const [projects , setProjects] = useState([])
    const url = "/api/projects/"
    useEffect(()=>{
        async function getData(){
            const response = await fetch(url)
            const data = await response.json()
            setProjects(data)
        }
        getData()
    },[])
    let  printProjects = projects.map( project => {
        return(
 <div class="col-1-of-3">
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div class="card__picture card__picture--2">
                                 
                            </div>
                            <h4 class="card__heading">
                                <span class="card__heading-span card__heading-span--2">The Sea Explore</span>

                            </h4>
                            <div class="card__details">
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-2">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">Only</p>
                                    <p class="card__price-value">$295</p>
                                </div>
                                <a href="#0" class="btn btn--white">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
        
        )
    })
    return(
			<>
			<section class="section-tours">
            <div class=" text-center  u-margin-bottom-medium">
                <br/>  <br/>  <h2 class="heading-secondary">
                    Most Popular Tours
                </h2>
                <br/>  <br/>
            </div>
            <div class="row justify-content-center">
                {printProjects}
            </div>
            <div class="text-center u-margin-top-big">
                <a href="#0" class="btn btn--blue">Discover All Tour</a>
            </div>
        </section>
      </>
    )
}

export default Projects

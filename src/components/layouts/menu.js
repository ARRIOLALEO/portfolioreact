import React from 'react'
import {Link} from 'react-router-dom'
function Menu(){
    return(
        <>
          <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
        <div class="container"><Link class="navbar-brand" to="/">
          <img src="assets/img/icons/logo.png" alt="" width="30"/>
          <span class="text-1000 fs-1 ms-2 fw-medium">Mario
          <span class="fw-bold">Arriola</span></span></Link>
          <button class="navbar-toggler collapsed" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto border-bottom border-lg-bottom-0 pt-2 pt-lg-0">
              <li class="nav-item"><a class="nav-link active active" aria-current="page" href="#">About</a></li>
              <li class="nav-item"><Link class="nav-link" to="/timeline">Features</Link></li>
              <li class="nav-item"><a class="nav-link" href="#">Pricing </a></li>
              <li class="nav-item"><a class="nav-link" href="#">Testimonials</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Help </a></li>
            </ul>
            <form class="d-flex py-3 py-lg-0"><button class="btn btn-link text-1000 fw-medium order-1 order-lg-0" type="button">Sign in</button><button class="btn btn-outline-danger rounded-pill order-0" type="submit">Sign Up</button></form>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Menu

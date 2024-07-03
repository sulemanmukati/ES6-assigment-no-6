import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Nav = () => {
  return (
    <div className='container'>
      <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="/src/assets/download.png" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 " >
        <li class="nav-item  px-3" >
          <a class="nav-link dropdown-toggle active" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link dropdown-toggle active" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">pages</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link dropdown-toggle active" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">courses</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link dropdown-toggle active" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2 border-01  bg-light text-dark" type="search" placeholder="Search" aria-label="Search" />
        {/* <button class="btn btn-outline-success " type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Nav


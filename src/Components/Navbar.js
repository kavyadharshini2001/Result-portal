import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary design ">
    <div class="container-fluid"><Link to={'/'}> <a class="navbar-brand" href="#"><i className="fa fa-university fa-2x" aria-hidden="true"></i></a></Link>
     
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
          <li class="nav-item">
            <a class="nav-link active fs-5 fw-semibold" aria-current="page" href="#">Login</a>
          </li>
          </Link>
          
          <Link to={'/fetch/:id'} style={{ textDecoration: 'none' }}>
          <li class="nav-item">
            <a class="nav-link active fs-5 fw-semibold" aria-current="page" href="#">Fetch</a>
          </li>
          </Link>
          
        </ul>
      </div>
    </div>
  </nav>
  <div className="container w-75 m-auto">
  <div className='text-center fw-semibold topedit'>Anna University, Chennai<br/>Office of the Controller of Examinations</div>
</div>
<div className='container w-80 p-5'><div className='d-flex justify-content-center navedit'>Welcome to the Office of the Controller of Examinations</div></div>
</>
  )
}

export default Navbar
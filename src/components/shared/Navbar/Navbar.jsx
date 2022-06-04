import React from 'react'; 
import Image from 'next/image';
import logo from '../../../images/images/logo.JPG';
import classes from './Navbar.module.css'
import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg    ">
        <div className="container">
          <Link href="/#" >
           <div className="navbar-brand d-flex align-items-center" >
           <Image src={logo} width='50%' height='50%'  alt='logo'/>
              <div className={classes.logo}>
                <span>Bick</span>
                <span className={classes.logoText}>Lover</span> 
                  </div>
           </div>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active fs-4 fw-samibold" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 fw-samibold" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 fw-samibold" href="#">About</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
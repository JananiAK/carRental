
import React, {useRef} from 'react';


import {Container,Row,Col} from "reactstrap";
import { Link, NavLink} from 'react-router-dom';

import '../../Styles/header.css'


const navLinks = [
  {
    path:'/home',
    display: 'Home'
  },
  {
    path:'/about',
    display: 'About'
  },
  {
    path:'/vehicle',
    display: 'Vehicle'
  },
  {
    path:'/vehicledetails',
    display: 'Vehicledetails'
  },
  {
    path:'/vehiclelisting',
    display: 'Home'
  },
]

const Header = () => {
  return( <header className="header">
    
    <div classname="header_top">
        <container>
            <Row>
                <Col lg='6' md='6' sm='6'>
                    <div className="header_top_left">
                        <span>Need Help?</span>
                        <span className="header_top_help">
                        <i class="ri-phone-fill"></i> 0112565789 
                        </span>
                        </div>
                </Col>

            

                <Col lg='6' md='6' sm='6'>
                    <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                        <Link to='#' classname="d-flex align-items-center gap-1"> <i class="ri-login-circle-line"></i> Login </Link>
                        <Link to='#' classname="d-flex align-items-center gap-1"> <i class="ri-user-line"></i> Register </Link>                  
                    </div>
                    </Col>
            </Row>
        </container>

    </div>

    {/* header middle*/}
    <div className="header_middle">
        <Container>
            <Row>
              <Col lg='4' md='3' sm='4'>
                <div className="logo">
                    <h1>
                      <Link to='/home'className=" d-flex align-items-center gap-2">
                       <i class="ri-roadster-fill"></i>
                       <span>Rent Vehicle <br/> Service </span>
                        </Link></h1>
                </div>
              </Col>

              <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sri Lanka</h4>
                  
                </div>
              </div>
            </Col>


            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>


          <Col lg="2" md="3"sm="0" className=" d-flex align-items-center justify-content-end ">
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
        

            </Row>
        </Container>
    </div>

{/*main navigation*/}

<div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" ></i>
            </span>

            <div className="navigation" >
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink to={item.path} className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>


  </header>
  );
}

 




export default Header

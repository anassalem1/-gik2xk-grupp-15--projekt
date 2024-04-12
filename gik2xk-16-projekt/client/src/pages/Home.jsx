
import React from "react";

import "../assets/css/core-style.css";
import "../assets/style.css";
import "../assets/js/jquery/jquery-2.2.4.min.js";
import "../assets/js/classy-nav.min.js";

function Home() {
  return (
    <>
          <header className="header_area">
      <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
        {/* Classy Menu */}
        <nav className="classy-navbar" id="essenceNav">
          {/* Logo */}
          <a className="nav-brand" href="/"><img src="../src/assets/img/core-img/logo.png" alt="" /></a>
          {/* Navbar Toggler */}
          <div className="classy-navbar-toggler">
            <span className="navbarToggler"><span></span><span></span><span></span></span>
          </div>
          {/* Menu */}
          <div className="classy-menu">
            {/* close btn */}
            <div className="classycloseIcon">
              <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
            </div>
            {/* Nav Start */}
            <div className="classynav">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href={"/products"}>Shop</a></li>
              </ul>
            </div>
            {/* Nav End */}
          </div>
        </nav>

        {/* Header Meta Data */}
        <div className="header-meta d-flex clearfix justify-content-end">
          {/* Search Area */}
          <div className="search-area">
            <form action="#" method="post">
              <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
              <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
          </div>
     
        </div>
      </div>
    </header>
    <section className="welcome_area bg-img background-overlay" style={{backgroundImage: "url(../src/assets/img/bg-img/bg-1.jpg)"}}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="hero-content">
              <h6>asoss</h6>
              <h2>New Collection</h2>
              <a href={"/products"} className="btn essence-btn">view collection</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="top_catagory_area section-padding-80 clearfix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(../src/assets/img/bg-img/bg-2.jpg)"}}>
              <div className="catagory-content">
                <a href={"/products"}>Clothing</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(../src/assets/img/bg-img/bg-3.jpg)"}}>
              <div className="catagory-content">
                <a href={"/products"}>Shoes</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(../src/assets/img/bg-img/bg-4.jpg)"}}>
              <div className="catagory-content">
                <a href={"/products"}>Accessories</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cta-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-content bg-img background-overlay" style={{backgroundImage: "url(../src/assets/img/bg-img/bg-5.jpg)"}}>
              <div className="h-100 d-flex align-items-center justify-content-end">
                <div className="cta--text">
                  <h6>-60%</h6>
                  <h2>Global Sale</h2>
                  <a href={"/products"} className="btn essence-btn">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="brands-area d-flex align-items-center justify-content-between">
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../src/assets/img/core-img/brand1.png" alt="" />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../src/assets/img/core-img/brand2.png" alt="" />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../src/assets/img/core-img/brand3.png" alt="" />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../src/assets/img/core-img/brand4.png" alt="" />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../src/assets/img/core-img/brand5.png" alt="" />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../src/assets/img/core-img/brand6.png" alt="" />
      </div>
    </div>
    <footer className="footer_area clearfix">
      <div className="container">
        <div className="row">
          {/* Single Widget Area */}
          <div className="col-12 col-md-6">
            <div className="single_widget_area d-flex mb-30">
              {/* Logo */}
              <div className="footer-logo mr-50">
                <a href="#"><img src="img/core-img/logo2.png" alt="" /></a>
              </div>
              {/* Footer Menu */}
              <div className="footer_menu">
                <ul>
                  <li><a href="shop.html">Shop</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Single Widget Area */}
          <div className="col-12 col-md-6">
            <div className="single_widget_area mb-30">
              <ul className="footer_widget_menu">
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Payment Options</a></li>
                <li><a href="#">Shipping and Delivery</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row align-items-end">
          {/* Single Widget Area */}
          <div className="col-12 col-md-6">
            <div className="single_widget_area">
              <div className="footer_heading mb-30">
                <h6>Subscribe</h6>
              </div>
              <div className="subscribtion_form">
                <form action="#" method="post">
                  <input type="email" name="mail" className="mail" placeholder="Your email here" />
                  <button type="submit" className="submit"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                </form>
              </div>
            </div>
          </div>
          {/* Single Widget Area */}
          <div className="col-12 col-md-6">
            <div className="single_widget_area">
              <div className="footer_social_area">
                <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  

    </>
  );
}

export default Home;

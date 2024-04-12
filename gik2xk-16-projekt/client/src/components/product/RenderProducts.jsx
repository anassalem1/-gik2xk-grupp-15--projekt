
import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../models/ProductModel";
import ProductCard from "./ProductCard";
import "../../assets/css/core-style.css";
import "../../assets/style.css";

function RenderProducts({ updateCartHandler }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((products) => setProducts(products));
  }, []);

  return (
    <>

    <section className="shop_grid_area section-padding-80">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <div className="shop_sidebar_area">
              <div className="widget catagory mb-50">
                <h6 className="widget-title mb-30">Categories</h6>
                <div className="catagories-menu">
                  <ul id="menu-content2" className="menu-content collapse show">
                    {/* Category items */}
                  </ul>
                </div>
              </div>

              <div className="widget color mb-50">
              <div className="widget price mb-50">
      {/* Widget Title */}
      <h6 className="widget-title mb-30">Filter by</h6>
      {/* Widget Title 2 */}
      <p className="widget-title2 mb-30">Price</p>

      <div className="widget-desc">
        <div className="slider-range">
          <div
            data-min="49"
            data-max="360"
            data-unit="KR"
            className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
            data-value-min="49"
            data-value-max="360"
            data-label-result="Range:"
          >
            <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
            <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0"></span>
            <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0"></span>
          </div>
          <div className="range-price">Range: 49.00KR - 360.00KR</div>
        </div>
      </div>
    </div>
      <p className="widget-title2 mb-30">Color</p>
      <div className="widget-desc">
        <ul className="d-flex">
          <li><a href="#" className="color1"></a></li>
          <li><a href="#" className="color2"></a></li>
          <li><a href="#" className="color3"></a></li>
          <li><a href="#" className="color4"></a></li>
          <li><a href="#" className="color5"></a></li>
          <li><a href="#" className="color6"></a></li>
          <li><a href="#" className="color7"></a></li>
          <li><a href="#" className="color8"></a></li>
          <li><a href="#" className="color9"></a></li>
          <li><a href="#" className="color10"></a></li>
        </ul>
      </div>
    </div>
            </div>
          </div>

          <div className="col-12 col-md-8 col-lg-9">
            <div className="shop_grid_product_area">
              <div className="row">
                <div className="col-12">
                  <div className="product-topbar d-flex align-items-center justify-content-between">
                    {/* Total Products */}
                    <div className="total-products">
                      <p><span>6</span> products found</p>
                    </div>
                    {/* Sorting */}
                    <div className="product-sorting d-flex">
                      <p>Sort by:</p>
                      
                        <select name="select" >
                          <option value="value">Highest Rated</option>
                          <option value="value">Newest</option>
                          <option value="value">Price: $$ - $</option>
                          <option value="value">Price: $ - $$</option>
                        </select>
                        <input type="submit" className="d-none" value="" />
                    
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
              
              {products.map((product) => (  
        <ProductCard
          key={product.id}
          product={product}
          updateCartHandler={updateCartHandler}
        />
      ))}
      
              </div>
            </div>

            {/* Pagination */}
            <nav aria-label="navigation">
              <ul className="pagination mt-50 mb-70">
                <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left"></i></a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">21</a></li>
                <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right"></i></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
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

export default RenderProducts;

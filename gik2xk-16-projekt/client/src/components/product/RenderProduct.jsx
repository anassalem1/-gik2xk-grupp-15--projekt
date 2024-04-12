import {
  Box,
  Button,
  Container,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import moment from "moment";

function RenderProduct({ fetchProduct, product, updateCartHandler }) {
  const { id, title, imageUrl, description, price, ratings } = product;

  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(false);

  const updateRating = (id, value) => {
    const url = "http://localhost:5000/ratings";
    const payload = { product_id: id, rating: value };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    fetchProduct();
  };

  useEffect(() => {
    let values = 0;
    ratings.forEach((rating) => {
      values += rating.rating;
    });
    setRating(values / ratings.length);
    console.log("rating: ", rating);
  }, [ratings]);

  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  return (
    <>
    <Container
      maxWidth="xl"
      className=" py-2 h-4/5 flex items-center justify-center"
    >
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
      
          <section className="single_product_details_area d-flex align-items-center">
      {/* Single Product Thumb */}
      <div className="single_product_thumb clearfix">
        <div className="product_thumbnail_slides ">
          <img src={imageUrl} alt="" />
      
        </div>
      </div>

      {/* Single Product Description */}
      <div className="single_product_desc clearfix">
        <span>mango</span>
        <a href="cart.html">
          <h2>{title}</h2>
        </a>
        <p className="product-price">
           {formatter.format(price)}
        </p>
        <p className="product-desc">
        {description}
        </p>
        <Rating
            name="simple-controlled"
            value={rating}
            precision={1.0}
            size="small"
            onChange={(event, newValue) => updateRating(id, newValue)}
          />
        {/* Form */}
        <form className="cart-form clearfix" method="post">
          {/* Select Box */}
          <div className="select-box d-flex mt-50 mb-30">
            <select name="select" id="productSize" className="mr-5">
              <option value="value">Size: XL</option>
              <option value="value">Size: X</option>
              <option value="value">Size: M</option>
              <option value="value">Size: S</option>
            </select>
            <select name="select" id="productColor">
              <option value="value">Color: Black</option>
              <option value="value">Color: White</option>
              <option value="value">Color: Red</option>
              <option value="value">Color: Purple</option>
            </select>
          </div>
          {/* Cart & Favourite Box */}
          <div className="cart-fav-box d-flex align-items-center">
            {/* Cart */}
            <Button
            className="btn essence-btn"
            variant="contained"
            onClick={() => {
              updateCartHandler(product);
              setSuccess(true);
            }}
            sx={{ width: { xs: "100%", md: "50%", lg: "33%" }, mt: 2 }}
          >
            Add to cart
          </Button>
            {/* Favourite */}
            <div className="product-favourite ml-4">
              <a href="#" className="favme fa fa-heart"></a>
            </div>
          </div>
        </form>
      </div>
    </section>
    {ratings.length > 0 && (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            component="h5"
            className="text-black text-center"
          >
            Product ratings
          </Typography>
          <Container
            sx={{ display: "flex", flexDirection: "column", mt: 2 }}
            maxWidth="md"
          >
            {ratings.map((rating, i) => (
              <>
                <Box
                  key={rating.createdAt}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    mb: 1,
                    mt: 1,
                  }}
                >
                  <Rating
                    name="read-only"
                    value={rating.rating}
                    precision={1.0}
                    size="small"
                    readOnly
                  />
                  <Typography sx={{ ml: 5 }}>
                    {moment(rating.createdAt).format("YYYY-MMM-DD")}
                  </Typography>
                </Box>
                {i < ratings.length - 1 && <Divider variant="middle" />}
              </>
            ))}
          </Container>
        </Container>
      )}
    </Container>
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

export default RenderProduct;

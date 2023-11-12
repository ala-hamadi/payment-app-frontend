import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import productImg from "../assets/images/product.jpg";

const Search = () => {
  return (
    <>
      <Header active='search' />

      <div className='bg0 m-t-23 p-b-140'>
        <div className='container'>
          <div
            className='flex-w flex-sb-m p-b-52'
            style={{ marginTop: "100px" }}
          >
            <div className='flex-w flex-l-m filter-tope-group m-tb-10'>
              <button
                className='stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1'
                data-filter='*'
              >
                All Products
              </button>
            </div>
            <div className='flex-w flex-c-m m-tb-10'>
              <div className='flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search'>
                <i className='icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search' />
                <i className='icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none' />
                Search
              </div>
            </div>
            <div className='dis-none panel-search w-full p-t-10 p-b-15'>
              <div className='bor8 dis-flex p-l-15'>
                <button className='size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04'>
                  <i className='zmdi zmdi-search' />
                </button>
                <input
                  className='mtext-107 cl2 size-114 plh2 p-r-15'
                  type='text'
                  name='search-product'
                  placeholder='Search'
                />
              </div>
            </div>
          </div>
          <div className='row isotope-grid'>
            <div className='col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women'>
              <div className='block2'>
                <div className='block2-pic hov-img0'>
                  <img src={productImg} alt='IMG-PRODUCT' />
                  <a
                    href='#'
                    className='block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1'
                  >
                    Add to cart
                  </a>
                </div>
                <div className='block2-txt flex-w flex-t p-t-14'>
                  <div className='block2-txt-child1 flex-col-l'>
                    <a
                      href='product-detail.html'
                      className='stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6'
                    >
                      Esprit Ruffle Shirt
                    </a>
                    <span className='stext-105 cl3'> $16.64 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-c-m flex-w w-full p-t-45'>
            <a
              href='#'
              className='flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04'
            >
              Load More
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import productImg from "../assets/images/product.jpg";
import bannerWomen from "../assets/images/banner-01.jpg";
import bannerMen from "../assets/images/banner-02.jpg";
import bannerAccessoires from "../assets/images/banner-03.jpg";
import slide1 from "../assets/images/slide-01.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header active='home' />

      <section className='section-slide' style={{ marginTop: "70px" }}>
        <div className='wrap-slick1'>
          <div className='slick1'>
            <div
              className='item-slick1'
              style={{ backgroundImage: `url(${slide1})` }}
            >
              <div className='container h-full'>
                <div className='flex-col-l-m h-full p-t-100 p-b-30 respon5'>
                  <div className='layer-slick1 animated visible'>
                    <span className='ltext-101 cl2 respon2'>
                      Women Collection 2018
                    </span>
                  </div>
                  <div className='layer-slick1 animated visible'>
                    <h2 className='ltext-201 cl2 p-t-19 p-b-43 respon1'>
                      NEW SEASON
                    </h2>
                  </div>
                  <div
                    className='layer-slick1 animated visible'
                    data-appear='zoomIn'
                    data-delay={1600}
                  >
                    <Link
                      to='/search'
                      className='flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04'
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='sec-banner bg0 p-t-80 p-b-50'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-xl-4 p-b-30 m-lr-auto'>
              <div className='block1 wrap-pic-w'>
                <img src={bannerWomen} alt='IMG-BANNER' />
                <Link
                  to='/search'
                  className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'
                >
                  <div className='block1-txt-child1 flex-col-l'>
                    <span className='block1-name ltext-102 trans-04 p-b-8'>
                      Women
                    </span>
                    <span className='block1-info stext-102 trans-04'>
                      Spring 2018
                    </span>
                  </div>
                  <div className='block1-txt-child2 p-b-4 trans-05'>
                    <div className='block1-link stext-101 cl0 trans-09'>
                      Shop Now
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-md-6 col-xl-4 p-b-30 m-lr-auto'>
              <div className='block1 wrap-pic-w'>
                <img src={bannerMen} alt='IMG-BANNER' />
                <Link
                  to='/search'
                  className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'
                >
                  <div className='block1-txt-child1 flex-col-l'>
                    <span className='block1-name ltext-102 trans-04 p-b-8'>
                      Men
                    </span>
                    <span className='block1-info stext-102 trans-04'>
                      Spring 2018
                    </span>
                  </div>
                  <div className='block1-txt-child2 p-b-4 trans-05'>
                    <div className='block1-link stext-101 cl0 trans-09'>
                      Shop Now
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-md-6 col-xl-4 p-b-30 m-lr-auto'>
              <div className='block1 wrap-pic-w'>
                <img src={bannerAccessoires} alt='IMG-BANNER' />
                <Link
                  to='/search'
                  className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'
                >
                  <div className='block1-txt-child1 flex-col-l'>
                    <span className='block1-name ltext-102 trans-04 p-b-8'>
                      Accessories
                    </span>
                    <span className='block1-info stext-102 trans-04'>
                      New Trend
                    </span>
                  </div>
                  <div className='block1-txt-child2 p-b-4 trans-05'>
                    <div className='block1-link stext-101 cl0 trans-09'>
                      Shop Now
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='bg0 p-t-23 p-b-140'>
        <div className='container'>
          <div className='p-b-10'>
            <h3 className='ltext-103 cl5'>Product Overview</h3>
          </div>
          <div className='flex-w flex-sb-m p-b-52'>
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
      </section>
      <Footer />
    </>
  );
};

export default Home;

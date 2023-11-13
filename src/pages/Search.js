import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import productImg from "../assets/images/product.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, selectUser } from "../redux/userSlice";
import { notify } from "../utils/HelperFunctions";
import { ToastContainer, toast } from "react-toastify";

const Search = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [allProducts, setAllProducts] = useState([]);
  const [allProductsHack, setAllProductsHack] = useState([]);
  const [search, setSearch] = useState("");

  const [seeMore, setSeeMore] = useState(8);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleSeeMore = () => {
    setSeeMore((prevState) => prevState + 8);
  };
  useEffect(() => {
    axios.get("/public/getAllProducts").then((res) => {
      setAllProducts(res.data);
      setAllProductsHack(res.data);
    });
  }, []);
  const openSearchbar = () => {
    setIsOpenSearch(!isOpenSearch);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setAllProducts(
      allProductsHack.filter((element) => {
        return (
          element.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
          -1
        );
      })
    );
  };
  const handleAddToCart = (product) => {
    if (user && product.inventory > 0)
      axios
        .post(`/public/addProductToCart/${user.id}/${product.id}`)
        .then((res) => {
          if (res.data) {
            dispatch(updateCart(res.data));
            notify(
              "this product has been added to your cart.",
              toast,
              "success"
            );
          } else
            notify("This product already added to your cart.", toast, "info");
        });
    else if (!user)
      notify(
        "You should signin before you add product to the cart",
        toast,
        "info"
      );
  };
  return (
    <>
      <ToastContainer />
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
              <div
                className='flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search'
                onClick={openSearchbar}
              >
                {!isOpenSearch ? (
                  <i className='icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search' />
                ) : (
                  <i className='icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none' />
                )}
                Search
              </div>
            </div>
            <div
              className='dis-none panel-search w-full p-t-10 p-b-15'
              style={{ display: isOpenSearch ? "block" : "none" }}
            >
              <div className='bor8 dis-flex p-l-15'>
                <button className='size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04'>
                  <i className='zmdi zmdi-search' />
                </button>
                <input
                  className='mtext-107 cl2 size-114 plh2 p-r-15'
                  type='text'
                  name='search-product'
                  placeholder='Search'
                  value={search}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
          <div className='row isotope-grid'>
            {allProducts &&
              allProducts?.slice(0, seeMore)?.map((product, index) => {
                return (
                  <div
                    className='col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women'
                    key={index}
                  >
                    <div className='block2'>
                      <div className='block2-pic hov-img0'>
                        <img src={productImg} alt='IMG-PRODUCT' />
                        <button
                          className='block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1'
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to cart
                        </button>
                      </div>
                      <div className='block2-txt flex-w flex-t p-t-14'>
                        <div className='block2-txt-child1 flex-col-l'>
                          <a
                            href='product-detail.html'
                            className='stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6'
                          >
                            {product.name}{" "}
                          </a>
                          <span className='stext-105 cl3'>
                            {" "}
                            Price: ${product.price}{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className='flex-c-m flex-w w-full p-t-45'>
            <a
              className='flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04'
              onClick={handleSeeMore}
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

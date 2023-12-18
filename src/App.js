// import Header from "./components1/header/Header";
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Header1 from "./components1/header/Header1";
import Footer from "./components1/footer/Footer"
import './Root.css'
import Product from "./components1/product/Product";
import ListProducts from "./components1/listProducts/ListProducts";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Home from "./pages/home/Home";
import Slider from "./components1/slider/Slider"
import Category from "./components1/category/Category"
import ProductCategory from "./pages/productCategory/ProductCategory";
import Ring from "./components1/ring/Ring"
import ListRing from "./components1/ring/ListRing";
import RingProducts from "./pages/Ring/RingProduct";
import ListAllProducts from "./components1/AllProducts/ListAllProducts";
import ListNecklaces from "./components1/necklaces/ListNecklaces";
import ListEarnings from "./components1/earnings/ListEarnings";
import ListBracelets from "./components1/bracelet/ListBracelets";
import ListGiftIdeas from "./components1/giftIdeas/ListGiftIdeas";
import NecklaceProducts from "./pages/Necklaces/NecklaceProducts";
import EarningProducts from "./pages/Earnings/EarningProducts";
import BraceletProducts from "./pages/BraceletProducts/BracelatProducts";
import GiftIdeas from "./components1/giftIdeas/GiftIdeas";
import GiftIdeaProducts from "./pages/GiftIdeaProducts/GiftIdeaProducts";
import Blog from "./pages/Blog/Blog";
import Blogmore from "./pages/Blog2/Blogmore";
import AboutUs from "./pages/About us/AboutUs";
import Error from "./pages/Page404/Error";

export default function App() {
    return (
        <div>
            {/* <Header /> */}
            {/* <Header1/> */}
            {/* <Product/>s */}
            {/* <ListProducts/>  */}
            {/* <ProductDetail/> */}
            {/* <Footer/> */}
            {/* <Home/> */}
            {/* <Slider/> */}
            {/* <Category/> */}
            {/* <ProductCategory/> */}
            {/* <ListRing/> */}
            {/* <RingProducts/>  */}
            {/* <ListNecklaces/> */}
            {/* <ListEarnings/> */}
            {/* <ListBracelets/> */}
            {/* <ListGiftIdeas/> */}
            {/* <NecklaceProducts/> */}
            {/* <EarningProducts/> */}
            {/* <BraceletProducts/> */}
            {/* <GiftIdeaProducts/> */}
            {/* <Blog/> */}
            {/* <Blogmore/> */}
            {/* <AboutUs/> */}
            {/* <Error/> */}
            <BrowserRouter>
            {/* <Header1/> */}
            {/* <Home/> */}
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    {/* index element cu pham cua / */}
                    <Route path='/Products' element={<ProductCategory />}></Route>
                    <Route path='/Rings' element={<RingProducts />}></Route>
                    <Route path='/Necklaces' element={<NecklaceProducts />}></Route>
                    <Route path='/Earnings' element={<EarningProducts />}></Route>
                    <Route path='/Bracelets' element={<BraceletProducts />}></Route>
                    <Route path='/GiftIdeas' element={<GiftIdeaProducts />}></Route>
                    <Route path='/Blog' element={<Blog />}></Route>
                    <Route path='/AboutUs' element={<AboutUs />}></Route>
                    <Route path='/Detail' element={<ProductDetail />}></Route>
                    <Route path='/Blog2' element={<Blogmore />}></Route>
                    <Route path='/Error' element={<Error />}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
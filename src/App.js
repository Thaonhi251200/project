// import Header from "./components1/header/Header";

import Header1 from "./components1/header/Header1";
import Footer from "./components1/footer/Footer"
import Header2 from "./components1/header/Header2";
import './Root.css'
import Product from "./components1/product/Product";

export default function App() {
    return (
        <div>
            {/* <Header /> */}
            <Header1/>
            {/* <Header2/> */}
            <Product/>
            <Footer/>
        </div>
    )
}
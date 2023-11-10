import Footer from "../../components1/footer/Footer";
import Header1 from "../../components1/header/Header1";
import Product from "../../components1/product/Product";

export default function Home(){
    return(
        <div>
            <Header1/>
            <Product/>
            {/* list ds sp noi bat, sp KM, sp ban chay */}
            <Footer/>
        </div>
    )
}
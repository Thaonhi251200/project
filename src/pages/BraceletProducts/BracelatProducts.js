import { useState } from "react"
import Header1 from "../../components1/header/Header1"
import "./BraceletProducts.css"
import { Container } from "reactstrap"
import ListRing from "../../components1/ring/ListRing"
import bg from "../../img/default-slider-1.jpeg"
import Footer from "../../components1/footer/Footer"
import { BreadcrumbItem, Breadcrumb } from "reactstrap"
import ListBracelets from "../../components1/bracelet/ListBracelets"
import {Link} from "react-router-dom"
export default function BraceletProducts() {
    const [weight, setWeight] = useState(350)
    const changeWeight = (event) => {
        setWeight(event.target.value)
    }

    return (
        <div>
            <Header1 />
            <div className="productCategory">
                <div className="bg">
                    <img src={bg} />
                    <div className="text">
                        <h1><b>Bracelets</b></h1>
                        <Breadcrumb listTag="div">
                            <BreadcrumbItem
                                href="/"
                                tag="a"
                            >
                                Home
                            </BreadcrumbItem>
                            <BreadcrumbItem
                                href="/Products"
                                tag="a"
                            >
                                Products
                            </BreadcrumbItem>
                            <BreadcrumbItem className="choice"
                                href="#"
                                tag="a"
                            >
                                Bracelets
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>

                </div>
                <Container>
                    <div className="category-content">
                        <div className="category-text" >
                            <div className="category-menu">
                                <a href="/Products"> <h2><b>Categories</b></h2></a>
                                <ul>
                                    <li><Link to="/Rings">Rings</Link></li>
                                    <li><Link to="/Necklaces">Necklaces</Link></li>
                                    <li><Link to="/Earnings">Earnings</Link></li>
                                    <li><Link className="choice-this" to="/Bracelets">Bracelets</Link></li>
                                    <li><Link to="/GiftIdeas">Gift Ideas</Link></li>
                                </ul>
                            </div>
                            <div className="category-filter">
                                <h2><b>Pricing Filter</b></h2>

                                <input type="range"
                                    // id="points" 
                                    name="points"
                                    step={1}
                                    onChange={changeWeight}
                                    min="0"
                                    max="350"
                                    value={weight}
                                    className="filter">
                                </input>
                                <div><h5><b> 0$-- {weight}$</b></h5></div>

                            </div>
                            <div className="category-color">
                                <h2><b>Color</b></h2>
                                <div className="select-color" >
                                    <div className="color gold"></div>
                                    <div className="color silver"></div>
                                </div>

                            </div>
                            <div className="category-size">
                                <h2><b>Size</b></h2>
                                <form>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> <b>S(12)</b></label><br />
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> <b>M(14)</b></label><br />
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> <b>L(16)</b></label><br />
                                </form>
                            </div>
                        </div>
                        <div className="categoryProduct">
                            <ListBracelets />
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />

        </div>
    )
}
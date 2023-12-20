import { useState } from "react"
import Header1 from "../../components1/header/Header1"
import "./EarningProducts.css"
import { Container } from "reactstrap"
import ListRing from "../../components1/ring/ListRing"
import bg from "../../img/default-slider-1.jpeg"
import Footer from "../../components1/footer/Footer"
import { BreadcrumbItem, Breadcrumb } from "reactstrap"
import ListEarnings from "../../components1/earnings/ListEarnings"
export default function EarningProducts() {
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
                        <h1><b>Earnings</b></h1>
                        <Breadcrumb listTag="div">
                            <BreadcrumbItem
                                href="#"
                                tag="a"
                            >
                                Home
                            </BreadcrumbItem>
                            <BreadcrumbItem
                                href="#"
                                tag="a"
                            >
                                Products
                            </BreadcrumbItem>
                            <BreadcrumbItem className="choice"
                                href="#"
                                tag="a"
                            >
                                Earnings
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
                                    <li><a href="/Rings">Rings</a></li>
                                    <li><a href="/Necklaces">Necklaces</a></li>
                                    <li><a className="choice-this" href="/Earnings">Earnings</a></li>
                                    <li><a href="/Bracelets">Bracelets</a></li>
                                    <li><a href="/GiftIdeas">Gift Ideas</a></li>
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
                            <ListEarnings/>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />

        </div>
    )
}
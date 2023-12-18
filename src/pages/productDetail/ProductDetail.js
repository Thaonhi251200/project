import { Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import img11 from "../../img/img11.jpeg"
import img12 from "../../img/img12.jpeg"
import pay from "../../img/trust_badge.png"
import des1 from "../../img/single-blog-description-4.jpeg"
import des2 from "../../img/extend-product-description-2.jpeg"
import des3 from "../../img/Christmas-Gift-Guide.jpeg"
import acc from "../../img/accoun.png"
import './ProductDetail.css'
import Header1 from "../../components1/header/Header1";
import Footer from "../../components1/footer/Footer";
import Category from "../../components1/category/Category";
import ListProducts from "../../components1/listProducts/ListProducts";


export default function ProductDetail(props) {
    return (
        <div>
            <Header1 />
            <Container>
                <Breadcrumb listTag="div" className="breadcrumb"> 
                    <BreadcrumbItem
                        href="/"
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
                    <BreadcrumbItem
                        href="/Rings"
                        tag="a"
                    >
                        Rings
                    </BreadcrumbItem>
                    <BreadcrumbItem className="choice"
                        href="#"
                        tag="a"
                    >
                        Blue Stripes & Stone Earrings
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="detail">
                    <div className="image">

                        <div className="small">
                            <img className="hinh a"
                                alt="simple"
                                src={img11} />
                            <img className="hinh b"
                                alt="simple"
                                src={img12} />
                        </div>
                        <div className="big">
                            <div className="chevron">
                                <i class="fa-solid fa-chevron-left"></i>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <img className="center"
                                alt="simple"
                                src={img11} />
                        </div>
                    </div>
                    <div className="content">
                        <h3><b>Blue Stripes & Stone Earrings</b></h3>
                        <div className='start'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div className='price'>
                            <p className='priceAfter' tag='h5'><b>$249.00   </b></p>
                            <p className='priceBefore' tag='h5'><del>$249.00</del></p>
                        </div>
                        <div className="description">
                            <p>This regulator has a rolled diaphragm and high flow rate with reduced pressure drop.It has an excellent degree of condensation.</p>
                        </div>
                        <div className="choose">
                            <div className="number">
                                <i class="fa-solid fa-minus"></i>
                                <input className="num input" type="text" value="1" />
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <button className="buy"><b>BUY IT NOW</b></button>
                        </div>
                        <div className="ask">
                            <div className="line one">
                                <i class="fa-solid fa-arrow-rotate-left"></i>
                                <p> Delivery & Return</p>
                            </div>
                            <div className="line two">
                                <i class="fa-regular fa-circle-question"></i>
                                <p> Ask a Question</p>
                            </div>
                        </div>
                        <div className="time">
                            <i class="fa-regular fa-clock"></i>
                            <p>Estimated Delivery:<span>19 November - 23 November</span></p>
                        </div>
                        <div className="policy">
                            <div className="policy-item one">
                                <i class="fa-solid fa-truck-fast"></i>
                                <p>Free Shipping</p>
                            </div>
                            <div className="policy-item two">
                                <i class="fa-solid fa-shield"></i>
                                <p>1 Year Warranty</p>
                            </div>
                            <div className="policy-item three">
                                <i class="fa-solid fa-handshake-simple"></i>
                                <p>Secure payment</p>
                            </div>
                            <div className="policy-item four">
                                <i class="fa-solid fa-arrow-rotate-left"></i>
                                <p>30 Days Return</p>
                            </div>
                        </div>
                        <div className="pay">
                            <p><b>Guaranteed Safe Checkout</b></p>
                            <img src={pay} alt="Trues Badge" />
                        </div>
                        <div className="category">
                            <p>Category: <span>Earnings</span></p>
                            <p>Tags: <span>Gold, Women</span></p>
                        </div>
                        <div className='media'>
                            <b>Share:</b>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-pinterest-p"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="line-main"></div>
            <Container>
                <div className="description">
                    <div className="menu">
                        <a href="#">Description</a>
                        <a href="#">Comments</a>
                    </div>
                    <div className="description-detail one">
                        <div className="content-detail one">
                            <p>Cookie dragee croissant dessert. Powder marshmallow pie wafer dessert sweet roll tootsie roll cupcake. Tart oat cake lollipop lollipop halvah chupa chups bonbon sugar plum dessert. Carrot cake marzipan cupcake cotton candy powder wafer sugar plum powder powder. Macaroon topping chocolate. Cake jelly beans icing tiramisu. Ice cream bonbon tart sesame snaps.</p>
                            <h3>PRODUCT DETAILS</h3>
                            <ul>
                                <li><p>Part of our responsible edit</p></li>
                                <li><p>Super high rise</p></li>
                                <li><p>Zip fly</p></li>
                                <li><p>Double turn-up cuffs</p></li>
                                <li><p>Five-pocket design</p></li>
                                <li><p>Oversized, tapered fit</p></li>
                                <li><p>Sits on the ankle</p></li>
                                <li><p>Cut loosely around the thigh with a tapered leg</p></li>
                            </ul>
                        </div>
                        <div className="img-detail a">
                            <img src={des1} />
                        </div>
                    </div>
                    <div className="img-detail b">
                        <img src={des2} />
                    </div>
                    <div className="description-detail two">
                        <div className="img-detail c">
                            <img src={des3} />
                        </div>
                        <div className="content-detail two">
                            <h3>BRAND</h3>
                            <p>Tart oat cake lollipop lollipop halvah chupa chups bonbon sugar plum dessert. Carrot cake marzipan cupcake cotton candy powder wafer sugar plum powder powder. Macaroon topping chocolate. Cake jelly beans icing tiramisu. Ice cream bonbon tart sesame snaps.</p>
                            <h3>SIZE & FIT</h3>
                            <p>TModel wears: UK 8/ W26" L32"
                                Model's height: 169cm/5'6.5"</p>
                            <h3>LOOK AFTER ME</h3>
                            <p>Just here for the care instructions? Yeah, we thought so
                                Machine wash according to instructions on care label</p>
                        </div>
                    </div>
                </div>
                <Category />
                <div>
                    <div className="title-line a">
                        <h1>Related products</h1>
                    </div>
                    <ListProducts />

                </div>
                <div className="comment">
                    <div className="title-line a">
                        <h1>Comments</h1>
                    </div>
                    <h5>2 reviews for Sparkling Crown Charm Bracelet</h5>
                    <div>
                        <div className="comment-owner b">
                            <div className="acc">
                                <img src={acc} />
                            </div>
                            <div className="comment-text">
                                <div className='start'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    {/* <i class="fa-solid fa-star"></i> */}
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <div className="category">
                                    <p><b>Emily Davisx</b> <span> - March 3, 2023</span></p><br />
                                    <span>I will definitely be purchasing more from this store in the future, and I would highly recommend them to anyone who is looking for high-quality and stylish jewelry.</span>

                                </div>
                            </div>
                        </div>
                        <div className="line1"></div>

                        <div className="comment-owner b">
                            <div className="acc">
                                <img src={acc} />
                            </div>
                            <div className="comment-text">
                                <div className='start'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    {/* <i class="fa-regular fa-star"></i> */}
                                </div>
                                <div className="category">
                                    <p><b>Megan Miller</b> <span>– March 4, 2023</span></p><br />
                                    <span>I will definitely be purchasing more from this store in the future, and I would highly recommend them to anyone who is looking for high-quality and stylish jewelry.</span>
                                </div>
                            </div>
                        </div>
                        <div className="line1"></div>
                        <div className="write-comment">
                            <input className="input" type="email" name="EMAIL" placeholder="Add a review..." required=""></input>
                            <input className="submit" type="submit" value="Comment"></input>
                        </div>
                    </div>

                </div>

            </Container>
            <Footer />
        </div>

    )
}
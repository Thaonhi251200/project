import Footer from "../../components1/footer/Footer";
import Header1 from "../../components1/header/Header1";
import Product from "../../components1/product/Product";
import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import bg1 from "../../img/home-default-banner-5.jpeg"
import bg2 from "../../img/home-default-banner-5.jpeg"
import bga from "../../img/home-default-banner-1.jpeg"
import bgb from "../../img/home-default-banner-3.jpeg"
import bgc from "../../img/home-default-banner-2.jpeg"
import bgdowna from "../../img/home-default-banner-4.jpeg"
import bgdownb from "../../img/home-default-banner-5.jpeg"
import journal1 from "../../img/Christmas-Gift-Guide.jpeg"
import journal2 from "../../img/How-to-Style-a-Quiff.jpeg"
import journal3 from "../../img/Selective-Styles-Help-your-look.jpeg"
import journal4 from "../../img/Jewels-of-Prosperity-2023.jpeg"
import itg1 from "../../img/Instagram-Image-1.jpeg"
import itg2 from "../../img/Instagram-Image-2.jpeg"
import itg3 from "../../img/Instagram-Image-3.jpeg"
import itg4 from "../../img/Instagram-Image-4.jpeg"
import itg5 from "../../img/Instagram-Image-5.jpeg"
import itg6 from "../../img/Instagram-Image-6.jpeg"
import slider from "../../img/How-to-Style-a-Quiff 1.png"
import slider1 from "../../img/pexels-photo-1191531 1.png"
import slider2 from "../../img/The-Wasteland-Bracelet 1.png"


import "./Home.css"
import ListProducts from "../../components1/listProducts/ListProducts";
import Category from "../../components1/category/Category";
import ListBracelets from "../../components1/bracelet/ListBracelets";
import ListEarnings from "../../components1/earnings/ListEarnings";
import ListGiftIdeas from "../../components1/giftIdeas/ListGiftIdeas";

export default function Home() {
    return (
        <div>
            <Header1 />
            <UncontrolledCarousel className="slider"
                items={[
                    {

                        // altText: 'Introducing The ',
                        caption: 'Introducing The ',
                        key: 1,
                        src: slider
                    },
                    {
                        altText: 'Slide 2',
                        caption: 'New Collestion',
                        key: 2,
                        src: slider1
                    },
                    {
                        altText: 'Slide 3',
                        caption: 'Fashion seasion',
                        key: 3,
                        src: slider2
                    }
                ]}
            />
            <div className="banner">
                <Container>
                    <Row>
                        <Col className="banner-box a" sm="12" md="12" lg="4">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={bga} />
                            </div>
                            <div className="box-content one">
                                <p>2023 FASHION</p>
                                <h3> Just Lunched<br />Desk The Hals</h3>
                                {/* <button><b>SEE MORE</b></button> */}
                                <button><a href="/Error"><b>SEE MORE</b></a></button>

                            </div>
                        </Col>
                        <Col className="banner-box b" sm="12" md="12" lg="4">
                            <div className="box-img two">
                                <img
                                    alt="simple"
                                    src={bgb} />
                            </div>
                            <div className="box-content two">
                                <p>NEW COLLECTION</p>
                                <h3> Jewelry &<br />Charm Rings</h3>
                                <button><a href="/Error"><b>SEE MORE</b></a></button>

                            </div>
                        </Col>
                        <Col className="banner-box c" sm="12" md="12" lg="4">
                            <div className="box-img three">
                                <img
                                    alt="simple"
                                    src={bgc} />
                            </div>
                            <div className="box-content three">
                                <p>FLAT DISCOUNT</p>
                                <h3> Necklaces &<br /> Body Jewels</h3>
                                <button><a href="/Error"><b>SEE MORE</b></a></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Category />
            <div className="title-line a">
                <h1><b>Trendy Collection</b></h1>
                <p>Collect your loves with our newest arrivals.</p>
            </div>
            <ListProducts />
            <div className="pink">
                <h3><i class="fa-solid fa-house"></i> <b>Find Jewelry Shops Near You</b></h3>
                <div class="pls-cta-btn pls-button">
                    <a href="#" class="button btn-style-outline btn-shape-square"><b>Find Store</b></a>
                </div>
            </div>
            <div className="title-line a">
                <h1><b>Autumn Collection</b></h1>
                <p>Collect your loves with our newest arrivals.</p>
            </div>
            <ListBracelets/>
            {/* list ds sp noi bat, sp KM, sp ban chay */}
            <div className="banner a">
                <Container>
                    <Row>
                        <Col className="banner-box a" sm="12" lg="6">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={bgdowna} />
                            </div>
                            <div className="box-content one">
                                <h3> <b>New Bangles</b><br /> <b>Collection</b></h3>
                                <p>Catch the highlight in the roof</p>
                                <button><b>SEE MORE</b></button>
                            </div>
                        </Col>
                        <Col className="banner-box b" sm="12" lg="6">
                            <div className="box-img two">
                                <img
                                    alt="simple"
                                    src={bgdownb} />
                            </div>
                            <div className="box-content one">
                                <h3><b>Culture of </b><br /><b>Charm Rings</b></h3>
                                <p>Pasha de Cartier Collection.</p>
                                <button><b>SEE MORE</b></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="title-line a">
                <h1><b>Featured Products</b></h1>
                <div className='select-a'>
                    <a href='#'><b>New Arrivals</b></a>
                    <a href='#'><b>Featured</b></a>
                    <a href='#'><b>Best Seller</b></a>
                </div>
            </div>
            <ListEarnings/>
            {/* <ListGiftIdeas/> */}
            <div className="review">
                <Container>
                    <h1><b>Customer Review</b></h1>
                    <Row>
                        <Col className="block-review a" sm="12" md="12" lg="4">
                            <div className="chril-block-review">
                                <i class="fa-solid fa-quote-left"></i>
                                <p><b>Alukas is my favourite store</b></p>
                                <p>Great products and designs and such great quality, they always wash up well no matter how many times I wash them.</p>
                                <div className="text-icon">
                                    <p><b>- Donald Duclk</b></p>
                                    <div className="icon-start">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="block-review b" sm="12" md="12" lg="4">
                            <div className="chril-block-review">
                                <i class="fa-solid fa-quote-left"></i>
                                <p><b>Beautiful products</b></p>
                                <p>Beautiful clothes. I always get complements. Good quality and items wash well. products and designs and such great.</p>
                                <div className="text-icon">
                                    <p><b>- Niamh Oxley</b></p>
                                    <div className="icon-start">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        {/* <i class="fa-solid fa-star"></i> */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="block-review c" sm="12" md="12" lg="4">
                            <div className="chril-block-review">
                                <i class="fa-solid fa-quote-left"></i>
                                <p><b>Lovely products</b></p>
                                <p>Great products and designs and such great quality, they always wash up well no matter how many times I wash them.</p>
                                <div className="text-icon">
                                    <p><b>- Mary Green</b></p>
                                    <div className="icon-start">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="journal">
                <div className="journal-tilte">
                    <h1><b>Read Journal</b></h1>
                    <p>Latest trends and inspirations in fashion design.</p>
                </div>
                <Container>
                    <Row>
                        <Col className="journal-banner-box a" sm="12" md="12" lg="4">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={journal1} />
                                <p>ACCESSORIES</p>
                            </div>
                            <div className="box-content one">
                                <div className="time">
                                    <p><b>ALUKAS </b><span> - FEBRUARY 17, 2023</span></p>
                                </div>
                                <h5><b>Christmas Gift Guide</b></h5>
                                <span>Oneself...</span><br />
                                <button><b>Continue Rearding</b></button>
                            </div>
                        </Col>
                        <Col className="journal-banner-box b" sm="12" md="12" lg="4">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={journal2} />
                                <p>FASHION</p>
                            </div>
                            <div className="box-content two">
                                <div className="time">
                                    <p><b>ALUKAS </b><span> - FEBRUARY 17, 2023</span></p>
                                </div>
                                <h5><b>How to Style a Quiff</b></h5>
                                <span>Pommy...</span><br />
                                <button><b>Continue Rearding</b></button>
                            </div>
                        </Col>
                        <Col className="journal-banner-box c" sm="12" md="12" lg="4">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={journal3} />
                                <p>COLLECTION</p>
                            </div>
                            <div className="box-content three">
                                <div className="time">
                                    <p><b>ALUKAS </b><span> - FEBRUARY 17, 2023</span></p>
                                </div>
                                <h5><b>Selective Styles Help your look</b></h5>
                                <span>Codswallop...</span><br />
                                <button><b>Continue Rearding</b></button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="instagram">
                <div className="instagram-tilte">
                    <h1><b>Follow Us on Instagram</b></h1>
                    <p>@presslayoutstheme</p>
                </div>
                <Container>
                    <Row>
                        <Col className="instagram-banner-box a" sm="6" md="4" lg="2">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={itg1} />
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </Col>
                        <Col className="instagram-banner-box a" sm="6" md="4" lg="2">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={itg2} />
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </Col>
                        <Col className="instagram-banner-box a" sm="6" md="4" lg="2">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={itg3} />
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </Col>
                        <Col className="instagram-banner-box a" sm="6" md="4" lg="2">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={itg4} />
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </Col>
                        <Col className="instagram-banner-box a" sm="6" md="4" lg="2">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={itg5} />
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </Col>
                        <Col className="instagram-banner-box a" sm="6" md="4" lg="2">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={itg6} />
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}
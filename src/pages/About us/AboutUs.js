import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import Footer from "../../components1/footer/Footer";
import Header1 from "../../components1/header/Header1";
import imga from "../../img/about-us-1-image-1.jpeg"
import imgb from "../../img/about-us-1-image-2.jpeg"
import sign from "../../img/Signatire.png"
import imgc from "../../img/about-us-1-image-3.jpeg"
import avta from "../../img/about-us-team-1.jpeg"
import avtb from "../../img/about-us-team-2.jpeg"
import avtc from "../../img/about-us-team-3.jpeg"
import avtd from "../../img/about-us-team-4.jpeg"
import favou from "../../img/home-simple-testimonial-avatar-1.jpeg"
import branka from "../../img/Bershka.png"
import brankb from "../../img/hm.png"
import brankc from "../../img/ray-ban.png"
import brankd from "../../img/mango.png"
import branke from "../../img/pull-bear.png"
import brankf from "../../img/zara.png"

import "./Aboutus.css"

export default function AboutUs() {
    return (
        <div>
            <Header1 />
            <Container className="block-1">
                <Breadcrumb listTag="div" className="breadcrumb">
                    <BreadcrumbItem
                        href="#"
                        tag="a"
                    >
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem className="choice"
                        href="#"
                        tag="a"
                    >
                        About Us
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="aboutUs-title">
                    <h1><b>About Our Online Store</b></h1>
                    <p>Alukas providing rare & beautiful items sourced both locally & globally.</p>
                </div>
            </Container>
            <div className="aboutUs-img">
                <Row>
                    <Col sm="12" md="6" lg="6">
                        <img src={imga} />
                    </Col>
                    <Col sm="12" md="6" lg="6">
                        <img src={imgb} />
                    </Col>
                </Row>
            </div>
            <Container>
                <Row>
                    <Col className="our-store" md="12" lg="4">
                        <h1><b>Our Story  _____</b></h1>
                    </Col>
                    <Col className="our-store-content" md="12" lg="7">
                        <h5><b>Apparently we had reached a great height in the atmosphere, for the sky was a dead black has been the industry’s standard dummy text ever since the 1500s.</b></h5>
                        <p> Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.</p>
                        <p> To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich.</p>
                        <img src={sign} />
                    </Col>
                </Row>
                <div className="our-mission">
                    <Row>
                        <Col className="mission-img" lg="6">
                            <img src={imgc} />
                        </Col>
                        <Col className="our-mission-content" lg="6">
                            <div className="mission-content a">
                                <h3><b>Our Mission</b></h3>
                                <p>By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.</p>
                            </div>
                            <div className="mission-content b">
                                <h3><b>Our Vision</b></h3>
                                <p>We were supposed to head to California this weekend but last minute had to cancel and I’m so bummed I was so ready for the beach!! These pictures were from last weekend when the weather.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <div className="Responsible">
                    <h1><b>Responsible and Sustainable Development</b></h1>
                    <Row>
                        <Col className="box a" sm="12" lg="4">
                            <i class="fa-regular fa-face-smile-beam"></i>
                            <h3><b>Happy Customer</b></h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore eu fugiat nulla pariatur.</p>
                        </Col>
                        <Col className="box b" sm="12" lg="4">
                            <i class="fa-solid fa-truck-fast"></i>
                            <h3><b>Free Shipping</b></h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore eu fugiat nulla pariatur.</p>
                        </Col>
                        <Col className="box c" sm="12" lg="4">
                            <i class="fa-regular fa-heart"></i>
                            <h3><b>Made With Love</b></h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore eu fugiat nulla pariatur.</p>
                        </Col>
                    </Row>
                </div>
            </Container>

            <div className="leader">
                <Container>
                    <h1><b>The Leader Board Of Our Company</b></h1>
                    <Row>
                        <Col className="box a" xs="6" sm="6" md="6" lg="3">
                            <div className="leader-img">
                                <img src={avta} />
                                <div className="contact">
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                            <h4><b>Nimrod Barshad</b></h4>
                            <p>Founder/CEO</p>
                        </Col>
                        <Col className="box b" xs="6" sm="6" md="6" lg="3">
                            <div className="leader-img">
                                <img src={avtb} />
                                <div className="contact">
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                            <h4><b>Claude K. Amadeo</b></h4>
                            <p>Sales Director</p>
                        </Col>
                        <Col className="box c" xs="6" sm="6" md="6" lg="3">
                            <div className="leader-img">
                                <img src={avtc} />
                                <div className="contact">
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                            <h4><b>Linda M. Dugan</b></h4>
                            <p>Manager</p>
                        </Col>
                        <Col className="box d" xs="6" sm="6" md="6" lg="3">
                            <div className="leader-img">
                                <img src={avtd} />
                                <div className="contact">
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                            <h4><b>Mark Pocket</b></h4>
                            <p>Product Manager</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="favourite-store">
                <div className="favourite-text">
                    <h3>Alukas is my favourite store</h3>
                    <div className='start'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h3><b>Great products and designs and such great quality, they always wash up well no matter how many times I wash them.		</b></h3>
                    <p><b>- Donald Duclk</b></p>
                </div>
                <div className="favourite-img">
                    <img src={favou} />
                </div>
            </div>
            <Container> <div className="brank">
                <Row>
                    <Col sm="6" md="4" lg="2">
                        <img src={branka} />
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        <img src={brankb} />
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        <img src={brankc} />
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        <img src={brankd} />
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        <img src={branke} />
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        <img src={brankf} />
                    </Col>
                </Row>
            </div>
            </Container>

            <Footer />
        </div>
    )
}
import earnings from '../../img/earnings.jpeg'
import mode from '../../img/mode.jpeg'
import { Card, CardBody, CardSubtitle, CardText, Container, CardTitle, Row, Col, } from "reactstrap"
import './Product.css'
export default function Product() {
    return (
        <div className='products'>
            <Container>
                <Row>
                    <Col sm="6" md="4" lg="3" className='block'>
                        <div className='box a'>
                            <Card
                            // style={{
                            //     width: '18rem'
                            // }}
                            >
                                <div className='icon'>
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className='img'>
                                    <img className=' one'
                                        style={{ width: "100%" }}
                                        alt="Sample"
                                        src={earnings}
                                    />
                                    <img className=' two'
                                        style={{ width: "100%" }}
                                        alt="Sample"
                                        src={mode}
                                    />
                                </div>
                                <div className='promotion'><p><b>20% OFF</b></p></div>

                                <CardBody className="text-center">
                                    <CardTitle tag="p" >
                                        EARNINGS
                                    </CardTitle>
                                    <CardText tag="b" >
                                        Pandora Flower Stem Earrings
                                    </CardText>
                                    <div className='start'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <CardSubtitle
                                        className=" mb-2 text-muted text-center"
                                    >
                                        <div className='price'>
                                            <p className='priceAfter' tag='h4'><b>$95.20</b></p>
                                            <p className='priceBefore' tag='h4'><del>$119.00</del></p>
                                        </div>
                                        <button className='add'>
                                            <b> ADD TO CART</b>
                                        </button>
                                    </CardSubtitle>

                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col sm="6" md="4" lg="3" className='block'>
                        <div className='box b'>
                            <Card>
                                <div className='hot'><p><b>HOT</b></p></div>
                                <div className='icon'>
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className='img'>
                                    <img className=' one'
                                        style={{ width: "100%" }}
                                        alt="Sample"
                                        src={earnings}
                                    />
                                    <img className=' two'
                                        style={{ width: "100%" }}
                                        alt="Sample"
                                        src={mode}
                                    />
                                </div>

                                <CardBody className="text-center">
                                    <CardTitle tag="p" >
                                        EARNINGS
                                    </CardTitle>
                                    <CardText tag="b" >
                                        Pandora Flower Stem Earrings
                                    </CardText>
                                    <div className='start'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <CardSubtitle
                                        className=" mb-2 text-muted text-center"
                                    >
                                        <p className='price' tag='h4'><b>$119.00</b></p>
                                        <button className='add'>
                                            <b> ADD TO CART</b>
                                        </button>
                                    </CardSubtitle>

                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col sm="6" md="4" lg="3" className='block'>
                        <div className='box c'>
                            <Card>
                                <div className='icon'>
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className='img'>
                                    <img className=' one'
                                        style={{ width: "100%" }}
                                        alt="Sample"
                                        src={earnings}
                                    />
                                    <img className=' two'
                                        style={{ width: "100%" }}
                                        alt="Sample"
                                        src={mode}
                                    />
                                </div>

                                <CardBody className="text-center">
                                    <CardTitle tag="p" >
                                        EARNINGS
                                    </CardTitle>
                                    <CardText tag="b" >
                                        Pandora Flower Stem Earrings
                                    </CardText>
                                    <div className='start'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <CardSubtitle
                                        className=" mb-2 text-muted text-center"
                                    >
                                        <p className='price' tag='h4'><b>$119.00</b></p>
                                        <button className='add'>
                                            <b> ADD TO CART</b>
                                        </button>
                                    </CardSubtitle>

                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col sm="6" md="4" lg="3" className='block'>
                        <div className='box d'>
                            <Card>
                                <div className='icon'>
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className='img'>
                                    <img className=' one'
                                        style={{ width: "100%" }}
                                        alt="Sample"
                                        src={earnings}
                                    />
                                    <img className=' two'
                                        style={{ width: "100%" }}
                                        alt="Sample"
                                        src={mode}
                                    />
                                </div>

                                <CardBody className="text-center">
                                    <CardTitle tag="p" >
                                        EARNINGS
                                    </CardTitle>
                                    <CardText tag="b" >
                                        Pandora Flower Stem Earrings
                                    </CardText>
                                    <div className='start'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <CardSubtitle
                                        className=" mb-2 text-muted text-center"
                                    >
                                        <p className='price' tag='h4'><b>$119.00</b></p>
                                        <button className='add'>
                                            <b> ADD TO CART</b>
                                        </button>
                                    </CardSubtitle>

                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
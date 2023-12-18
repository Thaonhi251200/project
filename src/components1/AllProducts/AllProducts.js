
import { Card, CardBody, CardSubtitle, CardText, Container, CardTitle, Row, Col, } from "reactstrap"
import './AllProducts.css'
export default function AllProducts(props) {
    return (


        <Col xs= "6" sm="6" md="4" lg="3" className='block'>
            <div className='box a'>
                <Card
                >
                    <div className='icon'>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className='img'>
                        <img className=' one'
                            style={{ width: "100%" }}
                            alt="Sample"
                            src={props.img}
                        />
                        <img className=' two'
                            style={{ width: "100%" }}
                            alt="Sample"
                            src={props.img1}
                        />
                    </div>
                    <div className='promotion'>
                        {/* <div className='discount'><p><b>20% OFF</b></p></div> */}
                        <div className='hot'><p><b>HOT</b></p></div>
                    </div>


                    <CardBody className="text-center">
                        <CardTitle tag="p" >
                            {props.item.category}
                        </CardTitle>
                        <CardText tag="b" >
                            {props.item.name}
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
                                <p className='priceAfter' tag='h4'><b>{props.item.price}</b></p>
                                <p className='priceBefore' tag='h4'><del>{props.item.price}</del></p>
                            </div>
                            <button className='add'>
                                <b> ADD TO CART</b>
                            </button>
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        </Col>
        
    )
}
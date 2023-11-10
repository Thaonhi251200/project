import {
    Container,
    Row,
    Col
} from 'reactstrap'
import './Footer.css'
export default function Footer() {
    return (
        <div className='all'>
            <Container>
                    <div className='footer' >
                <Row>
                        <Col sm="6" md="4" lg="3">
                            <div className='box one ' >
                                <a href='#'> <h3> ALUKAS & CO</h3></a>
                                <p>Gold & Diamond</p>
                            </div>
                        </Col>
                        <Col sm="6" md="4" lg="3" >
                            <div className='box two'>
                                <h5><b>About Alukas</b></h5>
                                <ul>
                                    <li>
                                        <a href='#'>About Us</a>
                                    </li>
                                    <li>
                                        <a href='#'>Blog</a>
                                    </li>
                                    <li>
                                        <a href='#'>Sitemap</a>
                                    </li>
                                </ul>
                            </div></Col>
                        <Col sm="6" md="4" lg="3">
                            <div className='box three'>
                                <h5><b>Store Details</b></h5>
                                <ul>
                                    <li>
                                        <div className='call'>
                                            <i class="fa-solid fa-headphones"></i>
                                            <div className='help'>
                                                <p>Need Any Help?</p>
                                                <h5>123 45678 90</h5>
                                            </div>
                                        </div>

                                    </li>
                                    <li>
                                        <p className='address'><b>Address:</b>502 New Design Str, <br />Melbourne, Australia</p>
                                    </li>
                                    <li>
                                        <p><b>Email:</b>alukas@domain.com</p>
                                    </li>
                                </ul>
                            </div></Col>
                        <Col sm="6" md="4" lg="3">
                            <div className='box four'>
                                <h5><b>Follow Us</b></h5>
                                <div className='media'>
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-pinterest-p"></i>
                                    <i class="fa-brands fa-instagram"></i>

                                </div>
                            </div></Col>


                </Row>  
                    </div>
            </Container>
            <div className='license'>Alukas © 2023 by PressLayouts All Rights Reserved.</div>
            
        </div>
    )
}
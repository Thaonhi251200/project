import { Container, Row, Col } from "reactstrap";
import "./category.css"
import ring from "../../img/img111.jpeg"
import bracelet from "../../img/img172.jpeg"
import gift from "../../img/img203.jpeg"
import necklace from "../../img/img101.jpeg"
import earning from "../../img/Sterling-Silver-Dangles-Earrings-1.jpeg"

export default function Category() {
    return (
        <div>
            <Container className="category-block">
                <h1><b>Popular Categories</b></h1>
                <div className="block-main">
                    <div className="block-child a">
                        <div className="Cate">
                            <div className="category ring">
                                <div className="img">
                                    <img alt="simple" src={ring} />
                                </div>
                                <a href="/Rings"><b>RINGS</b></a> 
                            </div>
                        </div>
                    </div>
                    <div className="block-child" b>
                        <div className="Cate">
                            <div className="category ring">
                                <div className="img">
                                    <img alt="simple" src={necklace} />
                                </div>
                                <a href="/Necklaces"><b>NECKLACES</b></a> 
                            </div>
                        </div>
                    </div><div className="block-child c">
                        <div className="Cate">
                            <div className="category ring">
                                <div className="img">
                                    <img alt="simple" src={earning} />
                                </div>
                                <a href="/Earnings"><b>EARNING</b></a>
                            </div>
                        </div>
                    </div>
                    <div className="block-child d">
                        <div className="Cate">
                            <div className="category ring">
                                <div className="img">
                                    <img alt="simple" src={bracelet} />
                                </div>
                                <a href="/Bracelets"><b>BRACELETS</b></a>
                            </div>
                        </div>
                    </div>
                    <div className="block-child e">
                        <div className="Cate">
                            <div className="category ring">
                                <div className="img">
                                    <img alt="simple" src={gift} />
                                </div>
                                <a href="/GiftIdeas"><b>GIFT IDEAS</b></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
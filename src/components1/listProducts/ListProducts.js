import { useEffect, useState } from "react"
import img11 from "../../img/img11.jpeg"
import img12 from "../../img/img12.jpeg"
import img13 from "../../img/img13.jpeg"
import img21 from "../../img/img21.jpeg"
import img22 from "../../img/img22.jpeg"
import img23 from "../../img/img23.jpeg"
import img31 from "../../img/img31.jpeg"
import img32 from "../../img/img32.jpeg"
import img33 from "../../img/img33.jpeg"
import img41 from "../../img/img41.jpeg"
import img42 from "../../img/img42.jpeg"
import img43 from "../../img/img43.jpeg"
import img51 from "../../img/img51.jpeg"
import img52 from "../../img/img52.jpeg"
import img61 from "../../img/img61.jpeg"
import img62 from "../../img/img62.jpeg"
import img63 from "../../img/img63.jpeg"
import img71 from "../../img/img71.jpeg"
import img72 from "../../img/img72.jpeg"
import img73 from "../../img/img73.jpeg"
import img81 from "../../img/img81.jpeg"
import img82 from "../../img/img82.jpeg"
import img91 from "../../img/img91.jpeg"
import img92 from "../../img/img92.jpeg"
import img101 from "../../img/img101.jpeg"
import img102 from "../../img/img102.jpeg"
import img111 from "../../img/img111.jpeg"
import img112 from "../../img/img112.jpeg"
import img113 from "../../img/img113.jpeg"
import img114 from "../../img/img114.jpeg"
import img121 from "../../img/img121.jpeg"
import img122 from "../../img/img122.jpeg"
import img123 from "../../img/img123.jpeg"
import img131 from "../../img/img131.jpeg"
import img132 from "../../img/img132.jpeg"
import img133 from "../../img/img133.jpeg"
import img141 from "../../img/img141.jpeg"
import img142 from "../../img/img142.jpeg"
import img143 from "../../img/img143.jpeg"
import img151 from "../../img/img151.jpeg"
import img152 from "../../img/img152.jpeg"
import img161 from "../../img/img161.jpeg"
import img162 from "../../img/img162.jpeg"
import img163 from "../../img/img163.jpeg"
import img171 from "../../img/img171.jpeg"
import img172 from "../../img/img172.jpeg"
import img173 from "../../img/img173.jpeg"
import img181 from "../../img/img181.jpeg"
import img182 from "../../img/img182.jpeg"
import img183 from "../../img/img183.jpeg"
import img191 from "../../img/img191.jpeg"
import img192 from "../../img/img192.jpeg"
import img193 from "../../img/img193.jpeg"
import img201 from "../../img/img201.jpeg"
import img202 from "../../img/img202.jpeg"
import img203 from "../../img/img203.jpeg"
import axios from "axios"
import Product from "../product/Product"
import ProductDetail from "../../pages/productDetail/ProductDetail"
// import { List } from "reactstrap"
import { Container, Row } from "reactstrap"
export default function ListProducts() {
    const arr = [img11, img21, img31, img111, img121, img131,
        img141, img151, img161, img171, img181, img191, img201]
    const arr1 = [img12, img22, img32,  img112, img122,
        img132, img142, img152, img162,
        img172, img182, img192, img202]
    const url = "https://6525471867cfb1e59ce6fff2.mockapi.io/products"
    const [data, SetData] = useState([])
    useEffect(() => {
        axios
            .get(url)
            .then(function (response) {
                console.log(response)
                SetData(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    {data.slice(0, 4).map((item, index) => {
                        return <Product item={item} key={index} img={arr[index]} img1={arr1[index]} />
                    })}
                </Row>  
            </Container>

        </div>
    )
}
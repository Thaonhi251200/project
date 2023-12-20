import { BreadcrumbItem, Breadcrumb, Container } from "reactstrap"
import Header1 from "../../components1/header/Header1";
import Footer from "../../components1/footer/Footer";
import error from "../../img/404-page.png"
import "./Error.css"

export default function Error() {
    return (
        <div>
            <Header1/>
            <Container className="error">
                <Breadcrumb listTag="div">
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
                        404
                    </BreadcrumbItem>
                </Breadcrumb>

                <div className="text-error">
                    <img src={error} />
                    <h2><b>This page has been probably moved somewhere...</b></h2>
                    <h5><b>Please back to homepage or check our offer</b></h5>
                    <button><a href="/"><b>Back to Homepage</b></a></button>
                </div>
            </Container>

            <Footer />
        </div>
    )
}
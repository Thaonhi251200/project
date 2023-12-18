import {
    Container, Breadcrumb, BreadcrumbItem, Pagination, PaginationItem, PaginationLink,
    AccordionBody, AccordionItem, UncontrolledAccordion, AccordionHeader
} from "reactstrap"
import "./Blog.css"
import Header1 from "../../components1/header/Header1"
import Footer from "../../components1/footer/Footer"
import newa from "../../img/Christmas-Gift-Guide.jpeg"
import newb from "../../img/How-to-Style-a-Quiff.jpeg"
import newc from "../../img/Selective-Styles-Help-your-look.jpeg"
import newd from "../../img/Jewels-of-Prosperity-2023.jpeg"
import newe from "../../img/Must-Have-Skater-Girl-Items.jpeg"
import newf from "../../img/Bridial-Fair-Collections-2023.jpeg"
import newg from "../../img/Jewelry-Horoscope-Autumn.jpeg"
import recenta from "../../img/How-to-Style-a-Quiff-325x325.jpeg"
import recentb from "../../img/Christmas-Gift-Guide-325x325.jpeg"
import recentc from "../../img/Selective-Styles-Help-your-look-325x325.jpeg"

export default function Blog() {
    return (
        <div>
            <Header1 />
            <Container>
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
                        Blog
                    </BreadcrumbItem>
                </Breadcrumb>
                <h1 className="text-blog"><b>Blog</b></h1>
                <div className="blog">
                    <div className="news">
                        <div className="blog-news a">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={newa} />
                                <p>ACCESSORIES</p>
                            </div>
                            <div className="box-content one">
                                <div className="time">
                                    <p><b>ALUKAS </b><span><b>- FEBRUARY 17, 2023</b> </span></p>
                                </div>
                                <h3><b>Christmas Gift Guide</b></h3>
                                <span>Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless.</span><br />
                                <button><b>Continue Rearding</b></button>
                            </div>
                        </div>
                        <div className="blog-news b">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={newb} />
                                <p>FASHION</p>
                            </div>
                            <div className="box-content one">
                                <div className="time">
                                    <p><b>ALUKAS </b><span><b>- FEBRUARY 17, 2023</b> </span></p>
                                </div>
                                <h3><b>How to Style a Quiff</b></h3>
                                <span>Pommy ipsum the chippy one would like the chippy chav copped a bollocking cornish pasty, how's your father ey up superb complete mare every fortnight</span><br />
                                <button><b>Continue Rearding</b></button>
                            </div>
                        </div>
                        <div className="blog-news c">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={newc} />
                                <p>COLLECTION</p>
                            </div>
                            <div className="box-content one">
                                <div className="time">
                                    <p><b>ALUKAS </b><span><b>- FEBRUARY 17, 2023</b> </span></p>
                                </div>
                                <h3><b>Selective Styles Help your look</b></h3>
                                <span>Codswallop stiff upper lip put me soaps back on air one's dirty linen who brought loaf had a barney with the inlaws, god save the queen bloody shambles</span><br />
                                <button><b>Continue Rearding</b></button>
                            </div>
                        </div>
                        <div className="blog-news d">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={newd} />
                                <p>JEWELRY</p>
                            </div>
                            <div className="box-content one">
                                <div className="time">
                                    <p><b>ALUKAS </b><span><b>- FEBRUARY 17, 2023</b> </span></p>
                                </div>
                                <h3><b>Jewels of Prosperity-2023</b></h3>
                                <span>Pommy ipsum the chippy one would like the chippy chav copped a bollocking cornish pasty, how's your father ey up superb complete mare every fortnight.</span><br />
                                <button><b>Continue Rearding</b></button>
                            </div>
                        </div>
                        <div className="blog-news e">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={newe} />
                                <p>FASHION</p>
                            </div>
                            <div className="box-content one">
                                <div className="time">
                                    <p><b>ALUKAS </b><span><b>- FEBRUARY 17, 2023</b> </span></p>
                                </div>
                                <h3><b>Must-Have Skater Girl Items</b></h3>
                                <span>Codswallop stiff upper lip put me soaps back on air one's dirty linen who brought loaf had a barney with the inlaws, god save the queen bloody shambles</span><br />
                                <button><b>Continue Rearding</b></button>
                            </div>
                        </div>
                        <div className="blog-news f">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={newf} />
                                <p>ACCESSORIES</p>
                            </div>
                            <div className="box-content one">
                                <div className="time">
                                    <p><b>ALUKAS </b><span><b>- FEBRUARY 17, 2023</b> </span></p>
                                </div>
                                <h3><b>Bridial Fair Collections 2020</b></h3>
                                <span>Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless</span><br />
                                <button><b>Continue Rearding</b></button>
                            </div>
                        </div>
                        <div className="blog-news g">
                            <div className="box-img one">
                                <img
                                    alt="simple"
                                    src={newg} />
                                <p>COLLECTION</p>
                            </div>
                            <div className="box-content one">
                                <div className="time">
                                    <p><b>ALUKAS </b><span><b>- FEBRUARY 17, 2023</b> </span></p>
                                </div>
                                <h3><b>Jewelry Horoscope Autumn</b></h3>
                                <span>Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless.</span><br />
                                <button><b>Continue Rearding</b></button>
                            </div>
                        </div>
                    </div>
                    <div className="utilities">
                        <form className='search'>
                            <input type='text' placeholder='Search product' />
                            <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        <UncontrolledAccordion defaultOpen="1">
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                    <h4><b>Categories</b></h4>
                                </AccordionHeader>
                                <AccordionBody className="text-category" accordionId="1">
                                    <a href="#"><h5>Accessories</h5></a>
                                    <a href="#"><h5>Collestion</h5></a>
                                    <a href="#"><h5>Fashion</h5></a>
                                    <a href="#"><h5>Jewelry</h5></a>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                            </AccordionItem>
                        </UncontrolledAccordion>
                        <UncontrolledAccordion defaultOpen="1">
                            <AccordionItem>
                                <AccordionHeader targetId="2">
                                    <h4><b>Recent Posts</b></h4>
                                </AccordionHeader>
                                <AccordionBody accordionId="2">
                                    <div className="recent">
                                        <div className="img-recent a" >
                                            <img src={recenta} />
                                        </div>
                                        <div className="text-recent a">
                                            <p><b>How to Style a Quiff</b></p>
                                            <p>FEBRUARY 17, 2023</p>
                                        </div>
                                    </div>
                                    <div className="recent">
                                        <div className="img-recent a" >
                                            <img src={recentb} />
                                        </div>
                                        <div className="text-recent a">
                                            <p><b>Christmas Gift Guide</b></p>
                                            <p>FEBRUARY 17, 2023</p>
                                        </div>
                                    </div>
                                    <div className="recent">
                                        <div className="img-recent a" >
                                            <img src={recentc} />
                                        </div>
                                        <div className="text-recent a">
                                            <p><b>Selective Styles Help your look</b></p>
                                            <p>FEBRUARY 17, 2023</p>
                                        </div>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>
                        </UncontrolledAccordion>
                    </div>
                </div>
                <Pagination className="number-page" size="lg">
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            previous
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="number one" href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="number two" href="/Blog2">
                            2
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </Container>
            <Footer />
        </div>
    )
}
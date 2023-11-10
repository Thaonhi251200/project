import React, { useRef, useState, } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Button,
    Card,
    Collapse
} from 'reactstrap';
import './Header.css'
export default function Header1() {
    const sidebarRef = useRef()
    const rightRef = useRef()
    const handle_toggle = () => {
        sidebarRef.current.classList.toggle("active")
        rightRef.current.classList.toggle("active")
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="header">
            <Container>
                <div className="Navbar1">
                    <div className='find'>
                        <div> <i id='toggle' class="fa-solid fa-bars" onClick={handle_toggle} ></i></div>
                        {/*  toggle */}
                        <form className='search'>
                            <input type='text' placeholder='Search product' />
                            <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className="logo">
                        <a href='#'>  ALUKAS & CO</a>
                    </div>
                    <div className="icon">
                        <i id='user' class="fa-solid fa-user"></i>
                        <i id='heart' class="fa-solid fa-heart"></i>
                        <i id='cart' class="fa-solid fa-cart-shopping"></i>
                    </div>

                </div>
            </Container>
            <div className='line'>
                <Container>
                    <div className="Navbar2">
                        <div className='phone'>
                            <i class="fa-solid fa-phone"></i>
                            <div>+(123) 4567 890  </div>
                        </div>
                        <div className='menu'>
                            <Nav >
                                <NavItem className='justify-content-center'>
                                    <NavLink href="/components/"><b>Home</b></NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret className='pro'>
                                        <b>Products</b>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem><a href='#'>Rings</a> </DropdownItem>
                                        <DropdownItem><a href='#'>Necklaces</a></DropdownItem>
                                        <DropdownItem> <a href='#'>Earnings</a></DropdownItem>
                                        <DropdownItem> <a href='#'>Bracelets</a></DropdownItem>
                                        <DropdownItem><a href='#'>Gift Ideas</a></DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink href="">
                                        <b>Blog</b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">
                                        <b>About Us</b>
                                    </NavLink>
                                </NavItem>
                            </Nav>

                        </div>
                        <div className='loco'>
                            <i class="fa-solid fa-location-dot"></i>
                            <a href='#'>Find Store</a>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='submenu' >
                <div className='sidebar' ref={sidebarRef}>
                    <div className="logo2">
                        <a href='#'> <h4>ALUKAS & CO</h4></a>
                        <i class="fa-solid fa-xmark" onClick={handle_toggle}></i>
                        {/* !toggle1 -> nghich dao cua toggle */}
                    </div>
                    <div className='find2'>
                        <form className='search2'>
                            <input type='text' placeholder='Search product' />
                            <button type='submit' onClick={handle_toggle}><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className='menu2'>
                        <Nav >
                            <NavItem >
                                <NavLink href="/components/"><b>Home</b></NavLink>
                            </NavItem>
                            <React.StrictMode>
                                <div className='products' >
                                    <a href='#'><b>Product</b></a>
                                    <Button className='chevron-down' onClick={toggle} >
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </Button>


                                    <Collapse isOpen={isOpen} >
                                        <Card>
                                            <a href='#'>Rings</a>
                                            <a href='#'>Necklaces</a>
                                            <a href='#'>Earnings</a>
                                            <a href='#'>Bracelets</a>
                                            <a href='#'>Gift Ideas</a>
                                        </Card>
                                    </Collapse>
                                </div>
                                <div className='products' >
                                    <a href='#'><b>Product</b></a>
                                    <Button className='s' onClick={toggle} >
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </Button>


                                    <Collapse isOpen={isOpen} >
                                        <Card>
                                            <a href='#'>Rings</a>
                                            <a href='#'>Necklaces</a>
                                            <a href='#'>Earnings</a>
                                            <a href='#'>Bracelets</a>
                                            <a href='#'>Gift Ideas</a>
                                        </Card>
                                    </Collapse>
                                </div>
                            </React.StrictMode>
                            <NavItem>
                                <NavLink href="">
                                    <b>Blog</b>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">
                                    <b>About Us</b>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div className='media2'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-pinterest-p"></i>
                        <i class="fa-brands fa-instagram"></i>

                    </div>
                </div>
                <div className='right' onClick={handle_toggle} ref={rightRef}></div>
            </div>
            {/* <Card className='list'>
                <a href='#'>Rings</a>
                <a href='#'>Necklaces</a>
                <a href='#'>Earnings</a>
                <a href='#'>Bracelets</a>
                <a href='#'>Gift Ideas</a>
            </Card> */}


        </div>
    )
}
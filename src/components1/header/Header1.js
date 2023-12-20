import React, { useRef, useState, } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    Container,
    Button,
    Card,
    Collapse
} from 'reactstrap';
import { Link } from 'react-router-dom'

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

    const cartRef = useRef()
    const leftRef = useRef()
    const cart_handle_toggle = () => {
        cartRef.current.classList.toggle("active")
        leftRef.current.classList.toggle("active")
    }
    const [cartOpen, setCartOpen] = useState(false);
    const cart_toggle = () => setCartOpen(!cartOpen);

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
                        <Link to='/'> <b>ALUKAS & CO</b></Link>
                    </div>
                    <div className="icon">
                        <i id='user' class="fa-solid fa-user"></i>
                        <i id='heart' class="fa-solid fa-heart"></i>
                        <i id='cart' class="fa-solid fa-cart-shopping" onClick={cart_handle_toggle}></i>
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
                                    <Link to='/'><b>Home</b></Link>
                                </NavItem>
                                <UncontrolledDropdown className='group' nav inNavbar>
                                    <Link to='/Products'><b>Products</b></Link>
                                    <i class="fa-solid fa-chevron-down"></i>
                                    <div className='select'>
                                        <ul>
                                            <li><Link to='/Rings'>Rings</Link></li>
                                            <li><Link to='/Necklaces'>Necklaces</Link></li>
                                            <li><Link to='/Earnings'>Earnings</Link></li>
                                            <li><Link to='/Bracelets'>Bracelets</Link></li>
                                            <li><Link to='/GiftIdeas'>Gift Ideas</Link></li>
                                        </ul>
                                    </div>

                                </UncontrolledDropdown>

                                <NavItem>
                                    <Link to='/Blog'>
                                        <b>Blog</b>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/AboutUs'>
                                        <b>About Us</b>
                                    </Link>
                                </NavItem>
                            </Nav>

                        </div>
                        <div className='loco'>
                            <i class="fa-solid fa-location-dot"></i>
                            <a href='/Error'>Find Store</a>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='submenu' >
                <div className='sidebar' ref={sidebarRef}>
                    <div className="logo2">
                        <Link to='/'> <h3><b>ALUKAS & CO</b></h3></Link>
                        <i class="fa-solid fa-xmark" onClick={handle_toggle}></i>
                        {/* !toggle1 -> nghich dao cua toggle */}
                    </div>
                    <div className='find2'>
                        <form className='search2'>
                            <input type='text' placeholder='Search product' />
                            <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className='menu2'>
                        <Nav >
                            <NavItem>
                                <NavItem >
                                <NavLink href='/'>
                                <b>Home</b>
                                </NavLink>
                                </NavItem>
                                <React.StrictMode>
                                    <div className='products' >
                                        <a href='/Products'><b>Product</b></a>
                                        <Button className='chevron-down' onClick={toggle} >
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </Button>
                                        <Collapse isOpen={isOpen} >
                                            <Card>
                                                <a href='/Rings'>Rings</a>
                                                <a href='/Necklaces'>Necklaces</a>
                                                <a href='/Earnings'>Earnings</a>
                                                <a href='/Bracelets'>Bracelets</a>
                                                <a href='/GiftIdeas'>Gift Ideas</a>
                                            </Card>
                                        </Collapse>
                                    </div>
                                </React.StrictMode>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/Blog'>
                                    <b>Blog</b>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/AboutUs'>
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
            <div className='cart'>
                <div className='left' onClick={cart_handle_toggle} ref={leftRef}>
                </div>
                <div className='cartbar' ref={cartRef}>
                    <div className="yourCart">
                        <h3><b>Your Cart</b></h3>
                        <button onClick={cart_handle_toggle}><b>Close</b></button>
                        {/* !toggle1 -> nghich dao cua toggle */}
                    </div>
                    <div className='cart-products'>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>Shopping cart is empty!</p>
                        <button><b>Continue Shopping</b></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
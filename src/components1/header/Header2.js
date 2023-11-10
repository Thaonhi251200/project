// import Header1 from "./Header1"; 
import { useRef, useState } from 'react'
import './Header2.css'
import {
    Nav,
    NavItem,
    UncontrolledDropdown,
    NavLink,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from 'reactstrap'
export default function Header2() {
    const sidebarRef = useRef
    const rightRef = useRef
    const handle_toggle = () => {
        sidebarRef.current.classList.toggle("active")
        rightRef.current.classList.toggle("active")
    }
    //    const [toggle1,setToggle]= useState(false)
    return (
        <div className='header2'>
            <div className='sidebar'>
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
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Products
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                {/* <DropdownItem divider /> */}
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="">
                                Blog
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                About Us
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
            <div className='right' onClick={handle_toggle}></div>
        </div>
    )
}
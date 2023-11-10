// export default function Header(){
//     return(
//         <div></div>
//     )
// }
import React, { useState } from 'react';
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        NavbarText,
        Container,
    } from 'reactstrap';
import './Header.css'

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Container>
            <Navbar expand="sm" >
                {/* expand= "sm" -> tai kich thuoc sm se thu ve toggel */}
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav  navbar>
                    <NavItem className='justify-content-start'>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarText>Simple Text</NavbarText>
            </Collapse>
        </Navbar>
        </Container>
    </div >
  );
}

export default Header;

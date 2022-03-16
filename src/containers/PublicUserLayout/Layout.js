import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';

function App() {

    // Collpase isOpen State
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div style={{
            display: 'block', width: 'auto', padding: 30
        }}>
            <h5>ReactJS Reactstrap Navbar Component</h5>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Brand</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
                        <NavItem>

                            <NavLink href="/main">Home</NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Signup</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default App;

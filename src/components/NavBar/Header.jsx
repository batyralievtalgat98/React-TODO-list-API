import React from 'react';
import { Container, Navbar, Nav, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to='/'>
                        <Nav.Item >Home</Nav.Item>
                    </Link>
                    <Link to='/add'>
                        <Nav.Item >Add ToDo</Nav.Item>
                    </Link>

                    <Link to='/todos'>
                        <Nav.Item >ToDo List</Nav.Item>
                    </Link>
                </Nav>

            </Container>
        </Navbar>
    );
};

export default Header;
// Navbar that can hide and show on button click
// Language: ECMAScript 6
// Path: src/NavBarComponents/navBarCore.js\
import {Link} from "react-router-dom";
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import React, {Fragment, useEffect, useState} from "react";


export function NavigationBar(){

    const navItemsNoLogin = () =>{
        return(
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item>
                    <Nav.Link className=""><Link style={{ textDecoration: 'none', color: 'black', fontweight: "bold", hover:{ color: 'white' }}} to="/">Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className=""><Link style={{ textDecoration: 'none', color: 'black', fontweight: "bold", hover:{ color: 'white' }}} to="/login">Login</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        )
    };
    const navItemsLoggedIn = () => {
        return(
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item>
                    <Nav.Link className=""><Link style={{ textDecoration: 'none', color: 'black', fontweight: "bold", hover:{ color: 'white' }}} to="/home">Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className=""><Link style={{ textDecoration: 'none', color: 'black', fontweight: "bold", hover:{ color: 'white' }}} to="/gallery">Gallery</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className=""><Link style={{ textDecoration: 'none', color: 'black', fontweight: "bold", hover:{ color: 'white' }}} onClick={()=>{
                        setNavItems(navItemsNoLogin);
                    }} to="/login">Log Out</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        )
    };
    const [navItems, setNavItems] = useState(
        navItemsNoLogin()
    );
    useEffect(() => {
    }, [navItemsNoLogin])

    /*window.addEventListener("storage", (e) => {
        setNavItems(navItemsLoggedIn);
        console.log(e.key);
    })*/
    //The returned JSX that is rendered by the DOM in App.js
    return (
        <Navbar bg="light" expand={false} style={{position: "sticky"}}>
            <Container fluid>
                <Navbar.Brand><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Math 4 You</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={()=>{
                    if(localStorage.getItem("LOGGED") === "true") {
                        setNavItems(navItemsLoggedIn);
                    }else{
                        setNavItems(navItemsNoLogin);
                    }
                }} />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Math 4 You</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {navItems}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    );
}


import React from 'react'
import { Nav,Navbar,NavDropdown,Container,Form,Button } from 'react-bootstrap'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

export default function Navigationbar() {
  return (<Fragment>
    <div>
        <Navbar expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">MAG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <Outlet/>
    </Fragment>
  )
}

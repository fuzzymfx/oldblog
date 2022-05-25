import React from 'react'
import { Container, Nav, NavDropdown, FormControl, Form, Button, Navbar } from 'react-bootstrap'

export default function Header() {
  return (<>
    <Navbar className=" navbar navbar-expand-lg bg-dark navbar-dark py-3" bg="dark" expand="lg">
      <Container >
        <Navbar.Brand href="#">ANUBHAV PATNAIK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/codebotx">Github</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/anubhabpatnaik0530/">LinkedIn</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              HitMeUp!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>)
}

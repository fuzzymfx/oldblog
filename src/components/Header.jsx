import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Avatar from '@mui/material/Avatar';
import a1 from '../assets/img/a1.jpeg'

export default function Header() {
  return (<>
    <Navbar className=" navbar navbar-expand-lg bg-dark navbar-dark py-3" bg="dark" expand="lg">
      <Container >
        <Nav >
          <Avatar className="mx-2 d-none d-md-block" alt="Anubhab Patnaik" src={a1} />
          <Navbar.Brand href="#">ANUBHAV PATNAIK</Navbar.Brand>
        </Nav>
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

import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';


function Header() {
  return (
    <>
    <div className='d-none d-sm-block'>
      <Navbar variant='dark'>
        <Container>
          <Navbar.Brand href="#home" className='fw-bold fs-2'>eakelvin</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand className=''>
              <span className='px-2'>
                <a target='blank' href="https://github.com/eakelvin">
                  <AiFillGithub />
                </a>
              </span>
              <span className='px-2'>
                <a target='blank' href="https://www.linkedin.com/in/kelvin-akaba-2883a81b3/">
                  <AiFillLinkedin />
                </a>
              </span>
              {/* <span className='px-2'>
                <a href="" >
                  <FaWhatsapp />
                </a>
              </span> */}
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    <div className='d-block d-sm-none mt-2 p-4'>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className='fw-bold text-size'>eakelvin</Nav.Link>
        </Nav.Item>
      </Nav>
      <h2 className="text-center mt-1">
        <span className='px-1'>
            <a target='blank' href="https://github.com/eakelvin">
                  <AiFillGithub />
            </a>
          </span>
          <span className='px-1'>
            <a target='blank' href="https://www.linkedin.com/in/kelvin-akaba-2883a81b3/">
                  <AiFillLinkedin />
            </a>
          </span>
      </h2>
    </div>
</>
  )
}

export default Header

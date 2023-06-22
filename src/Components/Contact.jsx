import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from './Header';

function Contact() {
  return (
    <div style={{backgroundColor: "#242424"}}>
      <div className='d-none d-lg-block d-xl-block d-xxl-block'>
        <Container className='mt-5 border-bottom pb-5 p-5'>
          <Row md={2}>
            <Col>
              <h1>Contact</h1>
              <p className='pt-3'>I would love to hear about your project and how I <br />
                could help. Please fill in the form, and I'll get back <br />
                to you as soon as possible.
              </p>
              <div className='mt-5'>
                  <img className='rel' src="./Group 26.png" alt="" />
              </div>
            </Col>

            <Col>
            <Form>
              <Form.Group className="mb-3 pt-3">
                <Form.Label>Name</Form.Label>
                <Form.Control style={{backgroundColor: "#242424"}} className='border-0 border-bottom text-light' type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control style={{backgroundColor: "#242424"}} className='border-0 border-bottom text-light' type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} style={{backgroundColor: "#242424"}} className='border-0 border-bottom text-light' />
              </Form.Group>
              <div className='mt-5 d-flex justify-content-end'>
                  <Button className='border-0 border-bottom border-success border-5' variant="dark">SEND MESSAGE</Button>
              </div>
            </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='d-none d-md-block d-sm-block d-lg-none'>
        <Container className='mt-5 border-bottom pb-5' style={{backgroundColor: "#242424"}}>
          <Row>
            <div className='text-center'>
              <h1>Contact</h1>
              <p>I would love to hear about your project and how I <br />
                could help. Please fill in the form, and I'll get back <br />
                to you as soon as possible.
              </p>
            </div>
            
            
            <Form>
              <div className='d-flex justify-content-center'>
              <Col sm={7}>
              <Form.Group className="mb-3 mt-5">
                <Form.Label>Name</Form.Label>
                <Form.Control style={{backgroundColor: "#242424"}} className='border-0 border-bottom text-light' type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control style={{backgroundColor: "#242424"}} className='border-0 border-bottom text-light' type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} style={{backgroundColor: "#242424"}} className='border-0 border-bottom text-light' />
              </Form.Group>
              </Col>
              </div>
              <div className='d-flex justify-content-end me-5 pe-5 pt-1'>
                  <Button className='me-5 border-0 border-bottom border-success border-5' variant="dark">SEND MESSAGE</Button>
              </div>
            </Form>

              <div className='position-relative mb-5'>
                  <img className='element-2b' src="./Group 26.png" alt="" />
              </div>
            
          </Row>
        </Container>
      </div>

      <div className='d-block d-sm-none'>
        <Container className='mt-5 border-bottom pb-5 p-4' style={{backgroundColor: "#242424"}}>
          <Row>
            <div className='text-center text-nowrap'>
              <h2>Contact</h2>
              <p>I would love to hear about your project and <br /> 
                how I could help. Please fill in the form, and <br /> I'll get back 
                to you as soon as possible.
              </p>
            </div>
            
            <Form>
              <Form.Group className="mt-5 mb-5">
                <Form.Label>Name</Form.Label>
                <Form.Control style={{backgroundColor: "#242424"}} className='border-0 border-bottom text-light' type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control style={{backgroundColor: "#242424"}} className='border-0 border-bottom text-light' type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} style={{backgroundColor: "#242424"}} className='border-0 border-bottom text-light' />
              </Form.Group>
              
              <div className='d-flex justify-content-end'>
                  <Button className='border-0 border-bottom border-success border-5' variant="dark">SEND MESSAGE</Button>
              </div>
            </Form>
            <div className='position-relative mb-5'>
              <img className='element-two' src="./Group 26.png" alt="" />
            </div>
            
            
          </Row>
        </Container>
      </div>
      
    <Header />
    </div>
  )
}

export default Contact

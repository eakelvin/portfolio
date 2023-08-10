import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Projects(props) {
  return (
    <>
      <Container className='mt-5'>
        <Card className='border border-0'>
            <Card.Img variant="top" src={props.logo} />
            <Card.Body className='text-light' style={{backgroundColor: "#151515"}}>
              <Card.Title className='fw-bold'>{props.title}</Card.Title>
              <Card.Text className='pt-2'>{props.skill}</Card.Text>
              <div className='d-flex'>
                <div className=''>
                    <Button 
                      onClick={() => window.open(props.website)} 
                      style={{backgroundColor: "#151515"}} 
                      className='border border-0 border-bottom border-success border-5' variant="dark">
                      VIEW PROJECT
                    </Button>
                </div>
                <div className='mx-auto'>
                    <Button
                      onClick={() => window.open(props.github)} 
                      style={{backgroundColor: "#151515"}} className='border-0 border-bottom border-success border-5' variant="dark">
                      VIEW CODE
                      </Button>
                </div>
              </div>
            </Card.Body>
        </Card>
      </Container>
      
    </>
  )
}

export default Projects
        
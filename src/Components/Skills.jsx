import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Skills() {
  return (
    <>
      <div className='d-none d-lg-block d-xl-block d-xxl-block'>
        <Container>
          <Row className=''>
            <Col>
              <h2>HTML</h2>
              <p>2 Years Experience</p>
            </Col>
            <Col>
              <h2>CSS</h2>
              <p>2 Years Experience</p>
            </Col>
            <Col>
              <h2>JAVASCRIPT</h2>
              <p>2 Years Experience</p>
            </Col>
          </Row>

          <Row className='mt-5'>
            <Col>
              <h2>Bootstrap</h2>
              <p>2 Years Experience</p>
            </Col>
            <Col>
              <h2>Tailwind</h2>
              <p>2 Years Experience</p>
            </Col>
            <Col>
              <h2>React JS</h2>
              <p>2 Years Experience</p>
            <Col className='mb-5 pb-5'>
              <div className='relative'>
                <img className='position-absolute end-0' src="./g26.png" alt="" />
              </div>
            </Col>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='d-none d-md-block d-sm-block d-lg-none overflow-hidden'>
        <Container className='mb-5 pb-5'>
          <Row className=''>
            <Col>
              <h2>HTML</h2>
              <p>2 Years Experience</p>
            </Col>
            <Col>
              <h2>CSS</h2>
              <p>2 Years Experience</p>
            </Col>
          </Row>
          
          <Row className='pt-3'>
            <Col>
              <h2>Javascript</h2>
              <p>2 Years Experience</p>
            </Col>
            <Col>
              <h2>React JS</h2>
              <p>2 Years Experience</p>
            </Col>
          </Row>
          

          <Row className='pt-3'>
            <Col>
              <h2>Bootstrap</h2>
              <p>2 Years Experience</p>
            </Col>
            <Col className='mx-5'>
              <h2>Tailwind</h2>
              <p>2 Years Experience</p>
            </Col>
          </Row>

          <Col className=''>
              <div className='position-relative'>
                <img className='oval-one' src="./g26.png" alt="" />
              </div>
          </Col>
            
        </Container>
      </div>

      <div className='d-block d-sm-none overflow-hidden'>
        <Container className='border-bottom mb-5'>
          <Row className='text-center'>
              <span className='pb-3'>
                <h2>HTML/CSS</h2>
                <p>2 Years Experience</p>
              </span>
            
              <span className='pb-3'>
                <h2>JAVASCRIPT</h2>
                <p>2 Years Experience</p>
              </span>

              <span className='pb-3'>
                <h2>BOOTSTRAP</h2>
                <p>2 Years Experience</p>
              </span>
              
              <span className='pb-3'>
                <h2>REACT</h2>
                <p>2 Years Experience</p>
              </span>

              <span className='pb-3'>
              <h2>TAILWIND</h2>
              <p>2 Years Experience</p>
              </span>
              
              <span className='pb-3'>
                <h2>REDUX</h2>
                <p>2 Years Experience</p>
              </span>

              <span className='pb-3'>
                <h2>GIT/GITHUB</h2>
                <p>2 Years Experience</p>
              </span>

              <span className='pb-3'>
                <h2>FIREBASE</h2>
                <p>2 Years Experience</p>
              </span>

              <span className='pb-3'>
                <h2>WORDPRESS</h2>
                <p>1 Year Experience</p>
              </span>
              
              <div className='position-relative mt-5 pt-5'>
                <img className='oval' src="./g26.png" alt="" />
              </div>
          
          </Row>
        </Container>
      </div>
      
    </>
  )
}

export default Skills

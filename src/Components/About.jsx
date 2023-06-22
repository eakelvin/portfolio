import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <>
    <div className='d-none d-lg-block d-xl-block d-xxl-block'>
      <Container className='mb-5 pb-5 border-bottom'>
        <Row>
            <div className='col-xxl-8 col-xl-8 col-lg-7 position-relative'>
                <div className='mt-5'>
                  <img className='z-1 position-absolute end-50 translate-middle mt-5' src="./Group 26.png" alt="" />
                </div>
              
              <div className='mt-5 text-light z-2 position-absolute top-40'>
                <h1 className='text-nowrap'>Nice to meet you!
                  <br />
                  I'm <span className='border-bottom border-success border-5'>Kelvin Akaba</span>.
                </h1>
                <p className='lh-base mt-5'>Based in Ghana, I'm a front-end developer <br />
                  passionate about building accessible web apps <br />
                  that users love.
                </p>
                <div className='mt-5'>
                  <Button style={{backgroundColor: "#151515"}} className='border-0 border-bottom border-success border-5' variant="dark">CONTACT ME</Button>
                </div>
              </div>
            </div>

            <div className='col-xxl-4 col-xl-4 col-lg-5'>
              {/* Work on the oval for desktop view */}
              <img className='mt-5 position-absolute top-50 start-70 translate-middle-x' src="./Oval.svg" alt="" />
              <div className=''>
                <img className='size' src='./meme.jpg' />
              </div>
            </div>
          </Row>
      </Container>
    </div>

    <div className='d-none d-md-block d-sm-block d-lg-none'>
      <Container className='mb-5 pb-5 border-bottom'>
        <Row>
            <div className='col-md-8 col-sm-6'>
                <div className='mt-5'>
                  <img className='element-three' src="./Group 26.png" alt="" />
                </div>
              
              <div className='element-3b'>
                <h2>Nice to <br /> meet you! I'm <br /> 
                  <span className='border-bottom border-success border-5'>Kelvin Akaba</span>.
                </h2>
                <p className='lh-base mt-4'>Based in Ghana, I'm a front-end developer <br />
                  passionate about building accessible web apps <br />
                  that users love.
                </p>
                <div className='mt-4'>
                  <Button style={{backgroundColor: "#151515"}} className='border-0 border-bottom border-success border-5' variant="dark">CONTACT ME</Button>
                </div>
              </div>
            </div>

            <div className='col-md-4 col-sm-6'>
              <img className='element-3c' src="./Oval.svg" alt="" />
              <div>
                <img className='size-sm mt-5' src='./meme.jpg' />
              </div>
            </div>
          </Row>
      </Container>
    </div>

    <div className='d-block d-sm-none mb-5 pb-5 border-bottom d-flex align-items-start grid-cols-3'>
      <Container>
        
          <img className='z-1 position-absolute end-50' src="./Group 26.png" alt="" />
          <img className='z-5 position-absolute top-50 start-50 translate-middle size-sm mt-5' src='./eak.jpg' />
          <img className='element' src="./Oval.png" alt="" />

          <div className='space text-center text-nowrap'>
          <span className='font'>Nice to meet you! <br /> 
          <span className='border-bottom border-success border-5'>I'm Kelvin Akaba</span>.
          </span>
          <p className='lh-base mt-4'>Based in Ghana, I'm a front-end developer <br />
            passionate about building accessible web <br />
             apps that users love.
          </p>
          <div className='mt-4 mb-4'>
            <Button style={{backgroundColor: "#151515"}} className='border-0 border-bottom border-success border-5' variant="dark">CONTACT ME</Button>
          </div>
          </div>
         
      </Container>
      
    </div>

    </>
  )
}

export default About

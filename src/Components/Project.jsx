import React from 'react'
import data from '../data.json'
import Projects from './Projects'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Project() {
    const projects = data.map((item) => {
        return <Projects
        key={item.id}
        {...item}
        />
    })

  return (
    <Container>
        <div className='d-flex pt-4'>
            <h1 className='me-auto d-none d-md-block d-sm-block'>Projects</h1>
            <h2 className='me-auto mt-5 d-block d-sm-none'>Projects</h2>
            <div className='mt-5 pt-3 d-block d-sm-none'>
                <Button onClick={() => window.location.href = '#contact'} className='border-0 border-bottom border-success border-5' variant="dark">CONTACT ME</Button>
            </div>
            <div className='mt-5 d-none d-md-block d-sm-block'>
                <Button onClick={() => window.location.href = '#contact'} className='border-0 border-bottom border-success border-5' variant="dark">CONTACT ME</Button>
            </div>
        </div>

        <div  className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 p-2'>
        {projects}
        </div>
    </Container>
  )
}

export default Project

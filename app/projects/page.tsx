import Footer from '@/components/footer'
import { Navigation } from '@/components/nav'
import { Project } from '@/components/project'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navigation />
            <div className='my-20'>
                <Project />
            </div>
            <Footer />
        </div>
    )
}

export default page
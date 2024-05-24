import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'

const Fashion = () => {
    return (

        <section className='feature py-10'>
            <div className="container">
                <SectionHeader title="Fashion" hasLink={true} link="/fashion"/>
            <div className='grid mt-10 gap-10 md:grid md:grid-cols-3 md:gap-10'>
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
    
        </div>
        </div>
        </section>
      )
    }

export default Fashion
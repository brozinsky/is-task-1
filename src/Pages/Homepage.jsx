import React from 'react'
import Sections from '../components/Sections/Sections'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './Homepage.scss'

const Homepage = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Sections />
                <Footer />
            </div>
        </>
    )
}

export default Homepage

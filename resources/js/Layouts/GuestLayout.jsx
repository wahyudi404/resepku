import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'

const GuestLayout = (props) => {
    const { children, auth } = props
    return (
        <>
            <Navbar auth={auth} />
            <div className="container my-5">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default GuestLayout

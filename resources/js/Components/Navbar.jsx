import { Link, useForm } from '@inertiajs/react'
import React from 'react'

const Navbar = ({ auth }) => {
    const { post } = useForm({})

    const onLogout = (e) => {
        e.preventDefault()

        if (confirm('Are you sure want to logout?')) {
            post(route('logout'));
        }
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#547794' }} data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" href="/">Resepku</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href={route('recipe.create')} className="nav-link">Tulis resepmu</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {auth.user.name}
                            </a>
                            <ul className="dropdown-menu">
                                {/* <li><hr className="dropdown-divider"/></li> */}
                                <li><a className="dropdown-item" href="#" onClick={(e) => onLogout(e)}>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

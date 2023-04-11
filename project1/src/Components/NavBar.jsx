import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('item'));
        if (item) {
            setItems(item);
        }
        // console.log(items.usertype)
    }, []);
    return (
        <>

            <nav className="navbar sticky-top navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className='text-danger'>SEA</span><s>RCH</s></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addcustomer" className="nav-link" href="#">Add+</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/createuser" className="nav-link" href="#">Create User</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <h5 className='text-light px-4'>{items.name}</h5>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link to="/" className="btn btn-danger me-md-2" type="button">LogOut</Link>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default NavBar
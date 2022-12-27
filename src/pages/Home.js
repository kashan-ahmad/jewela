import React from 'react'
import design from '../assests/images/design-1.png'
import designn from '../assests/images/slider-img.png'
import logo from '../assests/images/logo.png'

function Home() {
    return (

        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand fs-3 fw-500" href="#"><img className='img-fluid' src={logo} alt="" /> <b>Collection</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active pe-5 fs-5" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-5 fs-5" href="#">About-Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-5 fs-5" href="#">Contact-Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-5 fs-5" href="#">Jwellery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-5 fs-5" href="#">login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="container-fluid">
                <div className="row ms-5">
                    <div className="col-lg-7 col-md-7 col-sm-7 align-items-center m-auto">
                        <div>
                            <h1 className='heading'>New Collection</h1>
                            <h1 className='heading1'>
                                Jewellery
                            </h1>
                            <p className='w-75'>
                                Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                                aptent taciti sociosqu ad litora torquent per conubia nostra
                            </p>
                            <div className='mt-2'>
                                <button className='px-4 py-2 btn'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <div>
                            <img className='img-fluid' src={designn} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className='col-lg-12 col-md-12 col-sm-12'>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home

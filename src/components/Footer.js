import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faLinkedin, faSquareFacebook,faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="bg-dark border-top border-secondary py-4 text-light">
            <div class="container py-4">
                <div class="row">
                    <div class="col mb-3 text-center">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0">Home</Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0">Features</Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0">Pricing</Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0">FAQs</Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0">About</Link>
                            </li>
                        </ul>
                    </div>

                    <div class="col mb-3 text-center">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0">Home</Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0">Features</Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0">Pricing</Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0">FAQs</Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0">About</Link>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-5 offset-md-1 mb-3 text-center">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div class="d-flex flex-column flex-sm-row gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-3 border-top text-light">
                    <Link to="/" class="fs-3 fw-bold text-light text-decoration-none">ModuLearn</Link>
                    <p class="my-2">© 2023 Company, Inc. All rights reserved. Rahul verma</p>
                    <ul class="list-unstyled d-flex">
                        <li>
                            <Link to="/Profile" class="fs-3 mx-2 fw-bold text-light hover-item">
                            <FontAwesomeIcon icon={faSquareFacebook} className='hover-item' />
                            </Link>
                        </li>
                        <li>
                            <Link to="/Profile" class="fs-3 mx-2 fw-bold text-light hover-item">
                            <FontAwesomeIcon icon={faSquareInstagram}  className='hover-item'/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Profile" class="fs-3 mx-2 fw-bold text-light hover-item">
                            <FontAwesomeIcon icon={faSquareTwitter}  className='hover-item'/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Profile" class="fs-3 mx-2 fw-bold text-light hover-item">
                            <FontAwesomeIcon icon={faLinkedin}  className='hover-item'/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer

import img from "../assets/hacker.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap, faBell, faHeart, faPenToSquare, faCircleInfo, faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container-fluid px-5 py-2 d-flex align-items-center">
                <Link class="navbar-brand fs-3 fw-bold hover-item" to="/" aria-current="page">ModuLearn </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse text-center" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-lg-0 navbar-nav-scroll">
                        <li class="nav-item">
                            <Link class="nav-link fs-6 fw-bold active hover-item" to="/" aria-current="page">Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link fs-6 fw-bold active hover-item" to="/Courses">Courses </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <button class="btn btn-dark fs-6 mt-1 fw-bold dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                            <li><Link className="dropdown-item" to="/Topics">Development </Link></li>
                                <li><Link className="dropdown-item" to="/Topics">Design </Link></li>
                                <li><Link className="dropdown-item" to="/Topics">Marketing </Link></li>
                                <li> <Link className="dropdown-item" to="/Topics">Music </Link></li>
                                <li> <Link className="dropdown-item" to="/Topics">Lifestyle </Link></li>
                                <li> <Link className="dropdown-item" to="/Topics">IT &amp; software </Link></li>
                                <li> <Link className="dropdown-item" to="/Topics">Personal development </Link></li>
                                <li> <Link className="dropdown-item" to="/Topics">Health &amp; fitness </Link></li>
                                <li> <Link className="dropdown-item" to="/Topics">Teaching </Link></li>
                                <li> <Link className="dropdown-item" to="/Topics">Social science </Link></li>
                                <li> <Link className="dropdown-item" to="/Topics">Math &amp; logic </Link></li>
                                <li> <hr className="dropdown-divider" /></li>
                                <li> <Link className="dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0" to="/Topics">View ll categories </Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className='d-flex text-center align-items-center'>
                        <form className="position-relative">
                            <input className="form-control pe-5 rounded-pill fs-6 me-2 border border-2 border-light" type="search" placeholder="Search" aria-label="Search" />
                            <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='fs-6 p-2' />
                            </button>
                        </form>
                        <Link class="nav-link fs-3 fw-bold text-danger ms-4 hover-item" to="/Wishlist">
                            <FontAwesomeIcon icon={faHeart} className='fs-3' />
                        </Link>
                        <Link class="nav-link fs-3 fw-bold text-warning ms-4 hover-item" to="/Notification">
                            <FontAwesomeIcon icon={faBell} className='fs-3' />
                        </Link>
                        <div className="dropdown ms-lg-0">
                            <div className="avatar avatar-sm p-0" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="avatar-img rounded-circle ms-4" src={img} alt="avatar" width={50} />
                            </div>
                            <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                                <li className="px-3 mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar me-3">

                                            <Link to="/Profile"><img className="avatar-img rounded-circle shadow" src={img} width={40} alt="avatar" /> </Link>
                                        </div>
                                        <div>
                                            <Link className="h6" to="/Profile">Rahul verma </Link>
                                            <p className="small m-0">example@gmail.com</p>
                                        </div>
                                    </div>
                                </li>
                                <li> <hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/Profile"><FontAwesomeIcon icon={faGraduationCap} /> My Learnings </Link></li>
                                <li><Link className="dropdown-item" to="/Profile"><FontAwesomeIcon icon={faPenToSquare} /> Edit Profile </Link></li>
                                <li><Link className="dropdown-item" to="/Profile"><FontAwesomeIcon icon={faGear} /> Account Settings </Link></li>
                                <li><Link className="dropdown-item" to="/Profile"><FontAwesomeIcon icon={faCircleInfo} /> Help </Link></li>
                                <li><Link className="dropdown-item bg-danger-soft-hover" to="/Profile"><FontAwesomeIcon icon={faRightFromBracket} /> Sign Out </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header

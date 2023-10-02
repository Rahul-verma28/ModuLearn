import courseImg from "../assets/course6.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faClockRotateLeft, faIndianRupeeSign , faCirclePlay} from '@fortawesome/free-solid-svg-icons'

const CoursePurches = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 my-5">
                    <h2><b>Course content</b></h2>
                    <p>10 sections, 84 lectures & 55h 40m total length</p>

                    <div className="accordion" id="courseAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="section1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#section1Content" aria-expanded="true" aria-controls="section1Content">
                                    Section #1
                                </button>
                            </h2>
                            <div id="section1Content" className="accordion-collapse collapse show" aria-labelledby="section1">
                                <div className="accordion-body">
                                    <a href="/" className="nav-link text-primary lh-lg d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faCirclePlay} className="me-2" width="16" height="16" /> Topic 1
                                        </div>
                                        <span className="ms-5 text-secondary">02:00</span>
                                    </a>
                                    <a href="/" className="nav-link text-primary lh-lg d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faCirclePlay} className="me-2" width="16" height="16" /> Topic 2
                                        </div>
                                        <span className="ms-5 text-secondary">02:00</span>
                                    </a>
                                    <a href="/" className="nav-link text-primary lh-lg d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faCirclePlay} className="me-2" width="16" height="16" /> Topic 3
                                        </div>
                                        <span className="ms-5 text-secondary">02:00</span>
                                    </a>
                                    <a href="/" className="nav-link text-primary lh-lg d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faCirclePlay} className="me-2" width="16" height="16" /> Topic 4
                                        </div>
                                        <span className="ms-5 text-secondary">02:00</span>
                                    </a>
                                    <a href="/" className="nav-link text-primary lh-lg d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faCirclePlay} className="me-2" width="16" height="16" /> Topic 5
                                        </div>
                                        <span className="ms-5 text-secondary">02:00</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="section2">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#section2Content" aria-expanded="true" aria-controls="section2Content">
                                    Section #2
                                </button>
                            </h2>
                            <div id="section2Content" className="accordion-collapse collapse" aria-labelledby="section2">
                                <div className="accordion-body">
                                    <a href="/" className="nav-link text-primary lh-lg d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faCirclePlay} className="me-2" width="16" height="16" /> Topic 1
                                        </div>
                                        <span className="ms-5 text-secondary">02:00</span>
                                    </a>
                                    <a href="/" className="nav-link text-primary lh-lg d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faCirclePlay} className="me-2" width="16" height="16" /> Topic 2
                                        </div>
                                        <span className="ms-5 text-secondary">02:00</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="section3">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#section3Content" aria-expanded="true" aria-controls="section3Content">
                                    Section #3
                                </button>
                            </h2>
                            <div id="section3Content" className="accordion-collapse collapse" aria-labelledby="section3">
                                <div className="accordion-body">
                                    <a href="/" className="nav-link text-primary lh-lg d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faCirclePlay} className="me-2" width="16" height="16" /> Topic 1
                                        </div>
                                        <span className="ms-5 text-secondary">02:00</span>
                                    </a>
                                    <a href="/" className="nav-link text-primary lh-lg d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faCirclePlay} className="me-2" width="16" height="16" /> Topic 2
                                        </div>
                                        <span className="ms-5 text-secondary">02:00</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-4 text-center">
                    <div class="card text-center my-3 w-100">
                        <img src={courseImg} class="card-img-top" alt="Course" />

                        <div class="card-body">
                            <h5 class="card-title fw-bold"><FontAwesomeIcon icon={faIndianRupeeSign} /> 499.00 <span class="text-decoration-line-through text-secondary fs-6"><FontAwesomeIcon icon={faIndianRupeeSign} /> 3199</span> 86% off</h5>
                            <p class="card-text text-danger fw-bold"><FontAwesomeIcon icon={faClockRotateLeft} /> 3 hours <span>left at this price!</span></p>
                            <div class="d-flex align-items-center gap-2">
                                <a href="/" class="btn btn-outline-dark w-100 fw-bold fs-4">Buy this course</a>
                                <a href="/" class="btn btn-outline-danger"><FontAwesomeIcon icon={faHeart} className='fs-4 p-1' /></a>
                            </div>
                            <hr />
                            <p class="text-center my-3">Full Lifetime Access</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CoursePurches

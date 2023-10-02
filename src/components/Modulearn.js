import CourseRow from './CourseRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faUserTie, faUserGraduate, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import frontImg from '../assets/frontImg.png';


const Modulearn = () => {
    return (
        <>
            <div className="">
                <div className="row w-100 p-5">
                    <div className="col-xs-12 col-lg-8">
                        {/* <img src={profile_img} className='w-100 rounded-5' /> */}
                        <div className="container m-5 py-5">
                            <h1 className="fw-bold">ModuLearn</h1>
                            <h2>A perfect learning platform</h2>
                            <p className="text-muted fw-light lh-lg">There are a lot of things to gain knowledge</p>
                            <h4 className="fw-bold">Let's Start and explore the world</h4>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <img className="w-100 rounded-5" src={frontImg} alt="img" />
                    </div>
                </div>
            </div>

            {/* Counter section */}
            <div className='container p-5'>
                <div className="row g-5">
                    {/* Counter item 1 */}
                    <div className="col-sm-6 col-lg-3">
                        <div className="d-flex bg-light justify-content-center align-items-center p-4 rounded-3 hover-item">
                            <span className="display-6 lh-1 text-warning mb-0">
                                <FontAwesomeIcon icon={faTv} />
                            </span>
                            <div className="ms-4 h6 fw-normal mb-0">
                                <div className="d-flex">
                                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="10" data-purecounter-delay="200" data-purecounter-duration="0">10</h5>
                                    <span className="mb-0 h5 fw-bold">K+</span>
                                </div>
                                <p className="mb-0 fw-bold text-nowrap">Online Courses</p>
                            </div>
                        </div>
                    </div>
                    {/* Counter item 2 */}
                    <div className="col-sm-6 col-lg-3">
                        <div className="d-flex bg-light justify-content-center align-items-center p-4 rounded-3 hover-item">
                            <span className="display-6 lh-1 text-warning mb-0">
                                <FontAwesomeIcon icon={faUserTie} />
                            </span>
                            <div className="ms-4 h6 fw-normal mb-0">
                                <div className="d-flex">
                                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="10" data-purecounter-delay="200" data-purecounter-duration="0">200</h5>
                                    <span className="mb-0 h5 fw-bold">K+</span>
                                </div>
                                <p className="mb-0 fw-bold text-nowrap">Expert Tutors</p>
                            </div>
                        </div>
                    </div>
                    {/* Counter item 3 */}
                    <div className="col-sm-6 col-lg-3">
                        <div className="d-flex bg-light justify-content-center align-items-center p-4 rounded-3 hover-item">
                            <span className="display-6 lh-1 text-warning mb-0">
                                <FontAwesomeIcon icon={faUserGraduate} />
                            </span>
                            <div className="ms-4 h6 fw-normal mb-0">
                                <div className="d-flex">
                                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="10" data-purecounter-delay="200" data-purecounter-duration="0">60</h5>
                                    <span className="mb-0 h5 fw-bold">K+</span>
                                </div>
                                <p className="mb-0 fw-bold text-nowrap">Online Students</p>
                            </div>
                        </div>
                    </div>
                    {/* Counter item 4 */}
                    <div className="col-sm-6 col-lg-3">
                        <div className="d-flex bg-light justify-content-center align-items-center p-4 rounded-3 hover-item">
                            <span className="display-6 lh-1 text-warning mb-0">
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>
                            <div className="ms-4 h6 fw-normal mb-0">
                                <div className="d-flex">
                                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="10" data-purecounter-delay="200" data-purecounter-duration="0">10</h5>
                                    <span className="mb-0 h5 fw-bold">K+</span>
                                </div>
                                <p className="mb-0 fw-bold text-nowrap">Certified Courses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CourseRow />

            {/* become an instructor */}

            <div className="bg-info p-4 p-sm-5 rounded-4 mx-5 my-5">
                <div className="row position-relative">

                    <div className="col-11 mx-auto position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h3 className="text-white">Become an Instructor!</h3>
                                <p className="text-white mb-3 mb-lg-0">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</p>
                            </div>
                            <div className="col-lg-5 text-lg-end">
                                <a href="/" className="btn btn-outline-warning mb-0 text-dark">Start Teaching Today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modulearn

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBell, faHeart, faPenToSquare, faCartShopping, faCircleInfo, faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import profileImg from "../assets/hacker.webp"

const Profile = () => {
    return (
        <div class="row w-100">
            <div class="col-xs-12 col-lg-3 p-3 text-bg-dark h-100 border border-2 rounded-5">
                <div class="d-flex justify-content-center fw-bold">
                    <img src={profileImg} class="rounded-circle" width="60px" alt="Profile" />
                    <p class="fs-2 px-2 my-2">Rahul verma</p>
                </div>
                <hr />
                <ul class="nav flex-column mb-auto">
                    <li class="nav-item">
                        <a href="/Profile" class="nav-link text-white" aria-current="page">
                        <FontAwesomeIcon icon={faGraduationCap} className="pe-none me-2" width="16" height="16" />
                            My Learning
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/Wishlist" class="nav-link text-white">
                        <FontAwesomeIcon icon={faHeart} className="pe-none me-2" width="16" height="16" />
                            Wishlist
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/Profile" class="nav-link text-white">
                        <FontAwesomeIcon icon={faCartShopping} className="pe-none me-2" width="16" height="16" />
                            Cart
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/Notifications" class="nav-link text-white">
                        <FontAwesomeIcon icon={faBell} className="pe-none me-2" width="16" height="16" />
                            Notifications
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/Profile" class="nav-link text-white">
                        <FontAwesomeIcon icon={faCircleInfo} className="pe-none me-2" width="16" height="16" />
                            Edit profile
                        </a>
                    </li>
                    <hr />
                    <li class="nav-item">
                        <a href="/Profile" class="nav-link text-white">
                        <FontAwesomeIcon icon={faCircleInfo} className="pe-none me-2" width="16" height="16" />
                            Help
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/Profile" class="nav-link text-white">
                        <FontAwesomeIcon icon={faRightFromBracket} className="pe-none me-2" width="16" height="16" />
                            Log out
                        </a>
                    </li>
                    <hr />
                    <li class="nav-item">
                        <a href="/Profile" class="nav-link text-white">
                        <FontAwesomeIcon icon={faGear} className="pe-none me-2" width="16" height="16" />
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-lg-9">
                <div class="text-center my-2">
                    <img src={profileImg} class="rounded-circle" width="150px" alt="Profile" />
                    <h1 class="text-center">Rahul verma <FontAwesomeIcon icon={faPenToSquare} className="fs-4" /></h1>
                </div>
            </div>
        </div>

    )
}

export default Profile

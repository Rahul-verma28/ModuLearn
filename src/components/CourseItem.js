import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const CourseItem = ({ tittle, tutors, badge, price, isBadge, views, Uploaded , img}) => {
    return (
        <Link to="/CoursePurches" class="card border-0 text-decoration-none w-100 my-3 position-relative hover-item">
            <div>
                <img src={img} class="card-img-top border-0 rounded-4" alt="Card"/>
            </div>
            <div class="p-2">
                <h5 class="card-title mt-2 fw-bold">{tittle}</h5>
                <p class="card-text">
                    <small class="fs-sm fw-bold my-1 d-flex justify-content-between align-items-center">{tutors} {isBadge && <span class="badge bg-warning">{badge}</span>}</small>
                    <small class="text-muted d-flex justify-content-between align-items-center">{views} views <span>{Uploaded}</span></small>
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="/" class="btn btn-outline-primary btn-sm"><FontAwesomeIcon icon={faCartShopping} /> Add to cart</a>
                        <strong><FontAwesomeIcon icon={faIndianRupeeSign} />{price}.00</strong>
                    </div>
                    <FontAwesomeIcon className='position-absolute top-0 end-0 fs-4 m-1' icon={faHeart} />
                </p>
            </div>
        </Link>

    )
}

export default CourseItem

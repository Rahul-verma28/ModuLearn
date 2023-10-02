import CourseItem from './CourseItem'
import data from '../data/data';

const CourseRow = ({ tittle }) => {
    return (
        <div className='container my-3'>
            <h2 className='mx-2 fw-bold text-capitalize'>{tittle}</h2>
            <div className="row w-100 mx-auto">
                {
                    data.map( course =>
                        <div className="col-6 col-lg-4">
                            <CourseItem
                                key={course.id}
                                tittle={course.tittle}
                                tutors={course.tutors}
                                badge={course.badge}
                                isBadge={course.isBadge}
                                views={course.views}
                                Uploaded={course.Uploaded}
                                price={course.price}
                                img={course.img}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CourseRow

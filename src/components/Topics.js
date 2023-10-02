import Topic_img from "../assets/hacker.webp"
import CourseRow from "./CourseRow"

const Topics = () => {
  return (
    <div className="w-100 border">
      <div className="container my-3">
        <div className="row ">
          <div className="col-12 col-md-8">
            <h1 className="py-5">Web development</h1>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img src={Topic_img} alt="Profile" className="rounded-circle img-fluid" width="200px" />
          </div>
        </div>
        <div className="row ">
          <CourseRow/>
        </div>
      </div>
    </div>

  )
}

export default Topics

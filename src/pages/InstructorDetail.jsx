import { useLocation, useParams } from "react-router-dom"

const InstructorDetail = () => {
  let { id } = useParams()

  //   let { pathname, state } = useLocation()

  return (
    <div className="p-3">
      <p>
        from useParam: I'm instructor{" "}
        <span className="text-danger fw-bolder">{id}</span>
      </p>
      {/* <p>
        from state: I'm instructor{" "}
        <span className="text-danger fw-bolder">{state.name}</span>
      </p>
      <p>Out path is: {pathname}</p> */}
    </div>
  )
}

export default InstructorDetail

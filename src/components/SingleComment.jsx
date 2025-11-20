import { Star } from "react-bootstrap-icons"

const SingleComment = (props) => {
  return (
    <p className="text-capitalize">
      {props.comment} | {props.rate} <Star />
    </p>
  )
}
export default SingleComment

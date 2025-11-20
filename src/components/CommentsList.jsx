import { ListGroup, ListGroupItem } from "react-bootstrap"
import SingleComment from "./SingleComment"
import AddComments from "./AddComment"
const CommentsList = (props) => {
  return (
    <ListGroup>
      {props.comments.map((comment) => {
        return (
          <ListGroupItem key={comment._id}>
            <SingleComment comment={comment.comment} rate={comment.rate} />
          </ListGroupItem>
        )
      })}
      <AddComments />
    </ListGroup>
  )
}
export default CommentsList

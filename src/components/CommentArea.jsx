import { Component } from "react"
import CommentsList from "./CommentsList"
const URL = `https://striveschool-api.herokuapp.com/api/comments/`
class CommentArea extends Component {
  state = {
    commenti: [],
  }
  fetchComments = () => {
    fetch(URL + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYmFlY2Y0YmQ0NzAwMTU4NWIxZTgiLCJpYXQiOjE3NjM2NDY1ODcsImV4cCI6MTc2NDg1NjE4N30.DnUs9rSF1xbBX1kjzXKUsNSNJrxmAuxoUX7TIUCCwl4",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore", res.status)
        }
      })
      .then((comments) => {
        console.log(comments)
        this.setState({
          commenti: comments,
        })
      })
      .catch((err) => {
        console.log("Erroe", err)
      })
  }

  componentDidMount() {
    this.fetchComments()
  }

  render() {
    return <CommentsList comments={this.state.commenti} />
  }
}
export default CommentArea

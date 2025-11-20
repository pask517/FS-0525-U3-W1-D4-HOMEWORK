import { Component } from "react"
import { Form, Button } from "react-bootstrap"
const URL = `https://striveschool-api.herokuapp.com/api/comments/`
class AddComments extends Component {
  render() {
    return (
      <Form className="mt-2">
        <Form.Group className="mb-3">
          <Form.Label>Lascia un commento</Form.Label>
          <Form.Control type="text" placeholder="Enter comment" />
        </Form.Group>

        <Button variant="primary" type="submit" onSubmit={fetch(URL)}>
          Submit
        </Button>
      </Form>
    )
  }
}
export default AddComments

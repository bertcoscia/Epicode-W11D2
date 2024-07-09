import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavouritesAction } from "../redux/actions";

const Favourites = () => {
  const favourites = useSelector(state => state.favourite.content);
  const dispatch = useDispatch();

  return favourites.length > 0 ? (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Link className="btn btn-info" to={"/"}>
            Home
          </Link>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, index) => (
              <ListGroup.Item key={index}>
                <StarFill className="me-2" onClick={() => dispatch(removeFromFavouritesAction(fav))} />
                <Link to={"/" + fav}>{fav}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Link className="btn" to={"/"}>
            Home
          </Link>
          <h2>There are no favourites</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;

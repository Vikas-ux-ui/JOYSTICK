import SecondaryNavbar from './SecondaryNavbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { setGameCart, removeGameFromCart } from '../features/gameSlice';
import { Container, Row, Col, Carousel, Badge, Button, Card } from 'react-bootstrap';
import {
  FaWindows, FaPlaystation, FaXbox, FaStar, FaCalendarAlt,
  FaTags, FaGamepad, FaCartPlus, FaCommentDots
} from 'react-icons/fa';
import pic from "../assets/another1.jpg";

function GameDetails() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const gameData = location.state?.gameData;
  const Games = useSelector(state => state.gameRed.GameCart);
  const loginStatus = useSelector(state => state.accountRed.login);

  const isInCart = Games.some(game => game.id === gameData.id);

  const getPlatformIcon = (platformSlug) => {
    switch (platformSlug) {
      case 'pc': return <FaWindows title="PC" />;
      case 'playstation': return <FaPlaystation title="PlayStation" />;
      case 'xbox': return <FaXbox title="Xbox" />;
      default: return <FaGamepad title={platformSlug} />;
    }
  };
  const handleAddToCart = () => {
    if (!loginStatus) {
      navigate("/signup");
      
    }
    dispatch(setGameCart(gameData));
    const counter = localStorage.getItem("counter") ; 
    const storedUser = JSON.parse(localStorage.getItem(`user${counter}`));
    if (storedUser) {
      const updatedCart = [...(storedUser.cart || []), gameData];
      storedUser.cart = updatedCart;
      localStorage.setItem("user", JSON.stringify(storedUser));
    }

      
  };

  /////////////////////////////////////////////////////////////////////////

  const handleRemoveFromCart = () => {
    dispatch(removeGameFromCart(gameData.id));

    // Update localStorage cart if logged in
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      const updatedCart = (storedUser.cart || []).filter(g => g.id !== gameData.id);
      storedUser.cart = updatedCart;
      localStorage.setItem("user", JSON.stringify(storedUser));
    }
  };

  return (
    <>
      <SecondaryNavbar />
      <Container className="my-4 text-light bg-dark p-4 rounded shadow-lg">
        <Row className="mb-3">
          <Col><h1 className="fw-bold">{gameData.name}</h1></Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <img className="w-100 rounded steam-main-img" src={pic} alt={gameData.name} />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={8}>
            <Carousel interval={2500} className="mb-4 steam-carousel">
              {gameData.short_screenshots.map((screenshot) => (
                <Carousel.Item key={screenshot.id}>
                  <img className="d-block w-100 rounded" src={screenshot.image} alt="" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col lg={4}>
            <Card bg="secondary" text="light" className="mb-3 p-3">
              <Card.Body>
                <div className="mb-3">
                  <FaStar className="me-2 text-warning" />
                  <strong>
                    {gameData.reviews_count > 1000
                      ? `Very Positive (${gameData.reviews_count})`
                      : `Good (${gameData.reviews_count})`}
                  </strong>
                </div>

                <div className="mb-3">
                  <FaCalendarAlt className="me-2 text-info" />
                  <strong>Released:</strong> {gameData.released}
                </div>

                <div className="mb-3">
                  <strong>Platforms: </strong>
                  <div className="d-flex gap-2 flex-wrap mt-2 fs-5">
                    {gameData.parent_platforms.map((p) => (
                      <span key={p.platform.id}>{getPlatformIcon(p.platform.slug)}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <strong>ESRB Rating: </strong>
                  {gameData.esrb_rating ? gameData.esrb_rating.name : 'N/A'}
                </div>

                {isInCart ? (
                  <Button
                    variant="danger"
                    className="w-100 mt-3"
                    onClick={handleRemoveFromCart}
                  >
                    Remove from Cart
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    className="w-100 mt-3"
                    onClick={handleAddToCart}
                  >
                    <FaCartPlus className="me-2" />
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h5 className="mb-2"><FaTags className="me-2" />Tags</h5>
            <div className="d-flex flex-wrap gap-2">
              {gameData.tags.slice(0, 8).map((tag) => (
                <Badge bg="info" text="dark" key={tag.id}>{tag.name}</Badge>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h5 className="mb-3"><FaCommentDots className="me-2" />Player Ratings Summary</h5>
            <Row>
              {gameData.ratings.map((r) => (
                <Col md={3} key={r.id}>
                  <Card bg="dark" text="light" className="mb-3 p-3 text-center border-light">
                    <h6>{r.title}</h6>
                    <p>{r.count} votes</p>
                    <Badge bg="secondary">{r.percent}%</Badge>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GameDetails;

import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { removeGameFromCart } from '../features/gameSlice'; 
import SecondaryNavbar from '../components/SecondaryNavbar';
function YourStore() {
  const dispatch = useDispatch();
  const GameCart = useSelector(state => state.gameRed.GameCart);

  const handleRemove = (id) => {
    dispatch(removeGameFromCart(id));
  };

  if (!GameCart || GameCart.length === 0) {
    return (
      <>
      <SecondaryNavbar />
      <div className="text-center mt-5 text-white" >
        <h3>Your Cart is Empty 🛒</h3>
        <p>Add some games to your cart and come back!</p>
      </div></>
    );
  }

  return (
    <><SecondaryNavbar />
    <div style={{ padding: "20px", }}>
      <h2 style={{ color: "white", marginBottom: "20px" }}>🛒 Your Game Cart</h2>

      <Row>
        {GameCart.map((game) => (
          <Col key={game.id} md={4} sm={6} xs={12} className="mb-4">
            <Card
              className="bg-dark text-white shadow-lg border-0 h-100"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <Card.Img
                src={game.background_image}
                alt={game.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-bold">{game.name}</Card.Title>
                <Card.Text className="text-muted">Released: {game.released}</Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(game.id)}
                    style={{
                      borderRadius: "30px",
                      padding: "6px 18px",
                      fontWeight: "bold",
                    }}
                  >
                     Remove
                  </Button>
                  <span style={{ fontSize: "14px", color: "#bbb" }}>
                    {game.platforms?.map(p => p.platform.name).join(", ") || "Multi-platform"}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div></>
  );
}

export default YourStore;

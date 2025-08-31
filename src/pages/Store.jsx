import  { useEffect } from 'react';
import HomeGameCard from "../components/HomeGameCard";
import { useDispatch, useSelector } from 'react-redux';
import { FetchApi } from '../network/FetchApi';
import { setGameData } from '../features/gameSlice';
import { setNextPageURL, setPreviousPageURL } from '../features/pageSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Carousel } from 'react-bootstrap';
import pic from "../assets/another1.jpg";
import "../index.css";

import SecondaryNavbar from '../components/SecondaryNavbar';
function Store() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentPageUrl } = useSelector((state) => state.pageRed);
  const { gameData } = useSelector((state) => state.gameRed);

  const handleApi = async () => {
    try {
      const res = await FetchApi(currentPageUrl);
      const response = res.data;

      dispatch(setGameData(response.results));
      dispatch(setNextPageURL(response.next));
      dispatch(setPreviousPageURL(response.previous));
    } catch (error) {
      console.error("Error fetching game data:", error);
    }
  };

  const handleNavigateHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    handleApi();
  }, [currentPageUrl]);

  return (
    <>
    <br />
      <SecondaryNavbar /><br />

      <div>
        <img
          src={pic}
          alt="Joystick"
          style={{ width: "100%", height: "40%" }}
        />
      </div>

      {/* Header Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <h3 style={{ color: "white", marginRight: "auto" }}>
          Recent Uploaded
        </h3>
        <Button
          onClick={handleNavigateHome}
          className="m-2"
          variant="primary"
          size="lg"
        >
          Home
        </Button>
      </div>

      <Carousel interval={2000} pause="hover" indicators={false}>
        {gameData.slice(7, 20).map((d, index) => (
          <Carousel.Item key={index}>
            <div className="steam-game-card">
            <HomeGameCard data={d} />
            </div>
           
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Store;

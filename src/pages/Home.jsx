import Pagination from "../pagination";
import HomeGameCard from "../components/HomeGameCard";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";
import { useEffect, useState } from "react";
import { FetchApi } from "../network/FetchApi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageUrl } from "../features/pageSlice";
import { setNextPageURL,setPreviousPageURL } from '../features/pageSlice';
import { setGameData } from "../features/gameSlice";
import Spinner from "../components/Spinner";
import SecondaryNavbar from "../components/SecondaryNavbar";
function Home() {
  const games = useSelector((state) => state.gameRed.gameData);
  const dispatch = useDispatch();
  const { nextPageURL, previousPageURL } = useSelector(
    (state) => state.pageRed
  );
  
  const [loading,setLoading]=useState(false);
  const { currentPageUrl } = useSelector((state) => state.pageRed);
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true); 
      const res = await FetchApi(currentPageUrl);
      const data = res.data;
      dispatch(setGameData(data.results));
      dispatch(setNextPageURL(data.next));
      dispatch(setPreviousPageURL(data.previous));
    } catch (err) {
      console.error("Failed to fetch data:", err);
    } finally {
      setLoading(false); // stop loading
    }
  };

  if (currentPageUrl) {
    fetchData();
  }
}, [currentPageUrl, dispatch]);

  

  const nextPage = () => {     
    dispatch(setCurrentPageUrl(nextPageURL));
    console.log("next");
     
  }
  const previousPage = () => {dispatch(setCurrentPageUrl(previousPageURL));
     console.log("done");
    }

  const groupedGames = [];
  for (let i = 0; i < games.length; i += 8) {
    groupedGames.push(games.slice(i, i + 6));
  }
  return (
    <>
    <SecondaryNavbar/>
      {loading?<Spinner loading={loading}/>:groupedGames.map((group, idx) => (
        <center key={idx}>
          <Carousel interval={2000} className="mb-4 steam-carousel w-75 vh-10">
            {group.map((gm) => (
              <Carousel.Item key={gm.id}>
                <div className="steam-game-card">
                  <HomeGameCard data={gm} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </center>
      ))}

      <Pagination
        nextpage={nextPageURL ? nextPage : null}
        previouspage={previousPageURL ? previousPage : null}
      />
    </>
  );
}

export default Home;

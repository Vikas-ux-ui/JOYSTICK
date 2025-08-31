import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import Carousel from 'react-bootstrap/Carousel';
import HomeGameCard from './HomeGameCard'; // Make sure this is correctly imported
import SecondaryNavbar from '../components/SecondaryNavbar'
function CategoryDetails() {
  const { id } = useParams();
  const games = useSelector(state => state.gameRed[id]);
  console.log(games);
 
  if (!games || games.length === 0) {
    return <Spinner />; 
  }
  const groupedGames = [];
  for (let i = 0; i < games.length/2; i += 6) {
    groupedGames.push(games.slice(i, i + 6));
  }
  return (
    <>
    <SecondaryNavbar />
    <div className="my-4">
      {groupedGames.length==0?<h1 style={{color:
        "white"
      }}>No Data</h1>:groupedGames.map((group, idx) => (
        <div key={idx} className="d-flex justify-content-center mb-5">
          <Carousel interval={2500} className="steam-carousel w-75">
            {group.map(gm => (
              <Carousel.Item key={gm.id}>
                <div className="steam-game-card px-3">
                  <HomeGameCard data={gm} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
    </>
  );
}
export default CategoryDetails;

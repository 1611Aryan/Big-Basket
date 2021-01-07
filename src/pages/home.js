import Doors from "./../components/doors";
import HomeContent from "./../components/homeContent";
const Home = ({ doorOpen, setDoorOpen }) => {
  return (
    <>
      <HomeContent doorOpen={doorOpen} />
      <Doors doorOpen={doorOpen} setDoorOpen={setDoorOpen} />
    </>
  );
};

export default Home;

import Footer from "../Footer";
import Header from "../Header";
import ListCharacters from "../ListCharacters";
import Mastercard from "../Mastercad";
import Newsletter from "../Newsletter";
import Slider from "../Slider";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <ListCharacters />
      <Mastercard />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

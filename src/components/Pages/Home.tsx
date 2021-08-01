import Footer from "../Footer";
import Header from "../Header";
import ListCharacters from "../ListCharacters";
import Mastercard from "../Mastercard";
import Newsletter from "../Newsletter";
import Carousel from "../Carousel";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ListCharacters />
      <Mastercard />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

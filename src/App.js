import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Specialists from "./components/Specialists";
import Offers from "./components/Offers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Specialists />
        <Offers />
      </main>
      <Footer />
    </>
  );
};

export default App;

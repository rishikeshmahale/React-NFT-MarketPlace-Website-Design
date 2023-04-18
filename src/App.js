import './App.css';
import Clients from './Components/Clients';
import CreateAndSell from './Components/CreateAndSell';
import Home from './Components/Home';
import Choose from './Components/Choose';
import MarketPlace from './Components/MarketPlace';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <>
      <Home />
      <Clients/>
      <CreateAndSell/>
      <Choose />
      <MarketPlace />
      <Subscribe />
      <Footer />
      <ScrollToTop/>
    </>
  )
    
}

export default App;

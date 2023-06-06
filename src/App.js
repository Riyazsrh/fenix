import { Fade, Zoom } from 'react-reveal';
import './App.css';
import Cards from './Components/Cards/Cards';
import ApexChart from './Components/Chats/ApexChart/ApexChart';
import LineChart from './Components/Chats/LineChart/LineChart';
import PieChart from './Components/Chats/PieChart/PieChart';
import LearnMore from './Components/Footer/LearnMore';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <div className='bgimg'>
        <div className='container'>
          <Navbar />
        </div>
        <Home />
      </div>
      <div className='bgc2'>
        <div className='container common-p'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <PieChart />
            </div>
            <div className='col-md-6 col-sm-12'>
              <ApexChart />
            </div>
            <div className='col-md-12 col-sm-12 py-5'>
              <LineChart />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='bgc3 Cardb'>
          <Cards />
        </div>
      </div>
      <Zoom>
        <LearnMore />
      </Zoom>
      <div >
        <Footer />
      </div>
    </div>
  );
}

export default App;

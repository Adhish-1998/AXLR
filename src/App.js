import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Group from './Components/Group/Group'
import Popup from './Components/Popup/Popup';
import Deals from './Components/Deals/Deals'
import Sellers from './Components/Sellers/Sellers';
import Arrivals from './Components/Arrivals/Arrivals';
import Certifications from './Components/Certifications/Certifications';
import Trending from './Components/Trending/Trending';
import Customer from './Components/Customer/Customer';
import Testimonials from './Components/Testimonials/Testimonial';
import ContactUs from './Components/Contact Us/ContactUs';
import { Helmet } from 'react-helmet'


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>AXLR</title>
      </Helmet>
      <Header />
      <Group />
      <Popup />
      <Deals />
      <Sellers />
      <Arrivals />
      <Certifications />
      <Trending />
      <Customer />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import HomePage from './pages/homepage';
import ContactPage from './pages/contactpage';
import GalleryPage from './pages/gallerypage';
import AboutPage from './pages/aboutpage';
import SuperDeluxeRoom from './pages/super-deluxe-room';
import PremiumRoom from './pages/premium-room-page';
import RoomPage from './pages/rooms-page';
import Payment from './pages/paymentpage';
import PlacesToVisitPage from './pages/placestovisitpage'
import DeluxeRoom from './pages/deluxe-room';
import SuiteRoom from './pages/suite-room';


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/premium-room" element={<PremiumRoom />} />
          <Route path="/super-deluxe-room" element={<SuperDeluxeRoom />} />
          <Route path="/deluxe-room" element={<DeluxeRoom />} />
          <Route path="/suite-room" element={<SuiteRoom />} />
          <Route path='/rooms' element={<RoomPage />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/places-to-visit' element={<PlacesToVisitPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

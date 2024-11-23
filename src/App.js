import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import HomePage from './pages/homepage';
import ContactPage from './pages/contactpage';
import GalleryPage from './pages/gallerypage';
// import AboutPage from './pages/aboutpage';
// import FaqPage from './pages/faqpage';
// import RoomPage from './pages/roompage';
import Payment from './pages/paymentpage';
import PlacesToVisitPage from './pages/placestovisitpage'


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          {/* <Route path='/about' element={<AboutPage />} /> */}
          {/* <Route path='/faq' element={<FaqPage />} />
          <Route path='/rooms' element={<RoomPage />} /> */}
          <Route path='/payment' element={<Payment />} />
          <Route path='/places-to-visit' element={<PlacesToVisitPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

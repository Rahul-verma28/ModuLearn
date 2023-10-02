import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Modulearn from './components/Modulearn';
import Notification from './components/Notification';
import Wishlist from './components/Wishlist';
import Courses from './components/Courses';
import Profile from './components/Profile';
import CoursePurches from './components/CoursePurches';
import Topics from './components/Topics';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
        <Header/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Modulearn />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Topics" element={<Topics/>} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/CoursePurches" element={<CoursePurches />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Manga from './pages/Manga';
import Wishlist from './pages/Wishlist';

import './styles/app.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/manga" element={<Manga />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

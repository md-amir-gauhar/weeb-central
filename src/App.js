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
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/manga" element={<Manga />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/wishlist" element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          } />
          <Route path="/cart" element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          } />

        </Routes>

      </div>
    </Router>
  );
}

export default App;

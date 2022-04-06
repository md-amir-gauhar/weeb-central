import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './utils/PrivateRoute';
import Header from './components/Header';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Manga from './pages/Manga';
import Wishlist from './pages/Wishlist';
import NotFound from './pages/NotFound';

import './styles/app.css'

function App() {
  return (
    <Router>
      <div className="app">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/manga" element={<Manga />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='*' element={<NotFound />} />
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

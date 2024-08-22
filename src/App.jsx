import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
    <div>
      <div>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

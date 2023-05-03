
import './App.css';
// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Products from './Pages/Products.js';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </>
 );
};

export default App;
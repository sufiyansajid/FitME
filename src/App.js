
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ErrorPage from './Pages/ErrorPage';
import Mens from './Pages/Mens';
import Womens from './Pages/Womens';
import Kids from './Pages/Kids';
import Navbar from './component/Navbar';
import Navbar1 from './component/Navbar1';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/womens' element={<Womens />} />
        <Route path='/Cart/:title' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

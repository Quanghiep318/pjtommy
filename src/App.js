

import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Register from './pages/Register/Register.jsx';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart/Cart.jsx';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <HomePage></HomePage> */}
      {/* <LoginPage></LoginPage> */}
      {/* <Register></Register> */}
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        {/* Not Found */}
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

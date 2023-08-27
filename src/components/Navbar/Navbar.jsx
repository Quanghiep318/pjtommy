import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Navbar/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function NavScrollExample() {
  return (
    <div>
  
  
  <div><div className="container-fluid">
        <div className="navbar">
          <div className="navbar1">
          <div >店舗検索</div>
          <div>|</div>
          <div>ニュースレター登録</div>
          </div>
        
          <div className="navbar2"><img src='https://logo-logos.com/2016/10/Tommy_Hilfiger_logo.png' alt="" /></div>

            

            <div className="navbar3">
            <div><input type="text" /></div>
            <div><i class="fa-solid fa-magnifying-glass"></i></div>
              <div><span>ログイン/会員登録</span></div>
              <div>
            <i className="fa-regular fa-heart"></i>
            </div>
          <div>
           <i class="fa-solid fa-cart-shopping"></i> </div></div>
          

        </div>
    </div></div>

      <div className='navbarver2'>
        <div><strong>SALE</strong></div>
        <div><strong>WOMEN</strong></div>
        <div><strong>KIDS</strong></div>
        <div><strong>TOMMY JEANS</strong></div>
        <div><strong>TOMMY HILFIGER GOLF</strong></div>
        <div><strong>TOMMY ADAPTIVE</strong></div>
      </div>
    
    
  
  </div>

   

    
    
  );
}

export default NavScrollExample;
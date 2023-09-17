import React from 'react'
import { Link } from 'react-router-dom'
import '../../pages/Cart/Cart.css'
import sp01 from '../../../src/assets/img/sp01.jpg'
import sp02 from '../../../src/assets/img/sp02.jpg'
import sp03 from '../../../src/assets/img/sp03.jpg'
import sp04 from '../../../src/assets/img/sp04.jpg'
import sp05 from '../../../src/assets/img/sp05.jpg'
import sp06 from '../../../src/assets/img/sp06.jpg'

function Cart() {
  return (
    <div>
        {/* cart */}
<div>
  <div>
    <div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th/>
                <th>Product Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="#"><i className="far fa-window-close" /></a></td>
                <td><img src="assets/img/products/product-img-1.jpg" alt /></td>
                <td>SP</td>
                <td>$85</td>
                <td className="product-quantity"><input type="number" placeholder={0} /></td>
                <td className="product-total">1</td>
              </tr>
              <tr className="table-body-row">
                <td className="product-remove"><a href="#"><i className="far fa-window-close" /></a></td>
                <td className="product-image"><img src="assets/img/products/product-img-2.jpg" alt /></td>
                <td className="product-name">SP</td>
                <td className="product-price">$70</td>
                <td className="product-quantity"><input type="number" placeholder={0} /></td>
                <td className="product-total">1</td>
              </tr>
              <tr className="table-body-row">
                <td className="product-remove"><a href="#"><i className="far fa-window-close" /></a></td>
                <td className="product-image"><img src="assets/img/products/product-img-3.jpg" alt /></td>
                <td className="product-name">SP!</td>
                <td className="product-price">$35</td>
                <td className="product-quantity"><input type="number" placeholder={0} /></td>
                <td className="product-total">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="total-section">
          <table className="total-table">
            <thead className="total-table-head">
              <tr className="table-total-row">
                <th>Total</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="total-data">
                <td><strong>Subtotal: </strong></td>
                <td>$500</td>
              </tr>
              <tr className="total-data">
                <td><strong>Shipping: </strong></td>
                <td>$45</td>
              </tr>
              <tr className="total-data">
                <td><strong>Total: </strong></td>
                <td>$545</td>
              </tr>
            </tbody>
          </table>
          <div className="cart-buttons">
            {/* <a href="cart.html" className="boxed-btn">Update Cart</a> */}
            <Link to={'/cart'}  className="boxed-btn">Update Cart</Link>
            <Link to={'/checkout'}  className="boxed-btn black">Check Out</Link>

            {/* <a href="checkout.html" className="boxed-btn black">Check Out</a> */}
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
{/* end cart */}

{/* List item */}
<div>
<div class="containercart2">
  <div class="containercart2-1" ><div id = "list" class="list">
           
           <div id = "item" class="item">
             <img className="img" src= {sp01}/>
             <div class="title">Name</div>
             <div class="price">Price</div>
             <button>Add To Card</button> 
           </div>
         </div>
         <div id = "list" class="list">
            
            <div id = "item" class="item">
              <img className="img" src= {sp01}/>
              <div class="title">Name</div>
              <div class="price">Price</div>
              <button>Add To Card</button> 
            </div>
          </div>
          <div id = "list" class="list">
            
            <div id = "item" class="item">
              <img className="img" src= {sp01}/>
              <div class="title">Name</div>
              <div class="price">Price</div>
              <button>Add To Card</button> 
            </div>
          </div></div>
          <div class="containercart2-2">
          <div id = "list" class="list">
           
           <div id = "item" class="item">
             <img className="img" src= {sp01}/>
             <div class="title">Name</div>
             <div class="price">Price</div>
             <button>Add To Card</button> 
           </div>
         </div>
         <div id = "list" class="list">
           
           <div id = "item" class="item">
             <img className="img" src= {sp01}/>
             <div class="title">Name</div>
             <div class="price">Price</div>
             <button>Add To Card</button> 
           </div>
         </div>
         <div id = "list" class="list">
           
           <div id = "item" class="item">
             <img className="img" src= {sp01}/>
             <div class="title">Name</div>
             <div class="price">Price</div>
             <button>Add To Card</button> 
           </div>
         </div>
          </div>
         
         
        
        

        </div>



</div>
    </div>

  )
}

export default Cart
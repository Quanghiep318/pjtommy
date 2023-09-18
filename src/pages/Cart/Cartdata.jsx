import React from 'react'
import '../../pages/Cart/Cart.css'
import db from "../../../json-server/db.json"


function Cartdata() {

    const products = () =>{
        return e.keys(db[0])
      }
      return (
        {products.map((e, i) => (
            <div class="containercart2">
       <div class="containercart2-1" ><div id = "list" class="list">
           
           <div id = "item" class="item">
             <img className="img" src= {e.image}/>
             <div class="title">{e.name}</div>
             <div class="price">{e.price}</div>
             <button>Add To Card</button> 
           </div>
         </div>
         </div>
         </div>
          ))}
        

      )
      ;
 
}

export default Cartdata
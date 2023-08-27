import React from 'react'
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import sp01 from '../../../src/assets/img/sp01.jpg'
import sp02 from '../../../src/assets/img/sp02.jpg'
import sp03 from '../../../src/assets/img/sp03.jpg'
import sp04 from '../../../src/assets/img/sp04.jpg'
import sp05 from '../../../src/assets/img/sp05.jpg'
import sp06 from '../../../src/assets/img/sp06.jpg'


function Carosel() {
  return (
    <div>  
          <div class='container-fluid' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           
           </div>  
       </div>  
       <div class='container-fluid' >            
        <OwlCarousel items={5}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div ><img  className="img" src= {sp01}/>
           <span>レギュラーバーシティカーディガン</span>
           <br />
           <span>20.900</span>
           </div>  
           <div><img  className="img" src= {sp02}/>
           <span>レギュラーバーシティカーディガン</span>
           <br />
           <span>20.900</span></div>  
           <div><img  className="img" src= {sp03}/>
           <span>THフォンウォレット</span>
           <br />
           <span>12.100</span></div>  
           <div><img  className="img" src= {sp04}/></div>  
           <div><img className="img" src= {sp05}/></div>  
           <div><img className="img" src= {sp06}/></div>  
           <div><img className="img" src= {sp01}/>
           <span>レギュラーバーシティカーディガン</span>
           <br />
           <span>20.900</span></div>  
           <div><img className="img" src= {sp02}/></div>  
           <div><img className="img" src= {sp03}/></div>  
      </OwlCarousel>  
      </div>  
  
      </div>  
  )
}

export default Carosel



import React from 'react'
import './HomePage.css'
import Carosel from '../../components/Carosel/Carosel.jsx';
function HomePage() {
  return (
    <div>
 
 {/* Phan poster 1 */}
 <div className="container1">
      <div ><h1>DISCOVER</h1></div>
      <div class="container1-2">
        <div>WOMEN</div>
        <div>MEN</div>
        <div>ALL</div>
      </div>
     </div>

    {/* Phan poster 2 */}
     <div className="container2">
      <div ><h1>UP TO 50% OFF</h1></div>
      <div className="container2-2">
        <div>WOMEN</div>
        <div>MEN</div>
        <div>KIDS</div>
        <div>ALL</div>
      </div>
     </div>

     {/* Phan Carosel */}
     <div><strong>RECOMMENDED ITEMS</strong></div>
     <div><span>おすすめアイテム</span></div>
     <br />
     <Carosel></Carosel>




      {/* Phan noi dung them */}
      <div className="container4">
        <div className="container4-1">
           <div><span>お気に入り機能がさらに便利になって登場</span></div>
           <div><span>お気に入りのストアスタッフや参考にしたいコーディネートが登録可能に。</span></div>
           <div><span>最新機能を使いこなしてショッピングをお楽しみください。</span></div>
          
        </div>
        <div className="container4-2">
          <div>詳しくはこちら</div>
        
        </div>
      </div>
    </div>
  )
}

export default HomePage
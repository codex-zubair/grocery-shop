import './App.css';
import Aside from './Component/Aside/Aside';
import { ShopItem } from './Component/ShopItem/ShopItem';



function App() {
  return (
    <div className="App">
 
         {/*Main Section Start  */}
         <main >
         {/* style={{display: "flex"}} */}
         
          {/* Shop Item Section Start */}
          <section>
          <ShopItem></ShopItem>
          </section>
          {/* Shop Item Section End */}

          {/* Aside Buying Items List */}
         <Aside></Aside>
         </main>
         {/*Main Section End  */}

       
    
    </div>
  );
}

export default App;

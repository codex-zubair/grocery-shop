import './App.css';
import Aside from './Component/Aside/Aside';
import { ShopItem } from './Component/ShopItem/ShopItem';



function App() {
  return (
    <div className="App">
 
         {/*Main Section Start  */}
         <main>
         
         
          {/* Shop Item Section Start */}
          <section className='card-section'>
          <ShopItem></ShopItem>
          </section>
          {/* Shop Item Section End */}

          {/* Aside Buying Items List */}
         <Aside className='craft-aside-section'></Aside>
         </main>
         {/*Main Section End  */}

       
    
    </div>
  );
}

export default App;

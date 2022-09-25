import logo from './logo.svg';
import './App.css';
import { ShopItem } from './Component/ShopItem/ShopItem';
import ShopDataLoad from './Component/Utilites/ShopDataLoad';


function App() {
  return (
    <div className="App">
 
         {/*Main Section Start  */}
         <main>
         <ShopItem></ShopItem>
         </main>
         {/*Main Section End  */}

       
    
    </div>
  );
}

export default App;

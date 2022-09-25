import { useEffect, useState } from 'react';
import './App.css';
import Aside from './Component/Aside/Aside';
import { ShopItem } from './Component/ShopItem/ShopItem';



function App() {

  // const [localStorageChange, setValue] = useState()
  // setValue(localStorage.getItem('craftItems'));



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

        {/* TODO I want to Call this One whenever i press the button */}
        
        {/* {setInterval(()=> <Aside className='craft-aside-section'></Aside>,1000)} */}
        
        <Aside className='craft-aside-section'></Aside>

      </main>
      {/*Main Section End  */}



    </div>
  );
}

export default App;

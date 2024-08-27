import './App.css';
import { Home } from './UI/home/home';
import { Login } from './UI/login/login';
import { Product } from './UI/products/product';
import { Topics } from './UI/topics/topics';
import './App.css'
import { Register } from './UI/register/register';
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div >
    <div>
      <ul>
        <li className='nav'><Link to=''>Home</Link></li>
        <li className='nav'><Link to='topics'>Topics</Link></li>
        <li className='nav'><Link to='products'>Products</Link></li>
      </ul>
    </div>
    <div>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='topics' element={<Topics/>}></Route>
        <Route path='products' element={<Product/>}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;

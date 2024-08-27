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
    <div>
    <div>
    <img className='logo' src={require('./2560px-HSBC_logo_(2018).svg.png')} alt="HSBC Logo" />
    </div>
    <div>
      <ul>
        <li className='nav'><Link to=''>Home</Link></li>
        <li className='nav'><Link to='topics'>Topics</Link></li>
        <li className='nav'><Link to='products'>Products</Link></li>
        <li className='nav'><Link to='login'>Login</Link></li>
        <li className='nav'><Link to='register'>Register</Link></li>
      </ul>
    </div>
    <div>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='topics' element={<Topics/>}></Route>
        <Route path='products' element={<Product/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;

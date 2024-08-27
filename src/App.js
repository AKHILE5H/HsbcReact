import './App.css';
import { Home } from './UI/home/home';
import { Login } from './UI/login/login';
import { Product } from './UI/products/product';
import { Topics } from './UI/topics/topics';
import './App.css'
import { Register } from './UI/register/register';
import { Link, Route, Routes } from 'react-router-dom';
import { Details } from './UI/details/details';
import { SignUp } from './UI/signup/signup';
import { Users } from './UI/users/users';
function App() {
  return (
    <div>
      <div className="header">
        <img className='logo' src={require('./2560px-HSBC_logo_(2018).svg.png')} alt="HSBC Logo" />
        <ul className='nav-container'>
          <li className='nav'><Link to=''>Home</Link></li>
          <li className='nav'><Link to='topics'>Topics</Link></li>
          <li className='nav'><Link to='products'>Products</Link></li>
          <li className='nav'><Link to='login'>Login</Link></li>
          <li className='nav'><Link to='register'>Register</Link></li>
          <li className='nav'><Link to='signup'>SignUp</Link></li>
          <li className='nav'><Link to='users'>Users</Link></li>
          
        </ul>
      </div>
      <div>
        <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route path='topics' element={<Topics/>}></Route>
          <Route path='products' element={<Product/>}>
            <Route path='details/:pid' element={<Details/>}></Route>
          </Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='signup' element={<SignUp/>}></Route>
          <Route path='users' element={<Users/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import Productlist from './components/Productlist';
import Cardlist from './components/Cart';
import Userdetails from './components/Userdetails';
import Admin from './components/Admin';
import PHome from './components/PHome';
import Sell from './components/Sell';
import Edit from './components/Edit';
import Adduser from './components/Adduser';
import EditProduct from './components/EditProduct';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';


function App() {

  
  return (
    <div className='App'>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Productlist />} />
      <Route path='/home' element={<PHome/>} />
        <Route path='/reg' element={<Registration />} />
        <Route path='/adduser' element={<Adduser />} />
        <Route path='/editProduct/:id' element={<EditProduct />} />
        <Route path='/log' element={<Login/>} />
        <Route path='/cart' element={<Cardlist/>} />
        <Route path='/user' element={<Userdetails/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/buy' element={<Payment/>} />
        <Route path='/pay' element={<PaymentSuccess/>} />
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

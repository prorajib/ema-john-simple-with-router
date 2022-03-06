import logo from './logo.svg';
import './components/Header/Header';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from './components/Inventory/Inverntory';
import OrderReview from './components/OrderReview/OrderReview';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Header></Header>
         <Routes>
           <Route path="/shop" element={<Shop/>} />
           <Route path="/inventory" element={<Inventory/>}/>
           <Route path="/review" element={<OrderReview/>}/>
           <Route path="/placeorder" element={<PlaceOrder/>}/>
           <Route path="*" element={<PageNotFound/>}/>

         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

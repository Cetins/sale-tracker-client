import React, { useState, useEffect } from 'react';
import ShopService from './services/ShopService';
import SalesService from './services/SalesService';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Sales from './Pages/Sales/Sales';
import Dashboard from './Pages/Dashboard/Dashboard';
import Menu from './components/Menu';
import Footer from './components/Footer';
import NewProduct from './Pages/Dashboard/components/NewProduct';
import './App.css';
import EditProduct from './Pages/Dashboard/components/EditProduct';
import EditService from './Pages/Dashboard/components/EditService';
import EditStaff from './Pages/Dashboard/components/EditStaff';
import EditSale from './Pages/Sales/components/EditSale';
import NewService from './Pages/Dashboard/components/NewService';
import NewStaff from './Pages/Dashboard/components/NewStaff';

const PrivateRoute = () => {
  const auth = null;
  return auth ? <Outlet /> : <Navigate to="/HomeContainer" />;
}

function App() {
  const [shop, setShop] = useState(null);
  const [sales, setSales] = useState(null);
  
  useEffect(() => {
      ShopService.getShopByEmail("demo@mail.com")
          .then(res => setShop(res))
  }, []);

  useEffect(() => {
      if (shop !== null) {
          SalesService.getSalesByShopId(shop._id)
          .then(res => setSales(res))
      }
  }, [shop]);

  if (shop === null) { return <div>Loading Shop...</div>}
  if (sales === null) {return <div>Sales Loading...</div>}

  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route exact path='/' element={<Home shop={shop} sales={sales} />} />
          <Route exact path='/dashboard'element={<Dashboard shop={shop} sales={sales} />} />
          <Route exact path='/sales' element={<Sales shop={shop} sales={sales} setSales={setSales} />} />
          <Route exact path='/product-new' element={<NewProduct />} />
          <Route exact path='/service-new' element={<NewService />} />
          <Route exact path='/staff-new' element={<NewStaff />} />
          <Route path="product/:productId" element={<EditProduct />} />
          <Route path="service/:serviceId" element={<EditService />} />
          <Route path='staff/:staffId' element={<EditStaff />} />
          <Route path="sale/:saleId" element={<EditSale />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

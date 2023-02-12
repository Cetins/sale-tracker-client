import React from 'react';
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

  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard'element={<Dashboard/>} />
          <Route exact path='/sales' element={<Sales />} />
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

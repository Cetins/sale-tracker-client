import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useParams} from "react-router-dom";
import Home from './containers/Home';
import Sales from './containers/Sales';
import Dashboard from './containers/Dashboard';
import Menu from './components/Menu';
import Footer from './components/Footer';
import NewProduct from './components/dashboard/NewProduct';
import './App.css';
import EditProduct from './components/dashboard/EditProduct';

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
          <Route path="product/:productId" element={<EditProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

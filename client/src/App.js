import React from "react";
import {Route, Routes} from 'react-router-dom'

import Login from './pages/Login.jsx'
import _Layout from "./components/Layout.jsx";
import Products from "./pages/Products.jsx";


function App() {
  return (
    <Routes>
      <Route path='/' element={<_Layout/>}>
        <Route path="login" element={<Login/>}/>
        <Route path="products" element={<Products/>}/>
      </Route>
    </Routes>
  );
}

export default App;

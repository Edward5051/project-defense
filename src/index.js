import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';
import DashboardPage from './pages/dashboard';
import ProductPage from './pages/productlistings';

import './index.css';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignupPage/>} />
          <Route path='/signin' element={<SigninPage/>} />
          <Route path='/dashboard' element={<DashboardPage/>} />
          <Route path='/productpage' element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    
  </React.StrictMode>
);


reportWebVitals();

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';
import DashboardPage from './pages/dashboard';
import ProductPage from './pages/productlistings';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
    <QueryClientProvider client={queryClient}>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignupPage/>} />
            <Route path="/signin" element={<SigninPage/>} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/productpage" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  </div>
  );
}

export default App;
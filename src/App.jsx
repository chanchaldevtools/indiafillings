import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Proprietorship from './components/Proprietorship';
import DocumentForm from './components/DocumentForm';
import TaxTable from './components/TaxTable';
import ViewTaxTable from './components/ViewTaxTable';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/proprietorship" element={<Proprietorship />} />
      <Route path="/document-form" element={<DocumentForm />} />
      <Route path='/tax-table' element={<TaxTable />} />
      <Route path='/view-tax-table' element={<ViewTaxTable />} />
    </Routes>
  );
}

export default App;

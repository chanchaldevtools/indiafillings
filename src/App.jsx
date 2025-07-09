// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Proprietorship from './components/Proprietorship';
import DocumentForm from './components/DocumentForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/proprietorship' element={<Proprietorship />} />
          <Route path='/document-form' element={<DocumentForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

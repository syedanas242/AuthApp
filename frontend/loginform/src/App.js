import './App.css';
import SignUpForm from './components/SignUpForm';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomeApp from './components/HomeApp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateIsAuthenticated = (value) => {
    setIsAuthenticated(value);
  }

  return (
    // <div SignUpForm />

    <Router>
      <Routes>
        <Route path="/home" element={ isAuthenticated ? <HomeApp /> : <Navigate to="/" />} />
        <Route path="/" element={<SignUpForm updateIsAuthenticated={updateIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './layout/MainLayout';

import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

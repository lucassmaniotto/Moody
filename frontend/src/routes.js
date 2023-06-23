import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

function AppRoutes() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;

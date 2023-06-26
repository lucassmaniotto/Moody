import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import { UserProvider } from './context/User';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Register } from './pages/Register';

function AppRoutes() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;

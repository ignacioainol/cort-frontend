import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Screens/Home';
import { Login } from './components/Screens/Login';
import { Header } from './components/partials/Header';
import { Register } from './components/Screens/Register';
import { ContextProvider } from './context/GlobalContext';
import { Perfil } from './components/Screens/Perfil';

function App() {
  return (
    <div>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/perfil/:id" element={<Perfil />}></Route>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;

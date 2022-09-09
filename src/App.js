import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './dialogs/LoginDialog';
import RegisterDialog from './dialogs/RegisterDialog';
import UserDetailsPage from './pages/UserDetailsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signin" element={<RegisterDialog/>}/>
          <Route path="/UserDetailsPage" element={<UserDetailsPage/>}/>
          <Route path="/ProfilePage" element={<ProfilePage/>}/>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./dialogs/LoginDialog";
import RegisterDialog from "./dialogs/RegisterDialog";
import UserDetailsPage from "./pages/UserDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { useContext } from "react";
import { UserContext   } from "./context/UserContext";

function App() {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<RegisterDialog />} />

        <Route element={<ProtectedRoutes auth={loggedInUser.isLoggedIn} />} />
        <Route path="/userDetail" element={<UserDetailsPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
  
  );
}

export default App;

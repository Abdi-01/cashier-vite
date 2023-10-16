import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth";
import DashboardPage from "./pages/Dashboard";
import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { loginAction } from './redux/action/accountAction'
import ManageAccountPage from "./pages/Manage/Account";
import { login } from "./redux/slice/accountSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      dispatch(login(JSON.parse(localStorage.getItem("auth"))));
    }
  }, []);
  return (
    <Container
      padding={"unset"}
      shadow={"md"}
      bg={"gray.100"}
      overflow={"hidden"}
      maxW={"6xl"}
      height={"100vh"}
    >
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dash" element={<DashboardPage />} />
        <Route path="/manage/account" element={<ManageAccountPage />} />
      </Routes>
    </Container>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/pages/header";
import LoginPage from "./components/pages/login";
import RegisterUser from "./components/pages/register";
import ResetPassword from "./components/pages/forgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<RegisterUser />} />
            <Route path="/password-reset" element={<ResetPassword />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

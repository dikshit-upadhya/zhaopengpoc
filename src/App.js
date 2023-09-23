import Login from "./views/Login";
import ApiCallComponent from "./views/ApiCallComponent";
import httpService from "./utils/axiosSetup/axios-interceptors";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// WE SET UP THE AXIOS INTERCEPTORS HERE.
httpService.setupInterceptors();

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/api-call-component" element={<ApiCallComponent />} />
      </Routes>
    </>
  );
}

export default App;

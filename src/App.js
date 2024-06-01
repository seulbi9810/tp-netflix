import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./pages/Movies/Movies";
import Detail from "./pages/Detail/Detail";
import AppLayout from "./Layout/AppLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundFile from "./pages/NotFoundFile/NotFoundFile";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/components/Login/Login";
import Signup from "./pages/Home/components/Signup/Signup";
import Reviews from "./pages/Reviews/Reviews";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Detail />} />
          <Route path="/movies/:id/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFoundFile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

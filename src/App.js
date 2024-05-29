import { Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './pages/Movies/Movies';
import Detail from './pages/Detail/Detail';
import AppLayout from './Layout/AppLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundFile from './pages/NotFoundFile/NotFoundFile';
import Home from './pages/Home/Home';



//홈페이지 / = index 와 같음
//영화 전체보여주는 페이지 (서치) /movies
//영화 디테일 페이지 /movies/:id
//추천 영화 /movies/:id/recommandation
//리뷰 /movies/:id/reviews

function App() {


  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}> 
          <Route index element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:id' element={<Detail/>}/>
      </Route>
      <Route path="*" element={<NotFoundFile/>}/>
    </Routes>
  );
}

export default App;

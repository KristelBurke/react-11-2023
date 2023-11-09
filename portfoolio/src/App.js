import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';

function App() {
  return (
    <div className="App">
      <img className="main-picture" src="https://cdn.cliqueinc.com/posts/300545/cool-girl-items-300545-1655259466171-square.700x0c.jpg" alt=""/>
      <div className="rectangle"></div>

      <div className="navigation-pictures">
        <Link className="main-link" to="work"></Link>
         <img src="https://i.pinimg.com/474x/61/c4/fa/61c4fa3bf3d2467a6d87ebcc6fd1ea13.jpg" alt=""/>
         <p>Toode lehele</p>

        <Link className="main-link" to="hobbies"></Link>
          <img src="https://pbs.twimg.com/profile_images/867703104061546498/Fn432rGr_400x400.jpg" alt=""/>
          <p>Hobide lehele</p>

        <Link className="main-link" to="courses"></Link>
          <img src="https://damoclesjournal.files.wordpress.com/2022/02/0x0.jpg" alt=""/>
          <p>Kursuste lehele</p>
      </div>

      <Routes>
        <Route path="work" element={ <Work />} />
        <Route path="hobbies" element={ <Hobbies />} />
        <Route path="courses" element={ <Courses /> } />
      </Routes>
    </div>
  );
}

export default App;

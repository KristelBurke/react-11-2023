import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <img className="main-picture" src="https://cdn.cliqueinc.com/posts/300545/cool-girl-items-300545-1655259466171-square.700x0c.jpg" alt=""/>
      <div className="rectangle"></div>

      <div className="navigation-pictures">
        <Link className="main-link" to="work"></Link>
         <img src="https://i.pinimg.com/474x/61/c4/fa/61c4fa3bf3d2467a6d87ebcc6fd1ea13.jpg" alt=""/>

        <Link to="hobbies"></Link>
          <img className="main-link" src="https://pbs.twimg.com/profile_images/867703104061546498/Fn432rGr_400x400.jpg" alt=""/>

        <Link className="main-link" to="courses"></Link>
          <img src="https://damoclesjournal.files.wordpress.com/2022/02/0x0.jpg" alt=""/>
      </div>

      <Routes>
        <Route path="work" element={ <Work />}></Route>
        <Route path="hobbies" element={ < Hobbies />}></Route>
        <Route path="courses" element={ < Courses /> }></Route>
      </Routes>
    </div>
  );
}

export default App;

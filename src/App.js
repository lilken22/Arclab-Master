// import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Nav from './Components/Nav';
import Landing from './Pages/Landing';
// import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import BlogDetails from './Components/BlogDetails';
import Project from './Pages/Project';
import Services from './Pages/Services';
import Teams from './Pages/Teams';
// import Content2 from './Blogy2/Content2';
// import BlogSingle from './Blogy2/BlogSingle';

// {/* <Nav className="" /> */}

function App() {
  return (
    <Router>
      <main className="w-full h-screen">
      
        <Routes>
          <Route path='/landing' element={<Landing />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact/>} />
          <Route path='blogs' element={<Blogs/>} />
          <Route path="/blogy2/:id" element={<BlogDetails />} />
          <Route path='project' element={<Project/>} />
          <Route path='service' element={<Services/>} />
          <Route path='team' element={<Teams/>} />
        </Routes>
      </main>
    </Router>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Pictures from './components/Pictures';
import Videos from './components/Videos';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pictures" element={<Pictures/>}/>
      <Route path="/videos" element={<Videos/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

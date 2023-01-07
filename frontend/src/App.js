import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link ,Routes , Route   } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to the leave management system</h1> */}
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Login/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import {Route,Routes} from 'react-router-dom'
import {Login} from './components/Login/Login'
import {Signup} from './components/Signup/Signup'
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;

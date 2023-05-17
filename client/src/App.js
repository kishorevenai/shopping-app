import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom'
import Layout from './Layout/Layout';
import Home from './Components/Home';
import Women from './Components/Women/Women';
 

function App() {
  return (
     <Routes>
        <Route path ='/' element = {<Layout/>}>
             <Route index element = {<Home/>}/>
             <Route path='products' element = {<Women/>}></Route>
        </Route>
     </Routes>
  );
}

export default App;

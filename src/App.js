
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Lore from './components/Lore/Lore';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team'
import FAQ from './components/FAQ/FAQ'
import Stupid from './components/Stupid/Stupid';
import Header from './components/Header/Header';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/lore' element={<Lore></Lore>}></Route>
        <Route path='/roadmap' element={<Roadmap></Roadmap>}></Route>
        <Route path='/stupid' element={<Stupid></Stupid>}></Route>
        <Route path='/team' element={<Team></Team>}>Team</Route>
        <Route path='/faq' element={<FAQ></FAQ>}>FAQ</Route>
       
      </Routes>
    </div>
  );
}

export default App;

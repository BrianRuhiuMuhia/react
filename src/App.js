import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Movie from "./components/Movie"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/homepage" element={<HomePage/>}></Route>
    <Route path="/movie/:id" element={<Movie/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );}

export default App;

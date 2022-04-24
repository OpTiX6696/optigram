import './App.scss';
import SearchQuery from './Components/SearchQuery';
import Facade from './Components/Facade';
import LikedPage from './Components/LikedPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Facade/>} />
          <Route exact path='/search' element={<SearchQuery />} />
          <Route exact path='/liked' element={<LikedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

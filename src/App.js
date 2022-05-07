import './App.scss';
import SearchQuery from './Components/SearchQuery';
import Facade from './Components/Facade';
import LikedPage from './Components/LikedPage';
import NotFound from './Components/NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './Components/BaseLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Facade/>} />
          <Route exact element={<BaseLayout />} >
            <Route exact path='/search' element={<SearchQuery />} />
            <Route exact path='/liked' element={<LikedPage />} />
          </Route>
          
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

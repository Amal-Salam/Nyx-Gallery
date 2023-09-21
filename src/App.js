import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Auth from './components/Auth';
import Gallery from'./components/gallery';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/Gallery' element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

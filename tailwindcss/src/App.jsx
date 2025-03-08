import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Docs from './components/Docs/Docs';
import Components from './components/Components/Components';
import Blog from './components/Blog/Blog';
import Showcase from './components/Showcase/Showcase';
import TailwindSetupGuide from './components/Docs/TailwindSetupGuide';
import Templates from './components/Templates/Templates'
import Documentation from './components/Documentation/Documentation';



const App = () => {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              {/* Redirect root path ("/") to "/docs" */}
              <Route path="/" element={<Navigate to="/docs" />} />
              <Route path="/docs" element={
              <>
              <Docs />
              <TailwindSetupGuide/>
               </>
              } 
              />
              
              <Route path="/components" element={<Components />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/showcase" element={<Showcase />} />


              {/* Sidebar */}
              <Route path='/Templates' element={<Templates/>}/>
              <Route path='/Documentation' element={<Documentation/>}/>
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

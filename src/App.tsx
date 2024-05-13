// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Dashboard from './dashboard';
// import Header from './Header';
// import { Outlet } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Dashboard />
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Finance from './components/Finance';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div>
          <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/finance" Component={Finance} />
          </Routes>
          {/* <Route path="/contact" component={Contact} />
          <Route component={NotFound} /> */}
      </div>
    </Router>
  );
}

export default App;


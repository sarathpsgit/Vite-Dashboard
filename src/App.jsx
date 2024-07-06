import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Expenses from './components/Expenses.jsx';
import Summary from './components/Summary.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import './styles.css';

const App = () => {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 bg-dark text-white p-0'>
          <Sidebar />
        </div>
        <div className='col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12'>
          <div className=' bg-white rounded-corner'>
            <Header />
            <Expenses />
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

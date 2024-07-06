import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Expenses from './components/Expenses.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
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
            <Expenses />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import Profile from './Profile.jsx';
import Menu from '../assets/images/menu.svg';
const Sidebar = () => {
  return (
<div>


      <div className="collapse d-block" id="sidebarMenu">
        <div className="sidebar px-5">
          <div className="profile mb-4 pt-5">
            <Profile />
            <h4 className='username'>Samantha</h4>
            <p className='mailid'>samantha@email.com</p>
          </div>
          <ul className="nav flex-column ps-0 py-5">
            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Expenses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Wallets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Summary</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Accounts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

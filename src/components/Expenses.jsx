import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import People from '../assets/images/people.svg';
import People2 from '../assets/images/people2.svg';
import People3 from '../assets/images/people3.svg';
import addpeople from '../assets/images/add-people.svg';
import Threedot from '../assets/images/threeedot.svg';
import Cart from '../assets/images/cart-icon.svg';
import Transportation from '../assets/images/transportation-icon.svg';
import Housing from '../assets/images/Housing-icon.svg';
import Fooding from '../assets/images/Fooding-icon.svg';
import Entertainment from '../assets/images/Entertainment-icon.svg';
import Illus2 from '../assets/images/illus2.svg';

import BarGraph from './BarGraph';

const Expenses = () => {
  return (
    <div className="expenses">
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 text-dark cust-padd1'>
            <h1>Expenses
              <span className='people-lsit float-end'>
                <ul>
                  <li><img src={People}></img></li>
                  <li><img src={People2}></img></li>
                  <li><img src={People3}></img></li>

                  <li className='mx-2'>
                    <a href="your-link-here" className="mx-2">
                      <img src={addpeople}></img>
                    </a>
                  </li>
                </ul>
              </span>
            </h1>
            <div className='date'>01 - 25 March, 2020
            </div>
            <BarGraph />
            <h2 className='mt-5 subhead'>Today <span className='float-end'>  <a href="your-link-here" className="mx-2">
              <img src={Threedot}></img> </a></span> </h2>
            <hr></hr>
            <div className='container-fluid p-0 item'>
              <div className='row'>
                <div className='col-2 p-0 text-center'>
                  <img src={Cart}></img>
                </div>
                <div className='col-6 p-0'>
                  <div className='item-name'>Grocery</div>
                  <div className='item-time'>5:12 pm  <span className='item-place'>•  Belanja di pasar</span></div>
                </div>
                <div className='col-4 p-0'>
                  <div className='price text-end'>-326.800</div>
                </div>
              </div>
            </div>

            <div className='container-fluid p-0 item'>
              <div className='row'>
                <div className='col-2 p-0 text-center'>
                  <img src={Transportation}></img>
                </div>
                <div className='col-6 p-0'>
                  <div className='item-name'>Transportation</div>
                  <div className='item-time'>5:12 pm  <span className='item-place'>• Naik bus umum</span></div>
                </div>
                <div className='col-4 p-0'>
                  <div className='price text-end'>-15.000</div>
                </div>
              </div>
            </div>

            <div className='container-fluid p-0 item'>
              <div className='row'>
                <div className='col-2 p-0 text-center'>
                  <img src={Housing}></img>
                </div>
                <div className='col-6 p-0'>
                  <div className='item-name'>Housing</div>
                  <div className='item-time'>5:12 pm  <span className='item-place'>•  Bayar Listrik</span></div>
                </div>
                <div className='col-4 p-0'>
                  <div className='price text-end'>-185.750</div>
                </div>
              </div>
            </div>

            <h2 className='mt-5 subhead'>Monday, 23 March 2020 <span className='float-end'>  <a href="your-link-here" className="mx-2">
              <img src={Threedot}></img> </a></span> </h2>
            <hr></hr>

            <div className='container-fluid p-0 item'>
              <div className='row'>
                <div className='col-2 p-0 text-center'>
                  <img src={Fooding}></img>
                </div>
                <div className='col-6 p-0'>
                  <div className='item-name'>Food and Drink</div>
                  <div className='item-time'>5:12 pm  <span className='item-place'>•  Makan Steak</span></div>
                </div>
                <div className='col-4 p-0'>
                  <div className='price text-end'>-156.000</div>
                </div>
              </div>
            </div>

            <div className='container-fluid p-0 item'>
              <div className='row'>
                <div className='col-2 p-0 text-center'>
                  <img src={Entertainment}></img>
                </div>
                <div className='col-6 p-0'>
                  <div className='item-name'>Entertainment</div>
                  <div className='item-time'>5:12 pm  <span className='item-place'>•   Nonton Bioskop</span></div>
                </div>
                <div className='col-4 p-0'>
                  <div className='price text-end'>-35.200</div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 text-dark bg-light  cust-padd2'>
            <h2 className='sideheading'>Where your money go?</h2>


            <div className='progressitem'>
              <div className='progressname'>Food and Drinks<span className='float-end'>872.400</span></div>
              <div className="progress mt-2">
      <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div className='progressitem'>
              <div className='progressname'>Shopping<span className='float-end'>872.400</span></div>
              <div className="progress mt-2">
      <div className="progress-bar bg-success" role="progressbar" style={{ width: '10%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className='progressitem'>
              <div className='progressname'>Housing<span className='float-end'>872.400</span></div>
              <div className="progress mt-2">
      <div className="progress-bar bg-success" role="progressbar" style={{ width: '20%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className='progressitem'>
              <div className='progressname'>Transportation<span className='float-end'>872.400</span></div>
              <div className="progress mt-2">
      <div className="progress-bar bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className='progressitem'>
              <div className='progressname'>Vehicle<span className='float-end'>872.400</span></div>
              <div className="progress mt-2">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>


            <div className='savemoney mt-5'>
              <img className='float-end' src={Illus2}></img>
              <div className='savetitle'>Save more money</div>
              <p className='save-text'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
              <button type="button" className="btn btn-primary w-100 mt-2">
                View Tips
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;

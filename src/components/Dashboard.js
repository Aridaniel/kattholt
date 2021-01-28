import React from 'react';
import Modal from './CatProfileModal';
import Logo from "../img/logo_horizontal.svg";
import {Link} from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <Link to= "/">
        <img src={Logo}/>
      </Link>
      <div className='header'>
        <button>Ný kisa</button>
        <button>search</button>
      </div>

      <div className='tabs'>
        <div className='btn_athvarf'>
          <button>Athvarf</button>
        </div>
        <div className='btn_hotel'>
          <button>Hotel</button>
        </div>
      </div>
      <Modal />
    </>
  );
}

export default Dashboard;

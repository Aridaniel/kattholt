import React from 'react';
import Modal from './CatProfileModal';
import Logo from '../img/logo_horizontal.svg';
import { Link } from 'react-router-dom';
import NewCatModal from '../components/NewCatModal'
import  Search  from "../components/Search";

function Dashboard() {
  return (
    <>
      <Link to='/'>
        <img src={Logo} />
      </Link>
      <div className='header'>
       <NewCatModal/>
       
        <Search/>
        
      </div>

      {/* <div className='tabs'>
        <div className='btn_athvarf'>
          <button onclick=''className='btn'>Athvarf</button>
        </div>
        <div className='btn_hotel'>
          <button className='btn'>Hotel</button>
        </div>
      </div> */}
      <Modal />
    </>
  );
}

export default Dashboard;

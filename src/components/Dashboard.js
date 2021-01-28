import React from 'react';
import Modal from './CatProfileModal';

function Dashboard() {
  return (
    <>
      <h1>Loppan</h1>
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

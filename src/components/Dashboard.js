import React, {useState} from 'react';
import CatProfileModal from './CatProfileModal';
import Logo from '../img/logo_horizontal.svg';
import { Link } from 'react-router-dom';
import NewCatModal from '../components/NewCatModal'
import  Search  from "../components/Search";


function Dashboard() {

  const [modalContent, setModalContent] = useState({});
  const [modalIsOpen,  setIsOpen] = useState(false);







  return (
    <>
      <Link to='/'>
        <img src={Logo} />
      </Link>
      <div className='header'>
       <NewCatModal/>
       
       <Search setUpdateCatModalContent={setModalContent} setUpdateCatIsOpen={setIsOpen}  />
        
      </div>

    
      <CatProfileModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalContent= {modalContent} setModalContent={setModalContent}/>
    </>
  );
}

export default Dashboard;

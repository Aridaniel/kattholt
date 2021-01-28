import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';

// cat photo
const url =
  'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg';

function CatProfileModal() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch("http://localhost:4000/api");
      const data = await response.json();
      setContent(data);
    }

    fetchData();
  },[]);

  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    {/* This is the button that opens the modal/ cat profile  */}
    {content.map((i)=>{
      return(
        <button className='cat-container' onClick={openModal}>
        <div>
          <img src={url} alt='' />
          <div className='cat-info'>
            <div className='name'>
              <h1>{i.heitiKattar}</h1>
              <p>{i.aldur}</p>
            </div>
            <div className='ormerki'>{i.ormerking}</div>
          </div>
        </div>
      </button>
      )
    })}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Example Modal'
      >
        <button onClick={closeModal}>close</button>
        <div key={content._id}>
          <img src={url} alt='' />
          <div className='cat-info'>
            <div className='name'>
              <h1>{content.heitiKattar}</h1>
              <p>{content.aldur}</p>
            </div>
            <div className='ormerki'>{content.ormerking}</div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CatProfileModal;

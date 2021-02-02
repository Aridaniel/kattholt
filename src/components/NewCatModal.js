import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';


//States
function NewCatModal() {
  const [content, setContent] = useState([]);
  const [submit, setSubmit] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);


  // OPEN & CLOSE modal
  function openModal(catInfo) {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api');
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);





  const apiUrl = 'http://localhost:4000/kittyprofile';

  // Post cat
  const postCat = async () => {
    console.log(submit);
    window.location.reload();
    await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(submit),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  };

  const handleChanger = (e) => {
    setSubmit({
      ...submit,
      [e.target.name]: e.target.value,
    })
  };







  return (
    <>
      {/* This is the button that opens the modal/ cat profile  */}

      <button className='btn' onClick={() => openModal()}>
        New Cat
      </button>

      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        contentLabel='Example Modal'
      >
        {/* Close modal button */}
        <button  onClick={closeModal}>
          <GrClose />
        </button>

        <div className= 'catKassi' key={content._id}>
          <img style={{ height: '200px', width: '200px' }} alt='' />
          <div className='cat-info'>
            <div className='newcatfields'>
              <h1>Cat Name</h1>
              <label> Heiti Kattar: </label>
              <input
                name='heitiKattar'
                onChange={handleChanger}
                placeholder='Cat Name'
                type='text'
              />
              <label>Kyn: </label>
              <input
                name='Kyn'
                onChange={handleChanger}
                placeholder='Kyn'
                type='text'
              />
              <label>Aldur: </label>
              <input
                onChange={handleChanger}
                placeholder='Aldur'
                type='text'
              />
              <label>Örmerking: </label>
              <input
                name='Örmerking'
                onChange={handleChanger}
                placeholder='Örmerking'
                type='text'
              />
              <label>Litur: </label>
              <input
                name='Litur'
                onChange={handleChanger}
                placeholder='Litur'
                type='text'
              />
              <label>Heiti Eiganda</label>
              <input
                name='Heiti Eiganda'
                onChange={handleChanger}
                placeholder='Heiti Eiganda'
                type='text'
              />
              <label>Kennitala Eiganda</label>
              <input
                name='Kennitala Eiganda'
                onChange={handleChanger}
                placeholder='Kennitala Eiganda'
                type='text'
              />
              <label>Heimilisfang Eiganda</label>
              <input
                name ='Heimilisfang Eiganda'
                onChange={handleChanger}
                placeholder='Heimilisfang Eiganda'
                type='text'
              />
            </div>
          </div>
        </div>

        <button className= 'btn' onClick={postCat}>New Cat</button>
      </Modal>
    </>
  );
}

export default NewCatModal;

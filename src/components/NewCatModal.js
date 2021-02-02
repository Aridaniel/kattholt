import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { GrFormClose } from 'react-icons/gr';

function NewCatModal() {
  const [content, setContent] = useState([]);
  const [submit, setSubmit] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

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
    await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(submit),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((x)=>{
        console.log(x)
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
        <button onClick={closeModal}>
          <GrFormClose />
        </button>

        <div key={content._id}>
          <img style={{ height: '200px', width: '200px' }} alt='' />
          <div className='cat-info'>
            <div className='newcatfields'>
              <h1>Cat Name</h1>
              <input
                name='heitiKattar'
                onChange={handleChanger}
                placeholder='Cat Name'
                type='text'
              />
              <input
                name='CatName'
                onChange={handleChanger}
                placeholder='Cat Gender'
                type='text'
              />
              <input
                onChange={handleChanger}
                placeholder='CatName'
                type='text'
              />
              <input
                name='CatName'
                onChange={handleChanger}
                placeholder='CatName'
                type='text'
              />
              <input
                name='CatName'
                onChange={handleChanger}
                placeholder='CatName'
                type='text'
              />
              <input
                name='CatName'
                onChange={handleChanger}
                placeholder='CatName'
                type='text'
              />
              <input
                name='CatName'
                onChange={handleChanger}
                placeholder='CatName'
                type='text'
              />
              <input
                name='CatName'
                onChange={handleChanger}
                placeholder='CatName'
                type='text'
              />
              <input
                name='CatName'
                onChange={handleChanger}
                placeholder='CatName'
                type='text'
              />
            </div>
          </div>
        </div>

        <button onClick={postCat}>Submit Cat</button>
      </Modal>
    </>
  );
}

export default NewCatModal;

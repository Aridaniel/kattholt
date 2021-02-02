import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { GrFormClose } from 'react-icons/gr';

import Loading from '../img/loading.gif';

// cat photo
const url =
  'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg';

function CatProfileModal() {
  const [content, setContent] = useState([]);
  const [modalContent, setModalContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:4000/api');
        const data = await response.json();
        setContent(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function openModal(catInfo) {
    setIsOpen(true);
    setModalContent(catInfo);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Delete cat from DB

  const apiUrl = 'http://localhost:4000/kittyprofile/';

  // deleting cat from project
  const deleteCat = async (id) => {
    await fetch(apiUrl + id, {
      method: 'DELETE',
    }).then(() => {
      setIsOpen(false);
      setContent(content.filter((c) => c['_id'] !== id));
      console.log(content.filter((c) => c['_id'] !== id));
    });
  };

  // update cat info
  const updateCat = async (id) => {
    await fetch(apiUrl + id, {
      method: 'PUT',
    }).then(() => {
      setIsOpen(false);
    })
  };

  // loading screen before the API loads fully

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <img src={Loading} alt='' />
      </div>
    );
  }

  return (
    <>
      {/* This is the button that opens the modal/ cat profile  */}
      {content.map((i) => {
        return (
          <button
            key={i._id}
            className='cat-container'
            onClick={() => openModal(i)}
          >
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
        );
      })}

      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        contentLabel='Example Modal'
      >
        <button onClick={closeModal}>
          <GrFormClose />
        </button>

        <div key={content._id}>
          <img style={{ height: '200px', width: '200px' }} src={url} alt='' />
          <div className='cat-info'>
            <div className='name'>
              <h1 contentEditable='true'>{modalContent.heitiKattar}</h1>
              <p contentEditable='true'>{modalContent.kyn}</p>
              <p contentEditable='true'>{modalContent.aldur}</p>
              <p contentEditable='true'>{modalContent.ormerking}</p>
              <p contentEditable='true'>{modalContent.litur}</p>
              <p contentEditable='true'>{modalContent.heitiEigandi}</p>
              <p contentEditable='true'>{modalContent.ktEigandi}</p>
              <p contentEditable='true'>{modalContent.heimilisfangEigandi}</p>
              <p contentEditable='true'>{modalContent.simiEigandi}</p>
              <p contentEditable='true'>{modalContent.athugasemdir}</p>
            </div>
          </div>
        </div>
        <button className="btn" onClick={() => deleteCat(modalContent._id)}>Delete Cat</button>
        <button className="btn" onClick={() => updateCat(modalContent._id)}>Save Changes</button>
      </Modal>
    </>
  );
}

export default CatProfileModal;

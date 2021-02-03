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

  // DELETE cat from DB

  const apiUrl = 'http://localhost:4000/kittyprofile/';

  // deleting cat from project
  const deleteCat = async (id) => {
    try {
      await fetch(apiUrl + id, {
        method: 'DELETE',
      }).then(() => {
        setIsOpen(false);
        setContent(content.filter((c) => c['_id'] !== id));
        console.log(content.filter((c) => c['_id'] !== id));
      });
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE cat info

  const changeCat = (e) => {
    setModalContent({
      ...modalContent,
      [e.target.name]: e.target.value,
    });
  };

  const updateCat = async (id) => {
    await fetch(apiUrl + id, {
      method: 'PUT',
      body: JSON.stringify(modalContent),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setIsOpen(false);
      window.location.reload();
    });
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
            <div className='catprofilebox'>
              <img className="catProfilePic" src={url} alt='' />
              <div className='cat-info'>
                <div className='name'>
                  <h1>{i.heitiKattar}</h1>
                  <h3>Age</h3>
                  <p>{i.aldur}</p>
                </div>
                <h3>Örmerking</h3>
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
            <div className='newcatfields'>
              <label> Heiti Kattar: </label>
              <input
                name='heitiKattar'
                onChange={changeCat}
                placeholder={modalContent.heitiKattar}
              />
              <label> Kyn: </label>
              <input
                name='kyn'
                onChange={changeCat}
                placeholder={modalContent.kyn}
              />
              <label> Aldur: </label>
              <input
                name='aldur'
                onChange={changeCat}
                placeholder={modalContent.aldur}
              />
              <label> Örmerking: </label>
              <input
                name='ormerking'
                onChange={changeCat}
                placeholder={modalContent.ormerking}
              />
              <label> Litur: </label>
              <input
                name='litur'
                onChange={changeCat}
                placeholder={modalContent.litur}
              />
              <label> Heiti Eiganda: </label>
              <input
                name='heitiEigandi'
                onChange={changeCat}
                placeholder={modalContent.heitiEigandi}
              />
              <label> Kennitala Eiganda: </label>
              <input
                name='ktEigandi'
                onChange={changeCat}
                placeholder={modalContent.ktEigandi}
              />
              <label> Heimilisfang Eiganda: </label>
              <input
                name='heimilisfangEigandi'
                onChange={changeCat}
                placeholder={modalContent.heimilisfangEigandi}
              />
              <label> Sími Eiganda: </label>
              <input
                name='simiEigandi'
                onChange={changeCat}
                placeholder={modalContent.simiEigandi}
              />
              <label> Athugasemdir: </label>
              <input
                name='athugasemdir'
                onChange={changeCat}
                placeholder={modalContent.athugamsemdir}
              />
            </div>
          </div>
        </div>
        <button className='btn' onClick={() => deleteCat(modalContent._id)}>
          Delete Cat
        </button>
        <button className='btn' onClick={() => updateCat(modalContent._id)}>
          Save Changes
        </button>
      </Modal>
    </>
  );
}

export default CatProfileModal;

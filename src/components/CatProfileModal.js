import React, { useState, useEffect } from 'react';
// We used react modals for the form components
import Modal from 'react-modal';
// We used react icons
import { GrFormClose } from 'react-icons/gr';
// This is for the loading gif to display right before the API data arrives
import Loading from '../img/loading.gif';

// dummy cat photo for the project
const photoUrl =
  'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg';

function CatProfileModal({modalIsOpen, modalContent, setIsOpen, setModalContent}) {
  // state for each item in the DB
  const [content, setContent] = useState([]);
  // state for each individual item in the D
  // state for the loading screen that appears while fetching the API
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    // Fetching data
    const fetchData = async () => {
      // Loading GIF state
      setLoading(true);
      // Try & catch error handling
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

  // Setting the state for both whether the modal is open or not and individual items from the DB
  function openModal(catInfo) {
    setIsOpen(true);
    setModalContent(catInfo);
  }

  // for the exit modal button from react icons"x"
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

  // Update cat button
  const updateCat = async (id) => {
    await fetch(apiUrl + id, {
      method: 'PUT',
      body: JSON.stringify(modalContent),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setIsOpen(false);
      // each time cat is updateed the modal closes and page refreshes.
      window.location.reload();
    });
  };

  // loading screen before the API loads fully. If still loading the data, display GIF if ready display the API data.
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
      {content.slice(0).reverse().map((i) => {
        return (
          <button
            key={i._id}
            className='cat-container'
            onClick={() => openModal(i)}
          >
            <div className='catprofilebox'>
              <img className='catProfilePic' src={photoUrl} alt='' />
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
        closeTimeoutMS={200}
        ariaHideApp={false}
        onRequestClose={closeModal}
        contentLabel='Example Modal'
        style={{
          content: {
            maxWidth: '700px',
            margin: '0 auto',
            border: '2px solid rgb(105, 105, 105)',
            background: 'rgb(212, 211, 211)',
            borderRadius: '11px',
          },
        }}
      >
        <button onClick={closeModal}>
          <GrFormClose />
        </button>

        <div key={content._id}>
          <img
            style={{ height: '200px', width: '200px' }}
            src={photoUrl}
            alt=''
          />
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
                placeholder={modalContent.athugasemdir}
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

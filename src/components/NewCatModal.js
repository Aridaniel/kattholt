import React, { useState, useEffect } from 'react';
// We used react modals for the form components
import Modal from 'react-modal';
// We used react icons
import { GrClose } from 'react-icons/gr';

//States
function NewCatModal() {
  // state for each item in the DB
  const [content, setContent] = useState([]);
  // state for each individual item in the DB
  const [submit, setSubmit] = useState({});
  // state of modal whether it's open or not
  const [modalIsOpen, setIsOpen] = useState(false);

  // OPEN & CLOSE modal
  function openModal(catInfo) {
    setIsOpen(true);
  }
  // for the exit modal button from react icons"x"
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      // Try & catch error handling
      try {
        const response = await fetch('http://161.35.32.243:4000/api');
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  // API url used in the function below
  const apiUrl = 'http://161.35.32.243:4000/kittyprofile';



  // Post cat for adding a new cat to the DB
  const postCat = async () => {
    // Try & catch error handling
    try {
      // each time cat is posted the modal closes and page refreshes.
       window.location.reload();
      await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(submit),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // For submitting the POST request
  const handleChanger = (e) => {
    setSubmit({
      ...submit,
      [e.target.name]: e.target.value,
    });
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
        closeTimeoutMS={200}
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
        {/* Close modal button */}
        <button onClick={closeModal}>
          <GrClose />
        </button>

        <div className='catKassi' key={content._id}>
          <div className='cat-info'>
            <div className='newcatfields'>
              <h2>Ný kisa</h2>
              <p>
                Bættu kisunni við með því að fylla inn í skjalið hér að neðan.
              </p>
              <label> Heiti Kattar: </label>
              <input name='heitiKattar' onChange={handleChanger} type='text'  />

              <label>Kyn: </label>
              <input name='kyn' onChange={handleChanger} type='text' />

              <label> Aldur: </label>
              <input name='aldur' onChange={handleChanger} type='text' />

              <label>Örmerking: </label>
              <input name='ormerking' onChange={handleChanger} type='text' />

              <label>Litur: </label>
              <input name='litur' onChange={handleChanger} type='text' />
              <label>Heiti Eiganda:</label>
              <input
                name='heitiEigandi'
                onChange={handleChanger}
                type='text'
              />
              <label>Kennitala Eiganda:</label>
              <input
                name='ktEigandi'
                onChange={handleChanger}
                type='text'
              />
              <label>Heimilisfang Eiganda:</label>
              <input
                name='heimilisfangEigandi'
                onChange={handleChanger}
                type='text'
              />
              <label>Sími Eiganda:</label>
              <input
                name='simiEigandi'
                onChange={handleChanger}
                type='text'
              />
              <label>Athugasemdir:</label>
              <input
                name='athugasemdir'
                onChange={handleChanger}
                type='text'
              />
            </div>
          </div>
        </div>

        <button className='btn' onClick={postCat}>
          Add Cat
        </button>
      </Modal>
    </>
  );
}

export default NewCatModal;

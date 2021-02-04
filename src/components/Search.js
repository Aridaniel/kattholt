import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';



// cat photo
const url =
  'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg';

function Search({setUpdateCatIsOpen, setUpdateCatModalContent}) {
  const [content, setContent] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');


  

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



  //OPEN MODAL
  function openModal() {
    setIsOpen(true);  
  }

  function closeModal() {
    setIsOpen(false);
  }

  

  const apiUrl = 'http://localhost:4000/kittyprofile/';



//OpenMOdal in Find
const openUpdateCat = (catInfo)=>{
    setUpdateCatIsOpen(true)
    setUpdateCatModalContent(catInfo)
}




// handleFind function when on onchange is triggerd

const handleFind = (e) => {
    setSearch(e.target.value)
}



//Findcat function when onlclick is triggered
  const findCat = async (id) => {
    await fetch("http://localhost:4000/findcat/" + content.heitiKattar, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setIsOpen(false);
    
    });
  };





  



  //Filter CAt 

  const filterCat = content.filter(value =>{
      
      const numb = value.ormerking ? value.ormerking.toString():('')
      return value.heitiKattar.toLowerCase().includes(search.toLowerCase())
      || numb.toLowerCase().includes(search.toLowerCase())
     
  })








  return (
    <>
      

        <button className='btn' onClick={() => openModal()}>
        Find Cat
      </button>

      

      
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        contentLabel='Example Modal'
      > 
          <div className= 'closecatFind'>
            <button  onClick={closeModal}>
            <GrClose />
            </button>
        </div>

        <div className= 'searchCatModal'>
            <div className= 'catinFind'>
                    {/* Close modal button */}
              
        
                {filterCat.map((i) =>{
        
                return (
                
            <button onClick= {()=>openUpdateCat(i)}
                key={i._id}
                className='cat-container'
            
            >
                <div className='catProfileBox'>
                <img src={url} alt='' />
                <div className='cat-info'>
                    <div className='name'>
                    <h1>{i.heitiKattar}</h1>
                    <p >{i.ormerking}</p>
                    <p>{i.aldur}</p>
                    <p>{i.heitiEigandi}</p>
                    <p>{i.heimilisfangEigandi}</p>
                    <p>{i.ktEigandi}</p>
                    </div>
                </div>
                </div>
            </button>
            );
        })}
                    
                    
            </div>

            

            <div className='catKassi' key={content._id}>
            <div className='cat-info'>
                    <div className='newcatfields'>
                        <h2>Finna kisa</h2>
                    
                        <label> Heiti Kattar: </label>
                        <input name='heitiKattar'   
                        type='text' 
                        value= {content.heitiKattar}
                        onChange= {handleFind}
                        />
                        
                        <label>Örmerking: </label>
                        <input name='Örmerking'  
                        type='text' 
                        value= {content.ormerking}
                        onChange= {handleFind} 
                        />
                    
                        <label>Heiti Eiganda:</label>
                        <input
                            name='Heiti Eiganda'
                            onChange= {handleFind}
                            type='text'
                            
                        />
                    
                        <label>Heimilisfang Eiganda:</label>
                        <input
                            name='Heimilisfang Eiganda'
                            onChange= {handleFind}
                            type='text'
                        />
                    </div>

                    <button className='btn' onClick={findCat}>
                    Find Cat
                    </button>

            </div>
            </div>
        </div>
        
      </Modal>
    </>
  );
}

export default Search;

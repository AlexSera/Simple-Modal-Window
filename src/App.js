import React, { useState } from 'react';
import './App.css';


const Modal = ({ vision, click }) => {  

  
  const handleClickModalClose = () => {
    click()
  }

  const handleClickModalBox = (e) => {
    e.stopPropagation()
  }

  let styleModal

  if (vision) {
    styleModal = {display: 'block'}
  } else {
    styleModal = {display: 'none'}
  }

  return(
    <>
    <div onClick={handleClickModalClose} className='substrate' style={styleModal}>
      <div className='modal-wrap'>
        <div onClick={handleClickModalBox} className='modal-box'>
            <div onClick={handleClickModalClose} className='modal-close' ></div>
            <div className='modal-header'>
            <h1>Header Modal</h1>
            </div>
            <div className='modal-content'>                
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                
            </div>    
            <div className='modal-footer'>
                <h1>Footer Modal</h1>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

const App = () => { 
  const [visionModal, setVisionmodal] = useState(false)

  const handleClickButton = () => {
    if (!visionModal) {
      setVisionmodal(true)
    } else {
      setVisionmodal(false)
    }
  }

  return (
    <>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <button onClick={handleClickButton}>{visionModal ? "Modal Close" : "Modal Open"}</button>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <h1>sample text</h1>
      <Modal vision={visionModal} click={handleClickButton}/>
    </>
  );
}

export default App;
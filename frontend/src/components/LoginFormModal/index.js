import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='signin-button' onClick={() => setShowModal(true)}>Sign In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm modalClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
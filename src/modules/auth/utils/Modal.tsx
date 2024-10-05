import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './interface/interface';


const Modal: React.FC<ModalProps>  = ({ isOpen , onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
        <h3 className="text-lg font-semibold mb-4">Terms and Conditions</h3>
        <p className="mb-4">
          <strong>User Data:</strong> Consent to collect name and profile picture from Gmail.
        </p>
        <p className="mb-4">
          <strong>API Keys:</strong> Provide API keys from Dhan and Zerodha.
        </p>
        <p className="mb-4">
          <strong>Responsibilities:</strong> Ensure information accuracy and keep credentials confidential.
        </p>
        <p className="mb-4">
          <strong>Use of Information:</strong> Used to improve app functionality and user experience.
        </p>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

import { useState } from "react";
import Modal from "../utils/Modal";

const Signup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked(e.target.checked);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="h-screen flex justify-center items-center">
      <section className="grid grid-cols-12 bg-white p-8 rounded shadow-lg w-2/3 h-2/3 relative">
        <div id="imageBlock" className="col-start-1 col-span-6 relative partial-border-right">
          {/* Image Block Content */}
          <img className="h-full w-full" src="/bulllogo.png" alt="" />
        </div>
        <div id="formBlock" className="col-start-7 col-span-6 w-full text-center flex justify-center items-center flex-col">
          {/* Form Block Content */}
          <h2 className="text-lg font-semibold mb-4">Start jotting your progress with ShareLog!</h2>
          <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm cursor-pointer" onClick={handleOpenModal}>
                I agree to the <span className="text-blue-500 underline">terms and conditions</span>
              </label>
            </div>
            <button
            className={`bg-blue-500 text-white px-4 py-2 rounded shadow-lg ${!isChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!isChecked}
          >
            Google Sign Up
          </button>
          </div>
          
 
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>

  );
};

export default Signup;
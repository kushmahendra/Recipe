import React from 'react';
import { useGlobalContext } from '../context';

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal;

  function RecipeInstructions({ text }) {
    // Split the text at full stops to create an array of sentences
    const sentences = text.split('.').map((sentence, index) => sentence.trim());

    return (
      <ul style={{ listStyleType: 'disc' ,margin:'3rem' }}>
        {sentences.map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))}
      </ul>
    );
  }

return (
  <aside className="modal-overlay">
    <div className="modal-container">
      <button className="btn btn-hipster close-btn" onClick={closeModal}>
        Close
      </button>
      <img src={image} className="img modal-img" alt={title} />
      <div className="modal-content">
        <h4>{title}</h4>
        <p>Cooking Instructions</p>
        <RecipeInstructions text={text} />
        <a href={source} target="_blank" rel="noopener noreferrer">
          Original Source
        </a>
      </div>
    </div>
  </aside>
);
};
export default Modal;

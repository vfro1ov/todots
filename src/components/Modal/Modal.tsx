import React, { useState } from 'react';
import './Modal.css'

interface ModalProps {
  onAddTodo: (text: string) => void;
  onClose: () => void;
}

const Modal = ({ onAddTodo, onClose }: ModalProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTodo(text);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={event => setText(event.target.value)} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
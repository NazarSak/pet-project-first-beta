import React, { useState, useEffect } from 'react';
import {
  ExitContainer,
  Logo,
  ExitButton,
  ModalWrapper,
  ModalContent,
} from './ExitModalka.styled';

export const ExitModalka = ({ user, handleClick }) => {
  const [isModalkaOpen, setIsModalkaOpen] = useState(false);

  console.log(isModalkaOpen);

  const OpenModalka = () => {
    setIsModalkaOpen(true);
  };

  const closeModal = () => {
    setIsModalkaOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleOutsideClick = e => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };

    if (isModalkaOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isModalkaOpen]);

  return (
    <>
      <ExitContainer>
        <Logo>Welcome:{user}</Logo>
        <ExitButton onClick={OpenModalka}>Exit</ExitButton>
      </ExitContainer>
      {isModalkaOpen && (
        <ModalWrapper onClick={closeModal}>
          <ModalContent>
            <h2>Шо ти тут забуло бидло</h2>
            <p>Теряйся отсюда</p>
            <button onClick={handleClick}>Піти нахер</button>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

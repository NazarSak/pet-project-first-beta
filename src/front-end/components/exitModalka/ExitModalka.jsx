import React, { useState, useEffect } from 'react';
import {
  ExitContainer,
  Logo,
  ExitButton,
  ModalWrapper,
  ModalContent,
  Title,
  ButtonAgree,
  ButtonDisagree,
  ButContainer,
  DaggerSvg,
  Stick,
} from './ExitModalka.styled';
import close from '../../../assets/svgImage/close.svg';

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
        <Stick />
        <ExitButton onClick={OpenModalka}>Exit</ExitButton>
      </ExitContainer>
      {isModalkaOpen && (
        <ModalWrapper onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Title>Do you really want to leave?</Title>
            <ButContainer>
              <ButtonAgree onClick={handleClick}>Yes</ButtonAgree>
              <ButtonDisagree onClick={closeModal}>No</ButtonDisagree>
              <DaggerSvg src={close} alt="dagger" onClick={closeModal} />
            </ButContainer>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

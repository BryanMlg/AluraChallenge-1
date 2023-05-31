import React from 'react';
import Style from '@styles/Button.module.css';

export default function Button({ Description, onClick, onClickD, onClickC }) {
  const buttonClass =
    Description === 'Desencriptar'
      ? Style.ButtonDes
      : Description === 'Encriptar'
      ? null
      : Style.ButtonCopy;

  return (
    <button className={buttonClass} onClick={onClick || onClickD || onClickC}>
      {Description}
    </button>
  );
}

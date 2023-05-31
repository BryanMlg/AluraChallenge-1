import React from 'react';
import Style from '@styles/TextArea.module.css';

export default function TextArea({ Description, value, onChange, onClick }) {

  return (
    <>
      {Description && (
        <section className={Style.Container}>
          <textarea
            className={Style.Container__textarea}
            name='Encriptacion'
            defaultValue={value || 'Ingrese un texto Aquí'}
            onChange={onChange}
            onClick={onClick}
          />
        </section>
      )}
      {!Description && (
        <section className={Style.Container}>
          {value ? (
            <textarea
              className={Style["Container__textarea2--Hide"]}
              name='Desencriptacion'
              value={value}
            />
          ) : (
            <textarea
              className={Style.Container__textarea2}
              name='Desencriptacion'
              value={value}
            />
          )}
          {value ? null : (
            <div className={Style.Container_Text}>
              <p>Ningún mensaje fue encontrado</p>
              <p>Ingresa el texto que deseas encriptar o desencriptar</p>
            </div>
          )}
        </section>
      )}
    </>
  );
}

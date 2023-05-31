import React, { useState } from 'react';
import Logo from '@assets/AluraIcon.svg';
import Banner from '@components/Banner';
import TextArea from '@components/TextArea';
import Button from '@components/Button';
import Style from '@styles/Layout.module.css';
import Error from '@assets/Error.svg';
import convertirTexto from '@utilities/Encriptar';
import Desencriptar from '@utilities/Desencriptar';
import Creator from '@assets/LogoB.png';
import AddIcon from "@assets/AddIcon.svg";
function App() {
  const [texto, setTexto] = useState('');
  const [textoEncriptado, setTextoEncriptado] = useState('');

  const handleEncriptar = () => {
    const textoEncriptado = convertirTexto(texto);
    setTextoEncriptado(textoEncriptado);
  };

  const handleDesencriptar = () => {
    const textoEncriptado = Desencriptar(texto);
    setTextoEncriptado(textoEncriptado);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(textoEncriptado);
  };

  const handleTextoChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div className={Style.Fix}>
      <div className={Style.Container__Logo}>
        <a href="https://www.aluracursos.com/"><img src={Logo} alt='Logo' /></a>
        <img src={AddIcon} alt="+" />
        <a href="https://github.com/BryanMlg"><img src={Creator} alt='Logo' className={Style["Banner__content--Logo"]}/></a>
      </div>
      <div className={Style.Container}>
        <div className={Style.Container__left}>
          <TextArea
            Description={'Ingrese texto aquí'}
            value={texto}
            onChange={handleTextoChange}
          />
          <span>
            <img src={Error} alt='Error' width={20} />
            Solo letras minúsculas y sin acentos
          </span>
          <div className={Style.ContainerLeft__buttons}>
            <Button Description={'Encriptar'} onClick={handleEncriptar} />
            <Button
              Description={'Desencriptar'}
              onClickD={handleDesencriptar}
            />
          </div>
        </div>
        <div className={Style.Container__right}>
          <TextArea value={textoEncriptado} readOnly />
          <div className={Style.ContainerRight__buttons}>
            <Button Description={'Copiar'} onClickC={handleCopy}/>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default App;

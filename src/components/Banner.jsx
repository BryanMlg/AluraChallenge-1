import React from 'react';
import Style from '@styles/Banner.module.css';
import Guatemala from '@assets/guatemala.png';
import Social from "@assets/Social.png";
export default function Banner() {
  return (
    <section className={Style.Banner}>
      <div className={Style.Banner__content}>
        <a href="https://github.com/BryanMlg"><img src={Social} alt='GitHub' width={35}/></a>
        <h4>Bryan Guerra</h4>
        <img src={Guatemala} alt="Guatemala" className={Style["Banner__content--Pais"]}/>
      </div>
    </section>
  );
}

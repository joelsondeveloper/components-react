import React from 'react';
import styles from './NavbarFinances.module.css';

const NavbarFinances = () => {
  return (
    <div className={styles.nav}>
      <a href='./localhost:3000'>
        <div className={styles.logo}></div>
      </a>
      <div className={`${styles.linknav} ${styles.dropdown}`}>
        <h3>Para Você</h3>
        <div className={styles.baixo}></div>
        <div className={`${styles.dropdownContent}`}>
          {/* Conteúdo do dropdown para "Para Você" */}
          <p>Conteúdo do dropdown para Para Você.</p>
        </div>
      </div>
      <div className={`${styles.linknav} ${styles.dropdown}`}>
        <h3>Para seu Negócio</h3>
        <div className={styles.baixo}></div>
        <div className={`${styles.dropdownContent}`}>
          {/* Conteúdo do dropdown para "Para seu Negócio" */}
          <p>Conteúdo do dropdown para Para seu Negócio.</p>
        </div>
      </div>
      <div className={`${styles.linknav} ${styles.dropdown}`}>
        <h3>O MyFinances</h3>
        <div className={styles.baixo}></div>
        <div className={`${styles.dropdownContent}`}>
          {/* Conteúdo do dropdown para "O MyFinances" */}
          <p>Conteúdo do dropdown para O MyFinances.</p>
        </div>
      </div>
      <div className={`${styles.linknav} ${styles.dropdown}`}>
        <h3>Dúvidas Frequentes</h3>
        <div className={styles.baixo}></div>
        <div className={`${styles.dropdownContent}`}>
          {/* Conteúdo do dropdown para "Dúvidas Frequentes" */}
          <p>Conteúdo do dropdown para Dúvidas Frequentes.</p>
        </div>
      </div>
      <button className={styles.cadastro}>
        <a href='oi'>
          <h3>Cadastre-se</h3>
        </a>
      </button>
      <div className={styles.logomenu}></div>
    </div>
  );
}

export default NavbarFinances;

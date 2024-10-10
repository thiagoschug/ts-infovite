import React, { useEffect, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './Botaocontato.module.css';

const Botaocontato = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.open('https://contate.me/tsinfo', '_blank');
  };

  // Função para detectar a rolagem da página
  const handleScroll = () => {
    if (window.scrollY > 200) { // Exibir o botão após rolar mais de 200px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.botaocontato} ${isVisible ? styles.visible : ''}`}
      onClick={handleClick}
    >
      <WhatsAppIcon style={{ color: 'white', fontSize: '24px' }} />
    </div>
  );
};

export default Botaocontato;

import React, { useState, useEffect } from 'react';
import styles from './pagina1.module.css';
import ConsultoriaImg from './Imagens/Consultoria.png';
import DesenvolvimentoImg from './Imagens/Desenvolvimento.png';
import ManutencaoImg from './Imagens/Manutenção.png';

const Pagina1 = () => {
  const tabs = ['manutenção', 'desenvolvimento', 'consultoria'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const switchTab = () => {
    const currentIndex = tabs.indexOf(activeTab);
    setActiveTab(tabs[(currentIndex + 1) % tabs.length]);
  };

  useEffect(() => {
    const interval = setInterval(switchTab, 5000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const handleTabClick = (tab, event) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className={styles.pagina1} id="servicos">
      <div className={styles.container}>
        <div className={styles.titulo}>
          <h1>
            <small>Soluções</small> em Tecnologia
          </h1>
          <p className={styles.small}>
            Encontre a solução ideal para o seu negócio.
          </p>
        </div>

        <ul className="nav nav-tabs nav-justified" role="tablist">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab}>
              <a
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                data-bs-toggle="tab"
                href={`#${tab}`}
                onClick={(event) => handleTabClick(tab, event)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {tabs.map((tab) => (
            <div
              className={`tab-pane fade ${activeTab === tab ? 'show active' : ''}`}
              id={tab}
              key={tab}
            >
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                {tab === 'desenvolvimento' && (
                  <>
                    <img
                      src={DesenvolvimentoImg}
                      alt="Desenvolvimento gráfico"
                      className="img-fluid rounded align-self-start mb-5 mb-lg-0"
                    />
                    <div>
                      <h2>Sob medida: cada detalhe pensado para você.</h2>
                      <p className="lead">
                        Criação de sites dinâmicos, responsivos e seguros com
                        tecnologias modernas e frameworks robustos.
                      </p>
                    </div>
                  </>
                )}
                {tab === 'manutenção' && (
                  <>
                    <img
                      src={ManutencaoImg}
                      alt="Manutenção gráfica"
                      className="img-fluid rounded align-self-start mb-5 mb-lg-0"
                    />
                    <div>
                      <h2>Seu sistema merece o melhor cuidado.</h2>
                      <p className="lead">
                        Manutenção ágil para performance máxima do seu sistema.
                      </p>
                      <p>
                        Oferecemos serviços completos de manutenção de hardware,
                        garantindo diagnósticos precisos, reparos rápidos e
                        suporte contínuo para a longevidade e eficiência dos seus
                        equipamentos.
                      </p>
                    </div>
                  </>
                )}
                {tab === 'consultoria' && (
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-content">
                      <h2>Sua TI ideal</h2>
                      <p>
                        Elevamos sua TI a um novo patamar com soluções
                        personalizadas para otimizar processos, integrar sistemas,
                        garantir segurança e impulsionar a inovação.
                      </p>
                    </div>
                    <img
                      src={ConsultoriaImg}
                      alt="Consultoria gráfica"
                      className="img-fluid rounded align-self-start mb-5 mb-lg-0"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina1;

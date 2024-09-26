import React, { useState } from "react";

export default function MentionLegales() {
  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [openThirdModal, setOpenThirdModal] = useState(false);

  return (
    <div>
      <h1>MENTIONS LÉGALES</h1>
      <hr className="divider" />
      <div className="conteneurMentionslegales">
        <div className="button-container">
          <Btn
            setOpenModal={setOpenFirstModal}
            isOpen={openFirstModal}
            label="Éditeur du site"
          />
          {openFirstModal && <FirstModal />}
        </div>
        <div className="button-container">
          <Btn
            setOpenModal={setOpenSecondModal}
            isOpen={openSecondModal}
            label="Hébergeur"
          />
          {openSecondModal && <ModalSecond />}
        </div>
        <div className="button-container">
          <Btn
            setOpenModal={setOpenThirdModal}
            isOpen={openThirdModal}
            label="Crédits"
          />
          {openThirdModal && <ModalThird />}
        </div>
      </div>
    </div>
  );
}

function Btn({ setOpenModal, isOpen, label }) {
  return (
    <div onClick={() => setOpenModal(!isOpen)} className="btnContainer">
      <button>{label}</button>
    </div>
  );
}

function FirstModal() {
  return (
    <div className="firstmodal">
      <ul>
        <h2>John Doe</h2>
        <li>
          <a
            href="https://maps.app.goo.gl/hQ1oSJrMB2FNAFEx5"
            target="_blank"
            rel="noopener noreferrer"
          >
            40 Rue Laure Diebold <br /> 69009 Lyon, France
          </a>
        </li>
        <li>
          <a href="tel:0620302050">06 20 30 40 50</a>
        </li>
        <li>
          <a href="mailto:john.doe@gmail.com"> john.doe@gmail.com </a>
        </li>
      </ul>
    </div>
  );
}

function ModalSecond() {
  return (
    <div className="secondmodal">
      <ul>
        <h2>Always Data</h2>
        <li>
          <a
            href="https://maps.app.goo.gl/hQ1oSJrMB2FNAFEx5"
            target="_blank"
            rel="noopener noreferrer"
          >
            91 Rue du Faubourg <br /> 75008 Paris
          </a>
          <a
            className="alwaysdata" // Classe pour le lien
            href="https://www.alwaysdata.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.alwaysdata.com
          </a>
        </li>
      </ul>
    </div>
  );
}

function ModalThird() {
  return (
    <div className="thirdmodal">
      <ul>
        <h2>Crédits</h2>
        <li>
          <p>
            Site développé par John Doe du CEF. <br />
            Les images libres de droit sont issues du site
            <a
              className="pixabay" // Classe en minuscules
              href="https://pixabay.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}

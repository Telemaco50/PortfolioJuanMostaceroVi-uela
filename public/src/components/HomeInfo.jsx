import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const [visible, setVisible] = useState(true); // Estado para controlar la visibilidad

  useEffect(() => {
    if (currentStage === 1) {
      // Temporizador para ocultar el mensaje después de 5 segundos
      const timer = setTimeout(() => {
        setVisible(false); // Oculta el mensaje
      }, 5000); // 5000 milisegundos = 5 segundos

      // Limpia el temporizador si el componente se desmonta
      return () => clearTimeout(timer);
    }
  }, [currentStage]); // Ejecuta el efecto cuando cambia currentStage

  if (currentStage === 1 && visible) {
    return (
      <h1
        className='sm:text-xl sm:leading-snug text-center border-2 border-white bg-black py-4 px-8 text-white mx-5 fade-out'
        style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease-out" }} // Aplica el efecto de desvanecimiento
      >
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Juan</span>
        👋
        <br />
        A Software Developer from Spain
      </h1>
    );
  }

  return null;
};

export default HomeInfo;
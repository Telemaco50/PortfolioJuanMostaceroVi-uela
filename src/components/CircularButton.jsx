import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

const CircularButton = ({ position, onClick }) => {
  const buttonRef = useRef();

  useFrame(({ camera }) => {
    // Ajustar la rotación del botón para que siempre mire hacia la cámara
    buttonRef.current.quaternion.copy(camera.quaternion);
  });

  return (
    <mesh position={position} ref={buttonRef}>
      <circleGeometry args={[1, 32]} />
      <meshBasicMaterial color="white" />
      <Html>
        <button
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={onClick}
        >
          Click Me
        </button>
      </Html>
    </mesh>
  );
};

export default CircularButton;
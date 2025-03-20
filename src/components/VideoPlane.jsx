import React, { useRef } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const VideoPlane = ({ videoUrl, position, rotation, scale }) => {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial side={THREE.DoubleSide}>
        <Html transform>
          <iframe
            src={videoUrl}
            width="500"
            height="300"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </Html>
      </meshBasicMaterial>
    </mesh>
  );
};

export default VideoPlane;
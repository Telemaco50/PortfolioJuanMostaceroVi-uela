import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
  const birdRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { nodes, materials  } = useGLTF(birdScene);


  // Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.


 

  return (
    <group {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube002.geometry}
      material={materials['Material.001']}
      position={[0.964, 0.914, 0.974]}
      scale={0.09}
    />
  </group>
  );
}

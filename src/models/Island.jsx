import { a } from "@react-spring/three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from 'three';

import islandScene from "../assets/3d/island.glb";

export function Island({ ...props }) {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);

  // Cargar las texturas
  const lightMapTexture = useLoader(THREE.TextureLoader, 'src/assets/3d/bakes/painting_01_01_Bake1_PBR_Lightmap.png');
  const aoMapTexture = useLoader(THREE.TextureLoader, 'src/assets/3d/bakes/painting_01_01_Bake1_PBR_Ambient Occlusion.png');
  const diffuseMapTexture = useLoader(THREE.TextureLoader, 'src/assets/3d/bakes/painting_01_01_Bake1_CyclesBake_COMBINED.png');

  // Configurar flipY = false para las texturas
  lightMapTexture.flipY = false;
  aoMapTexture.flipY = false;
  diffuseMapTexture.flipY = false;

  // Configurar el espacio de color de las texturas
  diffuseMapTexture.colorSpace = THREE.SRGBColorSpace;
  lightMapTexture.colorSpace = THREE.LinearSRGBColorSpace;
  aoMapTexture.colorSpace = THREE.LinearSRGBColorSpace;

  // Configurar filtrado y mipmaps
  lightMapTexture.minFilter = THREE.LinearMipmapLinearFilter;
  lightMapTexture.magFilter = THREE.LinearFilter;
  lightMapTexture.generateMipmaps = true;

  aoMapTexture.minFilter = THREE.LinearMipmapLinearFilter;
  aoMapTexture.magFilter = THREE.LinearFilter;
  aoMapTexture.generateMipmaps = true;

  diffuseMapTexture.minFilter = THREE.LinearMipmapLinearFilter;
  diffuseMapTexture.magFilter = THREE.LinearFilter;
  diffuseMapTexture.generateMipmaps = true;

  // Configurar filtrado anisotrópico
  const { gl } = useThree();
  const maxAnisotropy = gl.capabilities.getMaxAnisotropy();
  lightMapTexture.anisotropy = maxAnisotropy;
  aoMapTexture.anisotropy = maxAnisotropy;
  diffuseMapTexture.anisotropy = maxAnisotropy;

  // Configurar tone mapping
  gl.toneMapping = THREE.ACESFilmicToneMapping;
  gl.toneMappingExposure = 1;

  return (
    <a.group ref={islandRef} {...props} scale={2.5}>
      <group
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[5, 5, 5]}
      >
        {Object.keys(nodes).map((nodeName) => {
          const node = nodes[nodeName];
          if (node.isMesh) {
            return (
              <mesh
                key={nodeName}
                castShadow
                receiveShadow
                geometry={node.geometry}
              >
                <meshStandardMaterial
                  map={diffuseMapTexture}
                  lightMap={lightMapTexture}
                  lightMapIntensity={1}
                  aoMap={aoMapTexture}
                  aoMapIntensity={1}
                  metalness={0}
                  roughness={1}
                />
              </mesh>
            );
          }
          return null;
        })}
      </group>
    </a.group>
  );
}
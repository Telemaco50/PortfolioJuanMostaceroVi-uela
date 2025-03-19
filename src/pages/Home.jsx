import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls, Html, OrthographicCamera, Environment, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader, GridPlanes } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky, Monitor } from "../models";
import { useGLTF } from '@react-three/drei';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [10, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -20];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  const ResaltarModel = () => {
    const { nodes, materials } = useGLTF('src/assets/3d/resaltar.glb');
    const meshRef = useRef();
    const scaleFactors = useRef({ x: 1.5, y: 1, z: 1.5 }); // Escalas iniciales para cada eje

    useFrame((state, delta) => {
      if (isHovered2) {
        const breathingScale = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
        meshRef.current.scale.set(
          scaleFactors.current.x * breathingScale,
          scaleFactors.current.y * breathingScale,
          scaleFactors.current.z * breathingScale
        );
      } else {
        meshRef.current.scale.set(scaleFactors.current.x, scaleFactors.current.y, scaleFactors.current.z);
      }
    });


    return (
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.001']}
        position={[50, 45, -50]}
        scale={[scaleFactors.current.x, scaleFactors.current.y, scaleFactors.current.z]}
        visible={isHovered1}
        onPointerOver={() => setIsHovered1(true)}
        onPointerOut={() => setIsHovered1(false)}
        onClick={() => window.location.href = "/prjects.html"}
      />
    );
  };

  const ResaltarModel2 = () => {
    const { nodes, materials } = useGLTF('src/assets/3d/resaltar.glb');
    const meshRef = useRef();
    const scaleFactors = useRef({ x: 1, y: 2, z: 2 }); // Escalas iniciales para cada eje

    useFrame((state, delta) => {
      if (isHovered2) {
        const breathingScale = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
        meshRef.current.scale.set(
          scaleFactors.current.x * breathingScale,
          scaleFactors.current.y * breathingScale,
          scaleFactors.current.z * breathingScale
        );
      } else {
        meshRef.current.scale.set(scaleFactors.current.x, scaleFactors.current.y, scaleFactors.current.z);
      }
    });

    return (
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.001']}
        position={[-50, 70, -15]}
        scale={[scaleFactors.current.x, scaleFactors.current.y, scaleFactors.current.z]}
        visible={isHovered2}
        onPointerOver={() => setIsHovered2(true)}
        onPointerOut={() => setIsHovered2(false)}
        onClick={() => navigate('/about')}
      />
    );
  };

  const CameraLogger = () => {
    const { camera } = useThree();
  
    useFrame(() => {
      const rotationInDegrees = {
        x: THREE.MathUtils.radToDeg(camera.rotation.x),
        y: THREE.MathUtils.radToDeg(camera.rotation.y),
        z: THREE.MathUtils.radToDeg(camera.rotation.z),
      };
  
      console.log("Camera Position:", camera.position);
      console.log("Camera Rotation (degrees):", rotationInDegrees);
    });
    return null;
  };

  return (
    <section className="w-full h-screen relative bg-black">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-black ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        shadows // Enable shadows in the renderer
      >
        {/* Camera */}
        <OrthographicCamera
          makeDefault
          position={[-50, 50, 60]} // Posición de la cámara para vista isométrica
          rotation={[Math.PI / 4, Math.PI / 4, 0]} // Rotación para vista isométrica
          zoom={3} // Ajusta el zoom para que el objeto se vea claramente
          far={1000}
        />
        {/* OrbitControls con límites de rotación */}
        <OrbitControls
          enablePan={false} // Permitir desplazamiento
          enableZoom={true} // Permitir zoom
          enableRotate={true} // Permitir rotación
          minAzimuthAngle={-Math.PI / 4} // Límite de rotación hacia la izquierda (45 grados)
          maxAzimuthAngle={Math.PI / 4} // Límite de rotación hacia la derecha (45 grados)
          minPolarAngle={Math.PI / 4} // Límite de rotación vertical hacia arriba (45 grados)
          maxPolarAngle={Math.PI / 2} // Límite de rotación vertical hacia abajo (90 grados)
        />

        {/* Black background */}
        <color attach="background" args={['black']} />

        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <ambientLight intensity={0.5} color="#f2b3dc" />
          <directionalLight
            position={[10, 10, 5]}
            intensity={20}
            castShadow
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-bias={-0.0001}
            shadow-camera-near={0.5}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <spotLight
            position={[islandPosition[0], islandPosition[1] + 20, islandPosition[2]]} // First additional light
            angle={0.5}
            penumbra={0.5}
            intensity={10000}
            castShadow
            color="#f2b3dc"
          />
          <spotLight
            position={[islandPosition[0] - 20, islandPosition[1] + 20, islandPosition[2]]} // Second additional light
            angle={0.5}
            penumbra={1}
            intensity={50000}
            castShadow
            color="#d1c292"
          />

          {/* Models */}
          <group position={islandPosition} rotation={[0, 4.7077, 0]} scale={islandScale}>
            <Island
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              castShadow // Enable shadows for the Island object
              receiveShadow // Receive shadows from other objects
            />
            <ResaltarModel />
            <ResaltarModel2 />
            <Monitor
            position={[50,  25, -70]} 
            rotation={[0, -0.5, 0]} 
            
            />
          </group>

          {/* GridPlanes */}
          <GridPlanes
            position={[-50, -50, -50]} 
            rows={10} // Número de filas
            columns={10} // Número de columnas
            planeWidth={50} // Ancho de cada plano
            planeDepth={50} // Profundidad de cada plano
            spacing={0.2} // Espacio entre planos
          />
        </Suspense>

        {/* Post-processing */}
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={1} bokehScale={2} height={480} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>

        {/* Camera Logger */}
        <CameraLogger />
      </Canvas>

      <div className="absolute top-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
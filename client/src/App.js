import { Environment, OrbitControls, MeshReflectorMaterial, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, {Suspense, useEffect} from 'react';
import * as THREE from "three";

import Ground from './components/Ground';
import { House } from './components/House';
import { TextCreator } from './components/TextCreator';
import RectAreaLightCreator from './components/RectAreaLightCreator';

import './style.css'



function App() {
  return (
    <Canvas >
      <Suspense fallback={null}>

        <OrbitControls target={[0, 0, -5]} maxPolarAngle={Math.PI / 2} minPolarAngle={0.5} />
        <PerspectiveCamera makeDefault fov={60} position={[-10, 0, 40]} />

        <spotLight
          color={[1, 0.25, 0.7]}
          intensity={0.5}
          angle={1}
          penumbra={0.2}
          position={[-75, 10, -40]}
          shadow-bias={-0.0001}
        />

        <spotLight
          color={[0.14, 0.5, 1]}
          intensity={0.5}
          angle={1}
          penumbra={0.2}
          position={[75, 10, -40]}
          shadow-bias={-0.0001}
        />

        <ambientLight intensity={0.03} />

        <House/>
        <TextCreator position={[5,-1,10]} rotation={[-Math.PI / 2, 0, 0]} text={'Tharusan'}/>
        <TextCreator position={[3,-1,13]} rotation={[-Math.PI / 2, 0, 0]} text={'Vijayakumar'}/>
        <Ground />
          
      </Suspense>
    </Canvas>
  );
}

export default App;

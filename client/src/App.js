import { Environment, OrbitControls, MeshReflectorMaterial, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, {Suspense, useEffect} from 'react';
import * as THREE from "three";

import Ground from './components/Ground';
import { House } from './components/House';


import './style.css'



function App() {
  return (
    <Canvas camera={{fov: 120}}>
      <Suspense fallback={null}>

        <OrbitControls target={[0, 0, -20]} maxPolarAngle={Math.PI / 2} minPolarAngle={0} />

        <fog attach="fog" args={["black", 1, 50]} />
        <directionalLight intensity={0.05} />
        <pointLight intensity={0.5} color="blue" position={[-10,0,-10]} />
        <pointLight intensity={0.5} color="purple" position={[10,0,-10]} />
       
        
        <House/>
        <Ground />
          
      </Suspense>
    </Canvas>
  );
}

export default App;

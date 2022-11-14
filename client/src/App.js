import { Environment, OrbitControls, MeshReflectorMaterial, PerspectiveCamera, Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, {Suspense, useEffect} from 'react';
import * as THREE from "three";

import Ground from './components/Ground';
import { House } from './components/House';
import { TextCreator } from './components/TextCreator';
import {RectAreaLightCreator} from './components/RectAreaLightCreator';

import './style.css'
import Loading from './components/Loading';
import { LampPost } from './components/LampPost';
import { VendingMachine } from './components/VendingMachine';



import url_1 from './assets/videos/anime.mp4'


function App() {
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Canvas >
        <OrbitControls target={[0, 0, -5]} maxPolarAngle={Math.PI / 2} minPolarAngle={0.5} />
        <PerspectiveCamera makeDefault fov={60} position={[-12, 1, 40]} />

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
        <LampPost />
        <RectAreaLightCreator position={[-15, 17.2, 5.5]} intensity={15} size={[0.7,1]} color="yellow" rotation={[-Math.PI / 2, 0, 0]}/>

        <TextCreator position={[5,-1,10]} rotation={[-Math.PI / 2, 0, 0]} text={'Tharusan'}/>
        <TextCreator position={[3,-1,13]} rotation={[-Math.PI / 2, 0, 0]} text={'Vijayakumar'}/>

        <VendingMachine />        
        <Ground />
          
      </Canvas>
    </Suspense>
    </>
  );
}

export default App;

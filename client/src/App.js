import { Environment, OrbitControls, MeshReflectorMaterial, PerspectiveCamera, Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, {Suspense, useEffect} from 'react';
import * as THREE from "three";
import { Bounds, useBounds } from '@react-three/drei'


import Ground from './components/Ground';
import { House } from './components/House';
import { TextCreator } from './components/TextCreator';

import './style.css'
import Loading from './components/Loading';
import { LampPost } from './components/LampPost';
import { VendingMachine } from './components/VendingMachine';
import VideoPlayer from './components/VideoPlayer';

import { useThree } from '@react-three/fiber';

import url_1 from './assets/videos/anime.mp4'
import url_2 from './assets/videos/film.mp4'
import url_3 from './assets/videos/football.mp4'
import url_4 from './assets/videos/game.mp4'
import url_5 from './assets/videos/music.mp4'

import { useSpring } from '@react-spring/web';
import { Lightmap } from '@react-three/lightmap';
import { Banner } from './components/Banner';



function SelectToZoom({ children }) {
  const api = useBounds()
  return (
    <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
      {children}
    </group>
  )
}

function App() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Canvas>
          <OrbitControls target={[0, 0, -5]} maxPolarAngle={Math.PI / 2} minPolarAngle={0.5} />
          <PerspectiveCamera makeDefault fov={55} position={[-12, 1, 40]} />

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
          
          <Banner position={[-15, 13.95, 5.5]} size={[0.7,1]} color={"yellow"} rotation={[-Math.PI / 2, 0, 0]}/>
          <LampPost />

          <Banner position={[5.9, 9.1, 2.19]} size={[4.55,2.6]} rotation={[0, 0, Math.PI*2]}/>
          <VideoPlayer url={url_1} position={[9.3, 4.48, -5.22]} size={[3,1.63]} rotation={[0, -Math.PI/2, 0]}/>
          <VideoPlayer url={url_2} position={[-2.7, 6.7, -3.1]} size={[2.5,2.75]} rotation={[0, -Math.PI/2, 0]} />
          <VideoPlayer url={url_5} position={[5, 14, -20]} size={[5,3]} rotation={[0, 0, 0]}/>
          <VideoPlayer url={url_4} position={[-6.5, 14, -20]} size={[5,3]} rotation={[0, 0, 0]}/>
          <VideoPlayer url={url_3} position={[-0.75, 14, -20]} size={[6,3]} rotation={[0, 0, 0]}/>

          <TextCreator position={[5,-1,10]} rotation={[-Math.PI / 2, 0, 0]} text={'Tharusan'}/>
          <TextCreator position={[3,-1,13]} rotation={[-Math.PI / 2, 0, 0]} text={'Vijayakumar'}/>


          <VendingMachine />

          <House/>
          <Ground />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;

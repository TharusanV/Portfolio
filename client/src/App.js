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
import url_6 from './assets/videos/click-and-scroll.mp4'
import url_7 from './assets/videos/for-hire.mp4'
import url_8 from './assets/videos/about-me.mp4'

import { useSpring } from '@react-spring/web';
import { Lightmap } from '@react-three/lightmap';
import { Banner } from './components/Banner';
import { ImageLoader } from './components/ImageLoader';

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
        <Canvas camera={{ position: [-12, 1, 40], fov: 55 }} dpr={[1, 2]}>
          <OrbitControls makeDefault maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
    

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

          <Bounds fit clip observe margin={1.4}>
            <SelectToZoom>
              <VideoPlayer url={url_6} position={[5.75, 9.2, 2.19]} size={[5.1,2.9]} rotation={[0, 0, Math.PI*2]}/>
              <VideoPlayer url={url_7} position={[3, 22, -7.5]} size={[11,7]} rotation={[0, 0, Math.PI*2]}/>
              <VideoPlayer url={null} position={[3, 22, -8.5]} size={[11,7]} rotation={[0, 0, Math.PI*2]}/>
              <VideoPlayer url={url_8} position={[-0.75, 9, -19.5]} size={[18,13]} rotation={[0, Math.PI, Math.PI*2]}/>

              <VideoPlayer url={url_1} position={[9.237, 4.48, -5.225]} size={[3.075,1.76]} rotation={[0, Math.PI/2, 0]}/>
              <VideoPlayer url={url_2} position={[-2.7, 6.7, -3.1]} size={[2.5,2.75]} rotation={[0, Math.PI/2, 0]} />

              <VideoPlayer url={url_5} position={[9.2, 9.3, -0.5]} size={[4.5,3]} rotation={[0, Math.PI/2, 0]}/>
              <VideoPlayer url={url_4} position={[8.55, 3.5, -11]} size={[5,2.5]} rotation={[0, Math.PI/2, 0]}/>
              <VideoPlayer url={url_3} position={[8.55, 0.75, -11]} size={[5,2.5]} rotation={[0, Math.PI/2, 0]}/>

              <TextCreator position={[5,-1,10]} rotation={[-Math.PI / 2, 0, 0]} text={'Tharusan'}/>
              <TextCreator position={[3,-1,13]} rotation={[-Math.PI / 2, 0, 0]} text={'Vijayakumar'}/>

              <VendingMachine />
            </SelectToZoom>
          </Bounds>
          
          <House/>
          <LampPost />
          <Banner position={[20, 25.15, 5.7]} size={[0.7,1,1]} color={"yellow"} rotation={[-Math.PI / 2, 0, 0]}/>
          <Ground />

        </Canvas>
      </Suspense>
    </>
  );
}

export default App;

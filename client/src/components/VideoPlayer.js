import React, {useState} from 'react'
import * as THREE from 'three' 
import { useCursor } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const VideoPlayer = (props , v= new THREE.Vector3()) => {
  
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = props.url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <mesh rotation={props.rotation} position={props.position}>
      <planeGeometry args={props.size} />
      <meshStandardMaterial emissive={'white'} emissiveIntensity={0.3}  side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
    </mesh>    
  )
}

export default VideoPlayer
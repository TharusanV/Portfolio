import React, {useState} from 'react'
import * as THREE from 'three' 

const VideoPlayer = (props) => {
  
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
      <meshStandardMaterial  side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
    </mesh>    
  )
}

export default VideoPlayer
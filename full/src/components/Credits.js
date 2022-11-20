import React from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from "three";
import img from '../assets/logos/credits.png'
import myLogo from '../assets/logos/myLogo.png'


export const Credits = () => {
  const texture = useLoader(THREE.TextureLoader, img)
  const logo = useLoader(THREE.TextureLoader, myLogo)
  return (
    <group>
      <mesh position={[3.4, 24, -11]} rotation={[(-Math.PI * 0.5)-0.8, 0, -Math.PI]} >
        <planeBufferGeometry attach="geometry" args={[10, 10]} />
        <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
      </mesh>

      <mesh position={[20, 8, 2.3]} rotation={[0, 0, Math.PI*2]} >
        <planeBufferGeometry attach="geometry" args={[4.5, 6.5]} />
        <meshLambertMaterial attach='material' color={'white'}/>
      </mesh>

      <mesh position={[20, 8, 2.31]} rotation={[0, 0, Math.PI*2]} >
        <planeBufferGeometry attach="geometry" args={[4, 6]} />
        <meshBasicMaterial attach="material" map={logo} toneMapped={false} />
      </mesh>
    </group>

  )
}

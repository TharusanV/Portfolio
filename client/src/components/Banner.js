import { Lightmap } from '@react-three/lightmap'
import React from 'react'
import * as THREE from 'three' 

export const Banner = (props) => {
  return (
    <group>
      <mesh rotation={props.rotation} position={props.position}>
        <planeBufferGeometry args={props.size} />
        <meshBasicMaterial emissiveIntensity={50} color={0xffff00} side={THREE.DoubleSide} roughness={0.1} metalness={0} />
      </mesh>
    </group>

  )
}

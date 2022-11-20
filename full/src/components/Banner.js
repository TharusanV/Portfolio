import React from 'react'
import * as THREE from 'three' 
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import myFont from '../fonts/RobotoSlab/Roboto Slab_Bold.json'

extend({ TextGeometry })

export const Banner = (props) => {
  const font = new FontLoader().parse(myFont);
  const text = props.text;
  const backgroundColour = props.backgroundColour;

  return (
    <group>
      <mesh rotation={props.rotation} position={props.position}>
        <planeBufferGeometry attach="geometry" args={props.size} />
        <meshBasicMaterial attach="material" color="black" side={THREE.DoubleSide} roughness={0.1} metalness={0} />
      </mesh>
      <mesh rotation={props.rotation} position={props.backgroundPos}>
        <planeBufferGeometry attach="geometry" args={props.backgroundSize} />
        <meshBasicMaterial attach="material" color={`${backgroundColour}`} side={THREE.DoubleSide} roughness={0.1} metalness={0} />
      </mesh>
      <mesh position={props.textPosition} rotation={props.textRotation}>
        <textGeometry args={[`${text}`, {font, size:0.8, height: 0}]}/>
        <meshLambertMaterial attach='material' color={'white'}/>
      </mesh>
    </group>

  )
}

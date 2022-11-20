import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, {useEffect, useState} from 'react'
import { Mesh } from "three";
import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import myFont from '../fonts/RobotoSlab/Roboto Slab_Bold.json'

import img from '../assets/logos/portfolio_logo.png'
extend({ TextGeometry })

export const VendingMachine = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/vending_machine.glb"
  );

  useEffect(() => {
    gltf.scene.scale.set(1, 1.1, 1);
    gltf.scene.position.set(-3.5, -2, -1);
    gltf.scene.rotation.set(0,-Math.PI / 2, 0 );
    
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  const texture = useLoader(THREE.TextureLoader, img)
  const font = new FontLoader().parse(myFont);
  

  return (
    <>
      <group>
        <primitive object={gltf.scene} />
      </group>
    </>

    
  )
}

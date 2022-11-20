import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, {useEffect} from 'react'
import { Mesh } from "three";

export const House = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/japanese_house_2.0.glb"
  );
  
  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.set(0, -0.2, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  return (
    <>
    <primitive object={gltf.scene} />
    </>
    
  )
}

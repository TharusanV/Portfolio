import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, {useEffect} from 'react'
import { Mesh } from "three";

export const LampPost = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/street_light.glb"
  );

  useEffect(() => {
    gltf.scene.scale.set(2, 4.25, 2);
    gltf.scene.position.set(20, -2, 2);
    
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  return (
    <primitive object={gltf.scene} />
  )
}

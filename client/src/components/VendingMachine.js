import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, {useEffect} from 'react'
import { Mesh } from "three";

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

  return (
    <primitive object={gltf.scene} />
  )
}

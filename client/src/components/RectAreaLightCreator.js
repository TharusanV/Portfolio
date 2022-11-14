import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three'

  
  export const RectAreaLightCreator = ({ position, intensity, color, rotation, size }) => {
    const { scene } = useThree();
  
    RectAreaLightUniformsLib.init();
  
    const rectLight = new THREE.RectAreaLight(color, intensity, size[0], size[1]);
    rectLight.position.set(position[0], position[1], position[2]);
    rectLight.rotation.set(rotation[0],rotation[1],rotation[2]);
    scene.add(rectLight);
    scene.add(new RectAreaLightHelper(rectLight));
  
    return (
      null
    )
  }
  
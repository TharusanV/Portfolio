import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three'

const RectAreaLightCreator = (props) => {
    const { scene } = useThree();

    RectAreaLightUniformsLib.init();
  
    const rectLight = new THREE.RectAreaLight(props.color, 15, 4, 10);
    rectLight.position.set(props.position);
    scene.add(rectLight);
    scene.add(new RectAreaLightHelper(rectLight));

    return null;
}

export default RectAreaLightCreator
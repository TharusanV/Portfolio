import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useTexture } from "@react-three/drei";
import React, {useRef} from "react";

import project_1 from '../assets/project/project-1.png'
import project_2 from '../assets/project/project-2.png'
import project_3 from '../assets/project/project-3.png'
import project_4 from '../assets/project/project-4.png'
import project_5 from '../assets/project/project-5.png'
import project_6 from '../assets/project/project-6.png'
import project_7 from '../assets/project/project-7.png'
import project_8 from '../assets/project/project-8.png'
import topBottom from '../assets/project/top-bottom.png'

export const ProjectCuboid = () => {

  const firstCuboid = useTexture([
    project_1, project_2, topBottom, topBottom, project_4, project_3
  ])

  const secondCuboid = useTexture([
    project_5, project_6, topBottom, topBottom, project_8, project_7
  ])

  const myMesh1 = React.useRef();
  const myMesh2 = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh1.current.rotation.y = a;
    myMesh2.current.rotation.y = -a;
  });



  return (
    <group>
      <mesh ref={myMesh1} position={[-50, 15, -20]}>
        <boxBufferGeometry attach="geometry" args={[10, 20, 10]} />
        {firstCuboid.map((texture, idx) =>
          <meshBasicMaterial key={texture.id} attach={`material-${idx}`} map={texture} />
        )}
      </mesh>

      <mesh ref={myMesh2} position={[60, 15, -20]}>
        <boxBufferGeometry attach="geometry" args={[10, 20, 10]} />
        {secondCuboid.map((texture, idx) =>
          <meshBasicMaterial key={texture.id} attach={`material-${idx}`} map={texture} />
        )}
      </mesh>


    </group>
  )
}

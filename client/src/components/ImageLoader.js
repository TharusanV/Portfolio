import { useLoader } from 'react-three-fiber'
import * as THREE from 'three'

export const ImageLoader = (props) => {
  const texture = useLoader(THREE.TextureLoader, props.img)
  return (
    <mesh rotation={props.rotation} position={props.size}>
      <planeBufferGeometry attach="geometry" args={props.size} />
      <meshBasicMaterial attach="material" map={texture} roughness={0.1} metalness={0} />
    </mesh>
  )
}

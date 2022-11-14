import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import img from '../assets/logos/clickscroll.png'

export const ImageLoader = (props) => {
  const texture = useLoader(THREE.TextureLoader, img)
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[30, 30]} />
      <meshBasicMaterial emissiveIntensity={50} side={THREE.DoubleSide} attach="material" map={texture} />
    </mesh>
  )
}

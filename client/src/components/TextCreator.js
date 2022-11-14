import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import myFont from '../fonts/RobotoSlab/Roboto Slab_Bold.json'

extend({ TextGeometry })

export const TextCreator = (props) => {
  const font = new FontLoader().parse(myFont);
  const text = props.text;

  return (
    <mesh position={props.position} rotation={props.rotation}>
      <textGeometry args={[`${text}`, {font, size:2, height: 0}]}/>
      <meshLambertMaterial attach='material' color={'white'}/>
    </mesh>
  )
}

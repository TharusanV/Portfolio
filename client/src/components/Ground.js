import React from 'react'

const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2, -2, 0]}>
      <planeBufferGeometry args={[100, 100, 1]} />
      <meshStandardMaterial color="#D2D1CD" />
    </mesh>
  )
}

export default Ground
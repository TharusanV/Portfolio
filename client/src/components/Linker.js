import React from 'react'
import * as THREE from "three";


function githubLink() {
  window.open("https://github.com/TharusanV");
}

const cvLoader = () => {
  fetch('Tharusan_Vijayakumar_CV.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Tharusan_Vijayakumar_CV.pdf';
          alink.click();
      })
  })
}

function emailCopy(){
  navigator.clipboard.writeText("tharusan.vijayakumar@gmail.com");
}

export const Linker = () => {
  return (
    <group>
      <mesh onClick={cvLoader} position={[3, 8.5, -18.5]} scale={2.5}>
        <boxGeometry />
        <meshPhongMaterial color="#ff0000" opacity={0.01} transparent />
      </mesh>

      <mesh onClick={githubLink} position={[-0.9, 8.6, -18.5]} scale={2.5}>
        <boxGeometry />
        <meshPhongMaterial color="#ff0000" opacity={0.01} transparent />
      </mesh>

      <mesh onClick={emailCopy} position={[-4.5, 8.6, -18.5]} scale={2.5}>
        <boxGeometry />
        <meshPhongMaterial color="#ff0000" opacity={0.01} transparent />
      </mesh>

      <mesh onClick={cvLoader} rotation={[0, 0, Math.PI*2]} position={[20, 16, 2.3]}>
        <planeBufferGeometry attach="geometry" args={[4,2]} />
        <meshBasicMaterial attach="material" color="#ff0000" opacity={0.01} transparent />
      </mesh>

      <mesh onClick={githubLink} rotation={[0, 0, Math.PI*2]} position={[20, 13, 2.3]}>
        <planeBufferGeometry attach="geometry" args={[7,2]} />
        <meshBasicMaterial attach="material" color="#ff0000" opacity={0.01} transparent />
      </mesh>
    </group>
  )
}

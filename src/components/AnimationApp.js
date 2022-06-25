import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import {OrbitControls, Stars, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import {OrbitControls} from "drei";

function Spherer() {
    return(
      <>
        <Sphere visible args={[2, 200, 100]}/>
        <MeshDistortMaterial distort={1} speed={10} />
      </>
    );
}

export default function AnimationApp() {
  return (
  <Canvas className="sphr">
    <OrbitControls enableZoom={false}/>
    <Stars/>
    <ambientLight intensity={0.5} />
    <spotLight
    position={[100, 15, 10]} angle={0.3}/>
    <directionalLight position={[-2, 5, 2]} intensity={1} />
    <Suspense fallback={null}>
      <Spherer />
    </Suspense>
  </Canvas>
  );
}
 
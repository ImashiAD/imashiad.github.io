// BedroomScene.tsx
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function BedroomModel() {
  const gltf = useGLTF("./bedroom.glb"); // Make sure this path is correct
  return <primitive object={gltf.scene} />;
}

export default function My3DScene() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />

      <BedroomModel />

      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={4}
        minPolarAngle={Math.PI / 4} // restrict vertical movement
        maxPolarAngle={Math.PI / 2.5} // restrict vertical movement
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 1.7}
        target={[0, 0.5, 0]}
      />
    </Canvas>
  );
}

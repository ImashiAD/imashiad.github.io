// BedroomScene.tsx
import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

function BedroomModel() {
  const gltf = useGLTF("./bedroom.glb"); // Make sure this path is correct
  return <primitive object={gltf.scene} />;
}

function Pringle() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("./pringle.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const idleAction = actions["Idle"];
    if (idleAction) {
      idleAction.setEffectiveTimeScale(0.7);
      idleAction.reset().play();
    }
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={scene}
      position={[1, 0, 0]}
      rotation={[0, 1.2, 0]}
    />
  );
}

export default function My3DScene() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <PerspectiveCamera
        makeDefault
        position={[4, 1, 1]} // your desired starting position
        fov={75}
      />

      <BedroomModel />
      <Pringle />
      <Environment preset="city" />

      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={2.5}
        minPolarAngle={Math.PI / 4} // restrict vertical movement
        maxPolarAngle={Math.PI / 2.5} // restrict vertical movement
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 1.7}
        target={[1, 0.7, 0]}
        rotateSpeed={0.2}
        panSpeed={0.2}
      />
    </Canvas>
  );
}

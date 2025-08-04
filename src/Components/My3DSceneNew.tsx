// BedroomScene.tsx
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

type AnimationName = "Idle" | "Dance" | "Greet" | "LookAround";

export const PringleAvatar: React.FC = () => {
  const group = useRef<THREE.Group>(null);

  // Define your GLB model path here
  const url = "./pringle.glb"; // ✅ Replace with your actual path
  const { scene, animations } = useGLTF(url);
  const { actions, mixer } = useAnimations(animations, group);

  const [current, setCurrent] = useState<AnimationName>("Idle");
  const [lastPlayed, setLastPlayed] = useState<AnimationName | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const returnToIdleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fadeDuration = 0.5;
  const nonIdleAnimations: AnimationName[] = ["Dance", "Greet", "LookAround"];

  const pickRandomAnimation = (): AnimationName => {
    const available = nonIdleAnimations.filter((name) => name !== lastPlayed);
    return available[Math.floor(Math.random() * available.length)];
  };

  const transitionTo = (next: AnimationName) => {
    if (!actions[next]) return;
    if (next === current) return;

    // Fade out ALL other animations
    Object.entries(actions).forEach(([name, action]) => {
      if (name !== next && action) {
        action.fadeOut(fadeDuration);
      }
    });

    // Play new animation
    const nextAction = actions[next];
    nextAction
      ?.reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(fadeDuration)
      .play();

    setCurrent(next);
    if (next !== "Idle") setLastPlayed(next);
  };

  const scheduleNext = () => {
    const delay = Math.random() * 5 + 5; // 5–10 seconds
    timeoutRef.current = setTimeout(() => {
      const next = pickRandomAnimation();
      transitionTo(next);

      const duration = actions[next]?.getClip()?.duration ?? 2;
      returnToIdleRef.current = setTimeout(() => {
        transitionTo("Idle");
        // Only schedule the next animation after returning to Idle
        scheduleNext();
      }, duration * 1000);
    }, delay * 1000);
  };

  useEffect(() => {
    if (actions.Idle) {
      actions.Idle.reset().fadeIn(0.3).play();
      setCurrent("Idle");

      // Wait for fade-in to complete before scheduling next animation
      const fadeInTimeout = setTimeout(() => {
        scheduleNext();
      }, 350); // slightly longer than fadeIn duration

      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (returnToIdleRef.current) clearTimeout(returnToIdleRef.current);
        clearTimeout(fadeInTimeout);
        mixer.stopAllAction();
      };
    }
  }, [actions]);

  return <primitive ref={group} object={scene} dispose={null} />;
};

export default function My3DSceneNew() {
  return (
    <Canvas style={{ width: "100%", height: "100%", position: "absolute" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <PerspectiveCamera
        makeDefault
        position={[0, 1.3, 0.6]} // your desired starting position
        fov={75}
      />

      <PringleAvatar />
      <Environment preset="city" />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={0}
        maxDistance={1}
        minPolarAngle={Math.PI / 2} // restrict vertical movement
        maxPolarAngle={Math.PI / 2} // restrict vertical movement
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        target={[0, 1.5, 0]}
        rotateSpeed={0.2}
      />
    </Canvas>
  );
}

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 300 }) {
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 2 + 0.5;
    }
    return s;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#2dd4a0"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeo() {
  const torusRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.2;
      torusRef.current.position.y = Math.sin(t * 0.5) * 0.5;
    }
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.2;
      icoRef.current.rotation.z = t * 0.15;
      icoRef.current.position.y = Math.cos(t * 0.4) * 0.4 + 1;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.25;
      octaRef.current.rotation.z = t * 0.1;
      octaRef.current.position.y = Math.sin(t * 0.6 + 1) * 0.3 - 1;
    }
  });

  return (
    <>
      <mesh ref={torusRef} position={[3, 0, -2]}>
        <torusGeometry args={[0.8, 0.2, 16, 40]} />
        <meshStandardMaterial
          color="#2dd4a0"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={icoRef} position={[-3, 1, -3]}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color="#2dd4a0"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh ref={octaRef} position={[2, -1, -4]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#14b8a6"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#2dd4a0" />
        <Particles />
        <FloatingGeo />
      </Canvas>
    </div>
  );
}

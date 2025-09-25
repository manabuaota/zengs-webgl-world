import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 2, -5]}>
      <icosahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial
        color="#00ffff"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
};

export const WebGLBackground = () => {
  return (
    <div className="particle-bg">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ffff" />
        <ParticleField />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};
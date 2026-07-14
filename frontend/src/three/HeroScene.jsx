import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import DataNodeField from './DataNodeField';

function CoreObject() {
  const groupRef = useRef();
  const ringRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0006) * 0.16;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.32;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <torusKnotGeometry args={[1.05, 0.16, 160, 18]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.6} roughness={0.18} wireframe />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.65, 0.012, 16, 180]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.78} />
      </mesh>
      <mesh rotation={[0.7, 0.2, 0.4]}>
        <icosahedronGeometry args={[0.58, 1]} />
        <meshStandardMaterial color="#10b981" metalness={0.45} roughness={0.2} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 48 }} dpr={[1, 1.6]} performance={{ min: 0.5 }}>
        <ambientLight intensity={0.75} />
        <pointLight position={[3, 2.5, 4]} intensity={1.25} color="#22d3ee" />
        <pointLight position={[-3, -2, 3]} intensity={0.85} color="#8b5cf6" />
        <DataNodeField count={150} />
        <CoreObject />
      </Canvas>
      <div className="hero-scene__scanline" />
    </div>
  );
}

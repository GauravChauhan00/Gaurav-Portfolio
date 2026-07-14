import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

export default function DataNodeField({ count = 120 }) {
  const pointsRef = useRef();
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      values[i * 3] = (Math.random() - 0.5) * 7;
      values[i * 3 + 1] = (Math.random() - 0.5) * 4.8;
      values[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return values;
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x += delta * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#22d3ee" size={0.035} sizeAttenuation transparent opacity={0.72} />
    </points>
  );
}

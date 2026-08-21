import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

/* ─── Gold material props ─── */
const goldProps = {
  color: '#d4a017',
  metalness: 0.9,
  roughness: 0.15,
  emissive: '#7a4e00',
  emissiveIntensity: 0.35,
};

const goldShinyProps = {
  ...goldProps,
  roughness: 0.08,
  emissiveIntensity: 0.5,
};

/* ─── Scales geometry + animation ─── */
function ScalesModel() {
  const groupRef = useRef();
  const beamRef  = useRef();
  const panLRef  = useRef();
  const panRRef  = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y = t * 0.3;
    if (beamRef.current)  beamRef.current.rotation.z  = Math.sin(t * 0.6) * 0.12;
    if (panLRef.current)  panLRef.current.position.y  = -1.55 + Math.sin(t * 0.6) *  0.2;
    if (panRRef.current)  panRRef.current.position.y  = -1.55 + Math.sin(t * 0.6) * -0.2;
  });

  return (
    <group ref={groupRef} position={[0, 1.0, 0]}>

      {/* ── Pedestal base ── */}
      <mesh position={[0, -2.55, 0]}>
        <cylinderGeometry args={[0.85, 1.05, 0.22, 32]} />
        <meshStandardMaterial {...goldProps} />
      </mesh>
      {/* Pedestal stem */}
      <mesh position={[0, -2.35, 0]}>
        <cylinderGeometry args={[0.2, 0.24, 0.28, 16]} />
        <meshStandardMaterial {...goldProps} />
      </mesh>

      {/* ── Vertical pillar ── */}
      <mesh position={[0, -0.95, 0]}>
        <cylinderGeometry args={[0.065, 0.085, 3.0, 16]} />
        <meshStandardMaterial {...goldProps} />
      </mesh>

      {/* ── Pillar cap ── */}
      <mesh position={[0, 0.56, 0]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial {...goldShinyProps} />
      </mesh>

      {/* ── Horizontal beam ── */}
      <group ref={beamRef} position={[0, 0.5, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.042, 0.042, 3.6, 12]} />
          <meshStandardMaterial {...goldProps} />
        </mesh>
        {/* End caps */}
        {[-1.8, 1.8].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <sphereGeometry args={[0.068, 16, 16]} />
            <meshStandardMaterial {...goldShinyProps} />
          </mesh>
        ))}

        {/* ── Left chains ── */}
        {[-0.38, -0.72, -1.06].map((y, i) => (
          <mesh key={i} position={[-1.8, y, 0]}>
            <torusGeometry args={[0.052, 0.016, 8, 16]} />
            <meshStandardMaterial {...goldProps} />
          </mesh>
        ))}

        {/* ── Right chains ── */}
        {[-0.38, -0.72, -1.06].map((y, i) => (
          <mesh key={i} position={[1.8, y, 0]}>
            <torusGeometry args={[0.052, 0.016, 8, 16]} />
            <meshStandardMaterial {...goldProps} />
          </mesh>
        ))}

        {/* ── Left pan ── */}
        <group ref={panLRef} position={[-1.8, -1.55, 0]}>
          <mesh>
            <cylinderGeometry args={[0.58, 0.48, 0.07, 32]} />
            <meshStandardMaterial {...goldProps} />
          </mesh>
          <mesh>
            <torusGeometry args={[0.55, 0.042, 8, 32]} />
            <meshStandardMaterial {...goldShinyProps} />
          </mesh>
          {/* Support wires */}
          {[[-1, 0, 1], [1, 0, 1], [-1, 0, -1], [1, 0, -1]].map(([x, , z], i) => (
            <mesh key={i} position={[x * 0.3, 0.2, z * 0.3]} rotation={[0.44, 0, 0]}>
              <cylinderGeometry args={[0.01, 0.01, 0.46, 5]} />
              <meshStandardMaterial {...goldProps} roughness={0.3} />
            </mesh>
          ))}
        </group>

        {/* ── Right pan ── */}
        <group ref={panRRef} position={[1.8, -1.55, 0]}>
          <mesh>
            <cylinderGeometry args={[0.58, 0.48, 0.07, 32]} />
            <meshStandardMaterial {...goldProps} />
          </mesh>
          <mesh>
            <torusGeometry args={[0.55, 0.042, 8, 32]} />
            <meshStandardMaterial {...goldShinyProps} />
          </mesh>
          {[[-1, 0, 1], [1, 0, 1], [-1, 0, -1], [1, 0, -1]].map(([x, , z], i) => (
            <mesh key={i} position={[x * 0.3, 0.2, z * 0.3]} rotation={[0.44, 0, 0]}>
              <cylinderGeometry args={[0.01, 0.01, 0.46, 5]} />
              <meshStandardMaterial {...goldProps} roughness={0.3} />
            </mesh>
          ))}
        </group>
      </group>

    </group>
  );
}

/* ─── Canvas wrapper ─── */
const ScalesOf3D = () => {
  return (
    <div
      aria-hidden="true"
      style={{ width: '100%', maxWidth: '520px', aspectRatio: '1 / 1' }}
    >
      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 44 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        {/* ── Lighting ── */}
        {/* Bright ambient so the dark material doesn't go completely black */}
        <ambientLight intensity={2.5} color="#fff8ee" />

        {/* Key light — warm white from upper left */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={4}
          color="#fff5d6"
        />

        {/* Fill light — gold tint from the right */}
        <directionalLight
          position={[-4, 2, 3]}
          intensity={2}
          color="#c9a84c"
        />

        {/* Rim light — from behind to define silhouette */}
        <directionalLight
          position={[0, -3, -5]}
          intensity={1.2}
          color="#d4a017"
        />

        {/* Front accent */}
        <pointLight position={[0, 2, 5]} intensity={2.5} color="#ffeebb" />

        <ScalesModel />
      </Canvas>
    </div>
  );
};

export default ScalesOf3D;

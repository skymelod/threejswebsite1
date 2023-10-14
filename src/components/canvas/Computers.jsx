import React, {useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber"; 
import { OrbitControls, useGLTF } from "@react-three/drei";
import { HemisphereLight, PointLight, Mesh } from "three";

const Computers = ({ isMobile }) => {

  // Create lights as refs
  const hemiLight = useRef(); 
  const pointLight = useRef();

  // Load model
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Add lights to scene */}  
      <hemisphereLight ref={hemiLight} args={[0xffffff, 0xffffff, 1]} />
      <pointLight ref={pointLight} args={[0xffffff, 5]} position={[0, 0, 0]} />

      {/* Add model */}
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.1 : 0.2}
        position={isMobile ? [0.2, -0.5, -0.1] : [0.2, -0.9, 0]}
        rotation={[-0.01, -1.6, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])


  return (
    <Canvas shadows camera={{ fov: 25 }}>
      <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2} 
      />
      
      {/* Add scene with lights and model */}
      <Computers isMobile={isMobile} />

    </Canvas>
  );
};

export default ComputerCanvas;
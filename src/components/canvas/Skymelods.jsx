import React, {useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber"; 
import { OrbitControls, useGLTF } from "@react-three/drei";
import { HemisphereLight, PointLight, Mesh } from "three";

const Skymelods = ({ isMobile }) => {

  // Create lights as refs
  const hemiLight = useRef(); 
  const pointLight = useRef();

  // Load model
  const skymelod = useGLTF("./skymelod_floating/skymelo3d_floating6.gltf");

  return (
    <mesh>
      {/* Add lights to scene */}  
      <hemisphereLight ref={hemiLight} args={[0xffffff, 0xffffff, 100]} />
      <pointLight ref={pointLight} args={[0xffffff, 100]} position={[0, -0.5, 0]} />
      <pointLight ref={pointLight} args={[0xffffff, 100]} position={[0, -0.1, 0.4]} />
      <pointLight ref={pointLight} args={[0xffffff, 1]} position={[0, -0.8, 0.3]} />
      <pointLight ref={pointLight} args={[0xffffff, 5]} position={[0, 0, 0]} />
      <pointLight ref={pointLight} args={[0xffffff, 1]} position={[-0.3, -1, 2]} />
z

      {/* Add model */}
      <primitive 
        object={skymelod.scene}
        scale={isMobile ? 1 : 2.3}
        position={isMobile ? [0, -0.6, -0.1] : [0, -0.4, 0]}
        rotation={[-0.4, -1.7, -0.05]}
      />
    </mesh>
  );
};

const SkymelodCanvas = () => {
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
      <Skymelods isMobile={isMobile} />

    </Canvas>
  );
};

export default SkymelodCanvas;
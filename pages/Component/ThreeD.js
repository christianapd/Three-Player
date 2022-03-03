import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import {Box} from '@chakra-ui/react'

const Model = () => {
  const gltf = useLoader(GLTFLoader, "../Files/adamHead/adamHead.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
};

export default function ThreeD() {
  return (
    <Box as="section" h="100vh" w="100vh">
       <Canvas w="100vh" h="100vh">
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </Box>
  );
}

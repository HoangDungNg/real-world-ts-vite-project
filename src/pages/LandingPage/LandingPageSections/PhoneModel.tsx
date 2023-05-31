import { Model } from "@assets/3D-Model/Scene";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;

const PhoneModel: React.FC = () => {
  return (
    <Container id="phone-model">
      <Canvas camera={{ fov: 14 }}>
        {/**illuminate or shine light on the object */}
        <ambientLight intensity={1.25} />
        {/**control the direction of the ambientLight (default is top to bottom) */}
        <directionalLight intensity={0.4} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <Environment preset="night" />
        {/** make the object become 3D */}
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
};

export default PhoneModel;

{
  /*represent polygon object
        <mesh>
          <boxGeometry />
          this class make the object changes according the lighting scenario 
          <meshStandardMaterial color="red" />
        </mesh>*/
}

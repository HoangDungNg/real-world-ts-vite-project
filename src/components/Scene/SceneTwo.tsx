/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 scene.gltf --types
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
Title: Apple iPhone 13 Pro Max
*/

import { useLayoutEffect } from "react";
import { ECOLOR } from "@constant";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import SceneBody from "./Partial/SceneBody";
import { GLTFResult } from "./Scene";

export function ModelTwo(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/scene.gltf") as GLTFResult;
  const camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    camera.position.set(-0.1, 0.4, 5);
    materials.Body.color.set(ECOLOR.SierraBlue.hexColor);
  }, []);
  return <SceneBody props={props} nodes={nodes} materials={materials} />;
}

useGLTF.preload("/scene.gltf");

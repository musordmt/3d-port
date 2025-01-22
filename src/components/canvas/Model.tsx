import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'
import { Lights } from './Lights'
import { MeshStandardMaterial } from 'three'

// "HEAD OF A BEARDED MAN - BRITISH MUSEUM 2020" (https://skfb.ly/6QZCD) by Arqueomodel3D is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
  }
  materials: {
    Default_OBJ: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export const Model: React.FC<any> = (props) => {
  const group = useRef<THREE.Group>()

  const laptop = useGLTF('/mac-draco.glb') as GLTFResult
  laptop.scene.scale.set(0.5, 0.5, 0.5)
  laptop.scene.position.set(-7, 2, 0)
  laptop.scene.rotation.set(0, 45, 0)

  const { scene, animations } = useGLTF('/model.glb') as GLTFResult
  scene.scale.set(4, 4, 4)
  scene.position.set(6, 2, 0)
  scene.rotation.set(0, -0.5, 0)

  const { actions, mixer } = useAnimations(animations, group);

  useFrame(({ pointer }) => {

  })

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  }, [mixer]);

  return (

    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} dispose={null} />
      <primitive object={laptop.scene} />
      <Lights />
    </group>
  )
}

useGLTF.preload('/mac-draco.glb')

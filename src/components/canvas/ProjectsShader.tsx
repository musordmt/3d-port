import React, { Suspense } from 'react'
import { useThree, Vector3 } from '@react-three/fiber'
import {
  Html,
  Loader,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  Sparkles,
  Text,
  Image
} from '@react-three/drei'

import Shader from './Shader/Shader'

const ProjectsShader: React.FC = () => {
  const posY = -0.5

  const images = [
    {
      title: 'Solves Pro',
      position: [-0.4, -4.3 + posY, -0.09],
      src: '/img/projects/solves.png',
      url: 'https://solves.pro/',
      role: "Role : 3D Three.js developer",
      archieve: "Task : 3D Digital Map development",
      client: "Contact : Mike Amirov - CEO Founder",
      skill: "Skills : Vue.js, Three.js",
    },

    {
      title: 'The Code Giant services inc',
      position: [-0.4, -3.5 + posY, -0.09],
      src: '/img/projects/codegiant.png',
      url: 'https://www.thecodegiant.ca/',
      role: "Role : 3D Three.js developer",
      archieve: "Task : 3D NFT Art Gallery development",
      client: "Contact : Ali Alizada",
      skill: "Skills : Three.js, React.js",
    },

    {
      title: 'ShowRoom LLC',
      position: [-0.4, -2.7 + posY, -0.09],
      src: '/img/projects/showroom.png',
      url: 'https://www.linkedin.com/company/showroomglobal/',
      role: "Role : Three.js developer",
      archieve: "Task : 3D Virtual Store development ",
      client: "Contact : Michael Bilstein - CTO",
      skill: "Skills : React.js, Three.js",
    },

    {
      title: 'Scandinavian Digital',
      position: [-0.4, -1.8 + posY, -0.09],
      src: '/img/projects/scan.png',
      url: 'https://scandinaviandigital.com/',
      role: "Role : Three.js developer",
      archieve: "Task : 3D Product Configurator ",
      client: "Contact : Simon Nielsen - CEO",
      skill: "Skills : React.js, Three.js",
    },

    {
      title: 'V M I Studio Ltd ',
      position: [-0.4, -1 + posY, -0.09],
      src: '/img/projects/VMI.png',
      url: 'https://www.vmistudio.com/',
      role: "Role : 3D FrontEnd developer",
      archieve: "Task : 3D Building  Configurator",
      client: "Contact : Andrea Munoz",
      skill: "Skills : React.js, Three.js",
    },


  ]

  const { width } = useThree((state) => state.viewport)

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 1]}
        fov={55}
        near={0.1}
        far={100}
      />

      <ScrollControls
        pages={5.5}
        distance={1}
        damping={4}
        horizontal={false}
        infinite={false}
      >
        <fog attach='fog' args={[0x050505, 0, 6]} />
        <Scroll>
          <Sparkles
            count={35}
            position={[-0.5, -2, -3.5]}
            scale={[6, 10, 10]}
            size={5}
            speed={3}
          />
          <Suspense
            fallback={
              <Html>
                <Loader />
              </Html>
            }
          >
            <Shader
              image={'/img/projects/texture.webp'}
              planeArgs={[6, 4, 32, 32]}
              planeRotation={[-Math.PI / 2.3, 0, 0]}
              wireframe={true}
              pointer={false}
              position={[0, -0.2, -1]}
            />

            {images.map((image, i) => {
              const { position, src, title, url, role, archieve, client, skill } = image

              return (
                <group key={url}>
                  <Shader
                    image={src}
                    position={position as Vector3}
                    planeArgs={[0.5, 0.3, 32, 32]}
                    planeRotation={[0, 0, 0]}
                    pointer={true}
                    url={url}
                  />
                  <Text
                    position={[0, position[1] + 0.3, 0.1] as Vector3}
                    fillOpacity={0.7}
                    font='/FogtwoNo5.otf'
                    fontSize={width / 20}
                    material-toneMapped={false}
                    anchorX='center'
                    anchorY='middle'
                  >
                    {title}
                  </Text>
                  <Text
                    position={[0.4, position[1] + 0.1, 0.1] as Vector3}
                    fillOpacity={0.7}
                    // font='/FogtwoNo5.otf'
                    fontSize={width / 50}
                    material-toneMapped={false}
                    anchorX='center'
                    anchorY='middle'
                  >
                    {role}
                  </Text>
                  <Text
                    position={[0.4, position[1] + 0.03, 0.1] as Vector3}
                    fillOpacity={0.7}
                    // font='/FogtwoNo5.otf'
                    fontSize={width / 50}
                    material-toneMapped={false}
                    anchorX='center'
                    anchorY='middle'
                  >
                    {archieve}
                  </Text>
                  <Text
                    position={[0.4, position[1] - 0.04, 0.1] as Vector3}
                    fillOpacity={0.7}
                    // font='/FogtwoNo5.otf'
                    fontSize={width / 50}
                    material-toneMapped={false}
                    anchorX='center'
                    anchorY='middle'
                  >
                    {skill}
                  </Text>
                  <Text
                    position={[0.4, position[1] - 0.11, 0.1] as Vector3}
                    fillOpacity={0.7}
                    // font='/FogtwoNo5.otf'
                    fontSize={width / 50}
                    material-toneMapped={false}
                    anchorX='center'
                    anchorY='middle'
                  >
                    {client}
                  </Text>

                </group>
              )
            })}
            <Text
              position={[0, 0.7, -3]}
              rotation={[-0.3, 0, 0]}
              lineHeight={1.3}
              fillOpacity={1}
              font='/FogtwoNo5.otf'
              fontSize={width / 2}
              material-toneMapped={false}
              anchorX='center'
              anchorY='middle'
            >
              Clients
            </Text>
          </Suspense>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default ProjectsShader

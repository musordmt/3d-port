import * as THREE from 'three'
import React, { useEffect, useRef, useState, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Sparkles, Html } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'
import { Group, Mesh, Object3D } from 'three'
import { CircularProgress } from "@mui/material";


const GOLDENRATIO = 1.5

const Loader = () => {
    return (
        <Html center>
            <CircularProgress />
        </Html>
    )
}

const ProjectsGallery: React.FC = () => {

    const pexel = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
    const images = [
        // Front
        // {
        //     position: [0, 0, 2.0],
        //     rotation: [0, 0, 0],
        //     src: '/img/projects/virtual.png',
        //     title: "3D Virtual Tour",
        //     url: 'https://vws.bal-inc.jp/'
        // },
        // Back
        {
            position: [-0.8, 0, -0.6],
            rotation: [0, 0, 0],
            src: '/img/projects/configurator.png',
            title: "Cabinet Design",
            url: 'https://shelvesconfigurator.web.app/',
        },
        {
            position: [0.8, 0, -0.6],
            rotation: [0, 0, 0],
            src: '/img/projects/festival.jpg',
            title: "ZIZO",
            url: 'https://wearezizo.com/',
        },
        // Left
        {
            position: [-1.75, 0, 0.25],
            rotation: [0, Math.PI / 2.5, 0],
            src: '/img/projects/town.png',
            title: '3D Town Map',
            url: 'https://www.borraginol.com/town/',
        },
        {
            position: [-2.3, 0, 1.5],
            rotation: [0, Math.PI / 2.5, 0],
            src: '/img/projects/nectarverse.PNG',
            title: 'Nectarverse',
            url: "http://nectarverse-11d5-staging.fly.dev/explore"
        },
        {
            position: [-3, 0, 2.5],
            rotation: [0, Math.PI / 2.5, 0],
            src: '/img/projects/house.png',
            title: '3D Bathroom Design',
            url: 'https://imagin3d.reece.com.au/',
        },
        // Right
        {
            position: [1.75, 0, 0.25],
            rotation: [0, -Math.PI / 2.5, 0],
            src: '/img/projects/nova.png',
            title: "Exhibition",
            url: 'https://app.tetra3D.com',
        },
        {
            position: [2.3, 0, 1.5],
            rotation: [0, -Math.PI / 2.5, 0],
            src: '/img/projects/ogp.jpg',
            title: "3D Metaverse",
            url: 'https://vws.bal-inc.jp/',
        },
        {
            position: [3, 0, 2.5],
            rotation: [0, -Math.PI / 2.5, 0],
            src: '/img/projects/shirt.png',
            title: "3D Jersey Design",
            url: 'https://www.owayo.co.uk/konfigurator_html/index.php?sport=cycling&product=bikejerseys_pro_longsleeves&lang=en&land=en&design=etape#',

        }
    ]

    return (
        <>
            <Sparkles count={80} scale={[20, 20, 10]} size={5} speed={5} />
            <fog attach="fog" args={['#191920', 0, 15]} />
            <directionalLight position={[5, 10, -8]} castShadow intensity={2} shadow-mapSize={2048} shadow-bias={-0.001}>
                <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
            </directionalLight>
            <Suspense fallback={<Loader />}  >
                <group position={[0, -0.5, 0]}>
                    <Frames images={images} />
                    <mesh rotation={[-Math.PI / 2, 0, 0]} >
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            mirror={1}
                            blur={[300, 100]}
                            resolution={2048}
                            mixBlur={1}
                            mixStrength={50}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#050505"
                            metalness={0.5}
                        />
                    </mesh>
                    {/* <Text
                    maxWidth={10}
                    anchorX="left"
                    anchorY="top"
                    position={[-2.7, 2.1, 2.7]}
                    rotation={[0, Math.PI / 2.5, 0]}
                    fontSize={0.25}
                    color="red"
                >
                    3D Web Development
                </Text>
                <Text
                    maxWidth={10}
                    anchorX="left"
                    anchorY="top"
                    position={[1.7, 2, 0.7]}
                    rotation={[0, -Math.PI / 2.5, 0]}
                    fontSize={0.25}
                    color="red"
                >
                    3D Game Development
                </Text> */}
                </group>
            </Suspense>

            {/* <Environment preset="city" /> */}
        </>
    )
}

export default ProjectsGallery

const Frames = ({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) => {
    const ref = useRef<Group>()
    const clicked = useRef<Object3D>()
    const [, params] = useRoute('/project/:id')
    const [, setLocation] = useLocation()
    useEffect(() => {
        clicked.current = ref.current.getObjectByName(params?.id)
        if (clicked.current) {
            clicked.current.parent.updateWorldMatrix(true, true)
            clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.5))
            clicked.current.parent.getWorldQuaternion(q)
        } else {
            p.set(0, 0, 5.5)
            q.identity()
        }
    })
    useFrame((state, dt) => {
        easing.damp3(state.camera.position, p, 0.4, dt)
        easing.dampQ(state.camera.quaternion, q, 0.4, dt)
    })
    return (
        <group
            ref={ref}
            onClick={(e) => {
                e.stopPropagation();
                setLocation('/project/' + e.object.name);
                if (clicked.current === e.object) {
                    window.open(e.object.userData[0], "_blank")
                }
            }}
            onPointerMissed={() => setLocation('/')}>
            {images.map((props) => <Frame key={props.src}  {...props} /> /* prettier-ignore */)}
        </group>
    )
}

const Frame = ({ src, url, title, c = new THREE.Color(), ...props }) => {
    const image = useRef<Mesh>()
    const frame = useRef<Mesh>()
    const [, params] = useRoute('/project/:id')
    const [hovered, hover] = useState(false)
    const [rnd] = useState(() => Math.random())
    const name = getUuid(src)
    const isActive = params?.id === name
    useCursor(hovered)
    useFrame((state, dt) => {
        // image.current.material.zoom = 1 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
        easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.8 : 1), 0.9 * (!isActive && hovered ? 0.90 : 1), 1], 0.1, dt)
        // easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
    })
    return (
        <group {...props}>
            <mesh
                name={name}
                userData={[url]}
                onPointerOver={(e) => (e.stopPropagation(), hover(true))}
                onPointerOut={() => hover(false)}
                scale={[1, GOLDENRATIO, 0.05]}
                position={[0, GOLDENRATIO / 2, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
                <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
                    <boxGeometry />
                    <meshBasicMaterial toneMapped={false} fog={false} />
                </mesh>
                <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={src} />
            </mesh>
            <Text
                maxWidth={5}
                anchorX="left"
                anchorY="top"
                position={[-0.4, GOLDENRATIO + 0.17, 0]}
                fontSize={0.13}
            >
                {title.split('-').join(' ')}
            </Text>
            {
                isActive &&
                <Text
                    maxWidth={5}
                    anchorX="left"
                    anchorY="top"
                    position={[0, 0.2, 0.1]}
                    fontSize={0.08}
                    color="red"
                    onClick={(e) => {
                        window.open(url, "_blank")
                    }}
                >
                    Live View
                </Text>
            }

        </group>
    )
}



import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'

const LCanvas = ({ children }) => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ fov: 70, position: [0, 2, 15] }}
    >
      <Preload all />
      {children}
    </Canvas>
  )
}

export default LCanvas

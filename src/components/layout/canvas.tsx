import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useRouter } from 'next/router'

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  const router = useRouter()
  const path = router.pathname

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        zIndex: `${path !== '/projects' ? 9 : 11}`,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
      shadows
      camera={{ position: [0, 1.5, 14], fov: 50 }}
    >
      {/* <LControl /> */}
      <Preload all />
      {children}
      {/* <Stats /> */}
    </Canvas>
  )
}

export default LCanvas

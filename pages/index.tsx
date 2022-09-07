import type { NextPage } from 'next'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Stats, useTexture, TransformControls } from '@react-three/drei'
import { AnimatedBox } from '../components/AnimatedBox'
import { Lights } from '../components/Lights'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Pier = () => {
  const model = useLoader(GLTFLoader, "./models/pier/marble_bust_01_1k.gltf")

  model.scene.traverse((object) => {
    if(object.isMesh) {
      object.castShadow = true
    }
  })

  return <primitive object={model.scene} />
}

const MaterialsLesson = () => {
  const map = useTexture('./textures/cobblestone_floor_04_diff_1k.png')
  // const displacement = useTexture('./textures/cobblestone_floor_04_disp_1k.png')
  const normalMap = useTexture('./textures/cobblestone_floor_04_nor_gl_1k.png')
  const roughnessMap = useTexture('./textures/cobblestone_floor_04_rough_1k.png')

  return (<>
    <mesh scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} castShadow>
      <sphereGeometry />
      <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap}/>
    </mesh>

    {/* <mesh scale={[0.5, 0.5, 0.5]} position={[1, 0, 0]}>
      <sphereGeometry args={[1, 200, 200]}/>
      <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap} displacementMap={displacement} displacementScale={0.05}/>
    </mesh> */}
  </>
  )
}

const Home: NextPage = () => {
  const stage = true

  return (
    <div className="container">
      <Canvas shadows>
        {stage ? <><Stats />
        <axesHelper args={[2]} />
        <gridHelper args={[10, 10]} /></> : null}
        {/* <CameraOrbitController /> */}
        <OrbitControls />
        {/* <AnimatedBox /> */}
        <Pier />
        <Lights />
        <MaterialsLesson />
        <mesh rotation={[Math.PI * -0.5, 0, 0]} receiveShadow>
          <planeBufferGeometry args={[1000, 1000]} />
          <meshStandardMaterial color={"#458745"}/>
        </mesh>
      </Canvas>
    </div>
  )
}

export default Home

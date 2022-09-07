import { useFrame } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { BoxHelper } from 'three'

export const AnimatedBox = () => {
  const myMesh = useRef<THREE.Mesh>(null)
  useHelper(myMesh, BoxHelper, 'blue')

  useFrame(() => {
    // console.log('hi')
    if(myMesh.current) {
      myMesh.current.rotation.y += 0.01
    }
  })

  return (<mesh scale={[0.5, 0.5, 0.5]} ref={myMesh}>
    <boxGeometry />
    <meshStandardMaterial /></mesh>)

}
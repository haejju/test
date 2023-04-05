import useSpline from '@splinetool/r3f-spline'
import { PerspectiveCamera } from '@react-three/drei'

export default function Scene({ ...props }){
  const { nodes, materials } = useSpline('https://prod.spline.design/wLdyeKxwkwmhWy03/scene.splinecode')

  return (
    <>
      <color attach="background" args={['#4b4b4b']} />
      <group {...props} dispose={null}>
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100000}
          near={70}
          fov={45}
          position={[-1956.71, 177.55, 326.24]}
        />
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials['Rectangle Material']}
          castShadow
          receiveShadow
          position={[1598.15, 0, 3707]}
        />
        <mesh
          name="Rectangle1"
          geometry={nodes.Rectangle1.geometry}
          material={materials['Rectangle1 Material']}
          castShadow
          receiveShadow
          position={[1564.02, 0, 1937.18]}
        />
        <mesh
          name="Rectangle2"
          geometry={nodes.Rectangle2.geometry}
          material={materials['Rectangle2 Material']}
          castShadow
          receiveShadow
          position={[1557.1, 0, 651.27]}
        />
        <group name="Group" position={[4335.68, 311.88, 1098.52]}>
          <pointLight
            name="Point Light 2"
            castShadow
            intensity={1}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            position={[-152.01, -195.04, -66.3]}
            rotation={[0, 1.51, 0]}
          />
          <pointLight
            name="Point Light"
            castShadow
            intensity={1}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            position={[152.01, 195.04, 94.5]}
            rotation={[0, 1.51, 0]}
          />
          <mesh
            name="Path 2"
            geometry={nodes['Path 2'].geometry}
            material={materials['Path 2 Material']}
            castShadow
            receiveShadow
            position={[-47.63, 96.6, -44.79]}
          />
        </group>
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials['Sphere Material']}
          castShadow
          receiveShadow
          position={[4292.27, 260.04, 2479.08]}
          scale={0.51}
        />
        <group name="Group3" position={[4256.46, 222.09, 2441.02]}>
          <mesh
            name="Sphere 10"
            geometry={nodes['Sphere 10'].geometry}
            material={materials['Sphere 10 Material']}
            castShadow
            receiveShadow
            position={[-117.57, 157.12, -50.2]}
            rotation={[0, 0.96, 0]}
            scale={0.51}
          />
          <mesh
            name="Sphere 8"
            geometry={nodes['Sphere 8'].geometry}
            material={materials['Sphere 8 Material']}
            castShadow
            receiveShadow
            position={[163.14, 124.23, 197.51]}
            scale={0.51}
          />
          <mesh
            name="Sphere 7"
            geometry={nodes['Sphere 7'].geometry}
            material={materials['Sphere 7 Material']}
            castShadow
            receiveShadow
            position={[-54.85, -117.42, 81.46]}
            rotation={[0.17, 0.44, 0]}
            scale={0.51}
          />
          <mesh
            name="Sphere 3"
            geometry={nodes['Sphere 3'].geometry}
            material={materials['Sphere 3 Material']}
            castShadow
            receiveShadow
            position={[180.61, -99.87, 183.17]}
            rotation={[0.17, 0.44, 0]}
            scale={0.51}
          />
          <mesh
            name="Sphere 2"
            geometry={nodes['Sphere 2'].geometry}
            material={materials['Sphere 2 Material']}
            castShadow
            receiveShadow
            position={[68.64, 149.54, -104.28]}
            scale={0.51}
          />
          <mesh
            name="Sphere 21"
            geometry={nodes['Sphere 21'].geometry}
            material={materials['Sphere 21 Material']}
            castShadow
            receiveShadow
            position={[136.27, -98.59, -83.33]}
            scale={0.51}
          />
        </group>
        <mesh
          name="Torus Knot"
          geometry={nodes['Torus Knot'].geometry}
          material={materials['']}
          castShadow
          receiveShadow
          position={[4331.95, 247.08, 4354.94]}
        />
        <mesh
          name="Path"
          geometry={nodes.Path.geometry}
          material={materials['Path Material']}
          castShadow
          receiveShadow
          position={[1325.27, 95.94, -15.02]}
          rotation={[0.09, 0.18, -1.44]}
          scale={[0.29, 0.49, 0.25]}
        />
        <mesh
          name="Ellipse"
          geometry={nodes.Ellipse.geometry}
          material={materials['Ellipse Material']}
          visible={false}
          castShadow
          receiveShadow
          position={[1010.18, -96.6, 127.37]}
          rotation={[-0.15, 0, -1.31]}
          scale={1}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}

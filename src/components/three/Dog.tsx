import { useGLTF } from "@react-three/drei";

export function Dog(props: any) {
    const { scene } = useGLTF("/models/dog.glb");
    return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/dog.glb");
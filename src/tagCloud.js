import * as THREE from "three";
import "../src/styles.css";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
let MyList = [
  "React",
  "Node.js",
  "MySQL",
  "JavaScript",
  "Python",
  "Git",
  "HTML",
  "CSS",
  "Java",
  "C++",
  "Spring",
  "Spring Boot",
  "AWS",
  "REST",
  "Android",
  "Bootstrap",
  "JQuery",
  "GitHub",
];
function Word({ children, ...props }) {
  const color = new THREE.Color("#8892b0");
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
    color: new THREE.Color("rgb(136, 146, 176)"),
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#64ffda" : "#ccd6f6"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}
function wordFromMyList(i, j) {
  return MyList[i * 4 + j];
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution

  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          wordFromMyList(i, j),
        ]);
    return temp;
  }, [count, radius]);

  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function TagCloud() {
  return (
    <div id="thiscanvas">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 70 }}>
        <fog attach="fog" args={["#64ffda", 15, 80]} />
        <Cloud count={4} radius={15} />
        <TrackballControls />
      </Canvas>
    </div>
  );
}
//202025

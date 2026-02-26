import { Shader, Aurora, Godrays } from "shaders/react";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#05070d" }}>
      <Shader>
        <Aurora
          colorA="#FFFFFF"
          colorB="#C4C4C4"
          colorC="#00FFFF"
          colorSpace="oklch"
          balance={50}
          intensity={95}
          curtainCount={10}
          speed={25}
          rayDensity={90}
          height={20}
          center={{ x: 0.5, y: 0.5 }}
          seed={0}
        /> 
        <Godrays
        blendMode="multiply"
        intensity={45}
        contrast={1}
        balance={30}
        speed={10.3}
        />
      </Shader>
    </div>
  );
}

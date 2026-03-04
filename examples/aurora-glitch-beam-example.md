# Aurora Glitch Beam Example
![](https://github.com/user-attachments/assets/7ab494ee-06b4-4a16-a5f1-d9fb35427aa8)

## Code
Update `src/App.jsx` to the following:

```jsx
import { Shader, Aurora, Beam, Glitch } from "shaders/react";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#05070d" }}>
      <Shader>
      <Glitch>
        <Aurora
          colorA="#a533f8"
          colorB="#22ee88"
          colorC="#1694e8"
          colorSpace="lch"
          balance={10}
          intensity={500}
          curtainCount={4}
          speed={80}
          waviness={5}
          rayDensity={20}
          height={30}
          seed={0}
        />
        <Beam
          colorSpace="lch"
          startPosition={{ "x":0.2, "y":0.5 }}
          endPosition={{ "x":0.8, "y":0.5 }}
        />
      </Glitch>
      </Shader>
    </div>
  );
}
```
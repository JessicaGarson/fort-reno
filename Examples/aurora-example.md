# Aurora Example 
<img width="1562" height="881" alt="Example of aurora" src="https://github.com/user-attachments/assets/7f3dcbcb-5c9b-42ca-b0f4-8cd02f046ece" />

## Code 
Update `src/App.jsx` to the following:

```jsx
import { Shader, Aurora } from "shaders/react";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#05070d" }}>
      <Shader>
        <Aurora
          colorA="#a533f8"
          colorB="#22ee88"
          colorC="#1694e8"
          colorSpace="lch"
          balance={10}
          intensity={50}
          curtainCount={4}
          speed={80}
          waviness={5}
          rayDensity={20}
          height={30 }
          center={{ x: 0.5, y: 0.5 }}
          seed={0}
        />
      </Shader>
    </div>
  );
}
```

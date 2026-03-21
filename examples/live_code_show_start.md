# Livecode NYC show start
<img width="1705" height="873" alt="Screenshot 2026-03-21 at 3 19 10 PM" src="https://github.com/user-attachments/assets/356418d7-cc8d-427e-a1fe-53f009b12f98" />

## Code 
```js
import { Shader, Plasma,  } from "shaders/react";
import { useAudioParams } from "./useAudioParams";

export default function App() {
  const { speed, intensity, waviness, rays } = useAudioParams();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        overflow: "hidden",
        background: "#FF3659",
      }}
    >
      <Shader style={{ width: "100%", height: "100%", display: "block" }}>
        <Plasma
          density={1.5 + rays * 2}
          speed={speed}
          intensity={intensity / 50}
          warp={waviness / 100}
          contrast={0.8 + rays * 0.5}
          balance={66}
          colorA="#FF3659"
          colorB="#000000"
          colorSpace="oklab"
        />
      </Shader>
    </div>
  );
}
```

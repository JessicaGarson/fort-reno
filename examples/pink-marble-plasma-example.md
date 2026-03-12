# Pink Marble Plasma Example

![](https://github.com/user-attachments/assets/53a93019-a31f-4ed2-9f47-8407b02adb64)

## Code

```jsx
import { Shader, Plasma } from "shaders/react";

export default function App() {
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
          density={2}
          speed={20}
          intensity={1.5}
          warp={0.6}
          contrast={0.8}
          balance={66}
          colorA="#FF3659"
          colorB="#c4c4c4"
          colorSpace="oklab"
        />
      </Shader>
    </div>
  );
}
```

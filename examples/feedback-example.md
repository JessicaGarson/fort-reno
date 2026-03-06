# Feedback Example
![Feedback](https://github.com/user-attachments/assets/a54419d9-4d4b-453f-8d1a-ce342d026b97)

## Code
Update `src/App.jsx` to the following:

```jsx
import { Shader, Aurora } from "shaders/react";
import { buildFeedbackLayers } from "./feedback";

export default function App() {
  const base = {
    colorA: "#FFFAFA",
    colorB: "#22ee88",
    colorC: "#1694e8",
    colorSpace: "oklab",
    center: 0.3,
    balance: 10,
    intensity: 100,
    curtainCount: 20,
    speed: 80,
    waviness: 140,
    rayDensity: 1101,
    height: 200,
    seed: 9,
  };

  const layers = buildFeedbackLayers(base);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#FFB5C0" }}>
      <Shader>
        {layers.map((props, i) => (
          <Aurora key={i} {...props} />
        ))}
      </Shader>
    </div>
  );
}
```



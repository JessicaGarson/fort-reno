# Skinny Apartment Show Poster Example 
![Painted Faces](https://github.com/user-attachments/assets/05fcf252-07ea-44d6-8d15-8437efec0003)

## Background image
![fort-reno](https://github.com/user-attachments/assets/8506b193-cd79-4a7a-8a06-2944df3956c6)

## Code
Update `src/App.jsx` to the following:

```jsx
import { Shader, Aurora } from "shaders/react";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#228B22" }}>
      <Shader>
        <Aurora
          colorA="#FF8C00"
          colorB="#22ee88"
          colorC="#1694e8"
          colorSpace="oklab"
          center={0.3}
          balance={10}
          intensity={100}
          curtainCount={20}
          speed={80}
          waviness={14}
          rayDensity={1101}
          height={200}
          seed={9}
        />
      </Shader>
    </div>
  );
}
```

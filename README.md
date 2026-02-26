# fort reno

fort reno is a simple React based livecoding framework built on top of [Shaders](https://shaders.com/docs/guide), using the declarative, component-based syntax built to stay lightweight, fast to tweak, and reliable during performance. Named after the historic DC DIY summer concert series.

## What It Is

- A minimal environment for live visual coding
- A quick way to test and layer shader-based scenes
- A performance tool designed for real-time improvisation

## Getting Started

1. Clone the repo.
2. Install dependencies:

```bash
npm install
```

3. Run in development mode:

```bash
npm run dev
```

4. Open the local URL shown in your terminal.

## Basic Example

Update `src/App.jsx` to the following:

```jsx 
import { Shader, Aurora, Godrays } from "shaders/react";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#05070d" }}>
      <Shader>
        <Aurora intensity={80} speed={3} />
        <Godrays intensity={0.8} speed={5} />
      </Shader>
    </div>
  );
}
```
In your terminal, run:

```bash
npm run dev
```

Visit `http://localhost:5173`

You should see something similar to the following: 

<img width="1721" height="862" alt="Screenshot 2026-02-26 at 2 20 58 PM" src="https://github.com/user-attachments/assets/a38b847e-5c17-41dd-a16c-f68c0f9e7602" />


## Example Performance Workflow

1. Start with base scene.
2. Keep key parameters mapped for fast edits (intensity, speed, color, density).
3. Add additional components listed in the [documention for Shaders](https://shaders.com/docs/components). 
4. Build transitions by gradually changing one or two parameters at a time.

import { useEffect, useState } from "react";

export function useAudioParams() {
  const [params, setParams] = useState({
    speed: 5,
    intensity: 80,
    waviness: 50,
    rays: 0.6,
  });

  useEffect(() => {
    let raf;
    let ctx;
    let analyser;
    let data;

    const map = (v, min, max) => min + v * (max - min);

    const start = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      ctx = new AudioContext();
      const src = ctx.createMediaStreamSource(stream);
      analyser = ctx.createAnalyser();
      analyser.fftSize = 1024;
      src.connect(analyser);

      data = new Uint8Array(analyser.frequencyBinCount);

      const avg = (a, b) => {
        let sum = 0;
        for (let i = a; i < b; i++) sum += data[i];
        return sum / (b - a) / 255;
      };

      const tick = () => {
        analyser.getByteFrequencyData(data);
        const low = avg(2, 20);
        const mid = avg(20, 80);
        const high = avg(80, 180);
        const overall = (low + mid + high) / 3;

        setParams({
          speed: map(mid, 1, 10),
          intensity: map(overall, 50, 100),
          waviness: map(high, 20, 90),
          rays: map(low, 0.2, 1.1),
        });

        raf = requestAnimationFrame(tick);
      };

      tick();
    };

    start().catch(console.error);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (ctx) ctx.close();
    };
  }, []);

  return params;
}

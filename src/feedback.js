export const feedbackDefaults = {
    passes: 7,
    amount: 0.84,
    speedJitter: 0.03,
  };
  
  function normalizeCenter(center) {
    if (typeof center === "number") return { x: center, y: 0.5 };
    return center ?? { x: 0.5, y: 0.5 };
  }
  
  export function buildFeedbackLayers(base, cfg = feedbackDefaults) {
    const center = normalizeCenter(base.center);
  
    return Array.from({ length: cfg.passes }).map((_, i) => {
      const decay = Math.pow(cfg.amount, i);
      return {
        ...base,
        center, // no drift
        intensity: (base.intensity ?? 80) * decay,
        speed: (base.speed ?? 5) * (1 + i * cfg.speedJitter),
        seed: (base.seed ?? 0) + i,
      };
    });
  }
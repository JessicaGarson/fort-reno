export const feedbackDefaults = {
  passes: 7,
  amount: 0.84,
  driftY: -0.02,
  speedJitter: 0.03,
};

export function buildFeedbackLayers(base, cfg = feedbackDefaults) {
  const center = base.center ?? { x: 0.5, y: 0.5 };

  return Array.from({ length: cfg.passes }).map((_, i) => {
    const decay = Math.pow(cfg.amount, i);
    return {
      ...base,
      center: { x: center.x, y: center.y + cfg.driftY * i },
      intensity: (base.intensity ?? 80) * decay,
      speed: (base.speed ?? 5) * (1 + i * cfg.speedJitter),
      seed: (base.seed ?? 0) + i,
    };
  });
}

import React from 'react';

export const BeamGridBackground: React.FC = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <div className="pointer-events-none absolute inset-0 z-0 size-full transform-gpu [background-image:radial-gradient(var(--size)_circle_at_var(--x)_var(--y),#A258FF_0%,transparent_80%)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute inset-0 z-10 size-full bg-grid-white/[0.02]" />
      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* You can customize the content here or pass children */}
        <h1 className="text-4xl font-bold text-white">Beam Grid Background</h1>
        <p className="mt-2 text-lg text-gray-400">This is a placeholder component.</p>
      </div>
    </div>
  );
};

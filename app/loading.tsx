export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing Logo Placeholder */}
        <div className="relative">
          <div className="w-12 h-12 rounded-lg bg-primary/20 animate-pulse" />
          <div className="absolute inset-0 w-12 h-12 rounded-lg bg-primary/10 animate-ping" />
        </div>

        {/* Loading Bars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-8 bg-primary/30 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>

        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          Initializing...
        </span>
      </div>
    </div>
  );
}

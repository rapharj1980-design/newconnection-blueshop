import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { isMuted, loadMutedFromStorage, subscribeMuted, toggleMuted } from "@/lib/ui-sound";

/** Toggle de som da interface (persistido em localStorage). */
export function SoundToggle({ className = "" }: { className?: string }) {
  const [muted, setMutedState] = useState(false);

  useEffect(() => {
    setMutedState(loadMutedFromStorage());
    return subscribeMuted(setMutedState);
  }, []);

  return (
    <button
      type="button"
      onClick={() => toggleMuted()}
      aria-pressed={!muted}
      aria-label={muted ? "Ativar sons da interface" : "Desativar sons da interface"}
      title={muted ? "Ativar sons" : "Desativar sons"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-gradient-soft text-foreground shadow-card transition-all hover:-translate-y-0.5 hover:bg-gradient-brand hover:text-primary-foreground hover:shadow-glow ${className}`}
    >
      {muted ? (
        <VolumeX className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Volume2 className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}

export { isMuted };

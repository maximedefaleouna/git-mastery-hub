import { chapters } from "@/data/chapters";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  activeChapter: string;
}

export function ProgressBar({ activeChapter }: ProgressBarProps) {
  const currentIndex = chapters.findIndex(c => c.id === activeChapter);
  const progress = ((currentIndex + 1) / chapters.length) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 lg:left-[280px]">
      <div className="h-1 bg-secondary">
        <div
          className="h-full bg-gradient-to-r from-git-green to-github-orange transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute right-4 top-3 text-xs text-muted-foreground">
        <span className="text-primary font-medium">{currentIndex + 1}</span>
        <span> / {chapters.length}</span>
      </div>
    </div>
  );
}

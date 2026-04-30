import { chapters } from "@/data/chapters";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Download,
  Terminal,
  GitBranch,
  GitMerge,
  Github,
  Cloud,
  GitPullRequest,
  Zap,
  Award,
  Menu,
  X,
  Users,
  PlayCircle,
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={18} />,
  Download: <Download size={18} />,
  Terminal: <Terminal size={18} />,
  GitBranch: <GitBranch size={18} />,
  GitMerge: <GitMerge size={18} />,
  Github: <Github size={18} />,
  Cloud: <Cloud size={18} />,
  GitPullRequest: <GitPullRequest size={18} />,
  Zap: <Zap size={18} />,
  Award: <Award size={18} />,
};

interface SidebarProps {
  activeChapter: string;
  onChapterChange: (chapterId: string) => void;
}

export function Sidebar({ activeChapter, onChapterChange }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleChange = (id: string) => {
    onChapterChange(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-card border border-border"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-[280px] bg-sidebar border-r border-sidebar-border z-40",
          "flex flex-col transition-transform duration-300 lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-git-green to-github-orange flex items-center justify-center">
              <GitBranch
                className="text-sidebar-primary-foreground"
                size={22}
              />
            </div>
            <div>
              <h1 className="font-bold text-lg text-sidebar-foreground">
                Git & GitHub
              </h1>
              <p className="text-xs text-muted-foreground">Tutoriel Complet</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto scrollbar-thin p-4">
          <div className="space-y-1">
            {/* 👥 TEAM */}
            <button
              onClick={() => handleChange("team")}
              className={cn(
                "nav-link w-full text-left",
                activeChapter === "team" && "nav-link-active"
              )}
            >
              <span
                className={cn(
                  "flex items-center justify-center w-7 h-7 rounded-md",
                  activeChapter === "team"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                <Users size={16} />
              </span>
              <span className="flex-1 truncate text-sm">Notre Équipe</span>
            </button>

            {/* Chapters */}
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => handleChange(chapter.id)}
                className={cn(
                  "nav-link w-full text-left",
                  activeChapter === chapter.id && "nav-link-active"
                )}
              >
                <span
                  className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-md text-sm font-medium",
                    activeChapter === chapter.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {chapter.number}
                </span>

                <span className="flex-1 truncate text-sm">{chapter.title}</span>

                <span
                  className={cn(
                    activeChapter === chapter.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {iconMap[chapter.icon]}
                </span>
              </button>
            ))}
            {/* Vidéo complète */}
            <button
              onClick={() => handleChange("video")}
              className={cn(
                "nav-link w-full text-left mt-3 border-t border-sidebar-border pt-3",
                activeChapter === "video" && "nav-link-active"
              )}
            >
              <span
                className={cn(
                  "flex items-center justify-center w-7 h-7 rounded-md",
                  activeChapter === "video"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {/* <BookOpen size={16} /> */}
                <PlayCircle size={16} />
              </span>

              <span className="flex-1 truncate text-sm font-medium">
                Vidéo complète
              </span>
            </button>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-muted-foreground text-center">
            <p>{chapters.length} chapitres • Guide complet</p>
            <p className="mt-1 flex items-center justify-center gap-1">
              Fait à <span className="text-primary">Kara</span>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

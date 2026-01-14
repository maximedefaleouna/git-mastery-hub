import { Chapter } from "@/data/chapters";
import { CodeBlock } from "./CodeBlock";
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
  ChevronRight
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={32} />,
  Download: <Download size={32} />,
  Terminal: <Terminal size={32} />,
  GitBranch: <GitBranch size={32} />,
  GitMerge: <GitMerge size={32} />,
  Github: <Github size={32} />,
  Cloud: <Cloud size={32} />,
  GitPullRequest: <GitPullRequest size={32} />,
  Zap: <Zap size={32} />,
  Award: <Award size={32} />,
};

interface ChapterContentProps {
  chapter: Chapter;
  onNextChapter?: () => void;
  onPrevChapter?: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function ChapterContent({ 
  chapter, 
  onNextChapter, 
  onPrevChapter,
  hasNext,
  hasPrev 
}: ChapterContentProps) {
  // Parse markdown-like content
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType === 'ol' ? 'ol' : 'ul';
        elements.push(
          <ListTag key={elements.length} className={cn(
            "my-4 space-y-2",
            listType === 'ol' ? "list-decimal" : "list-disc",
            "list-inside"
          )}>
            {currentList.map((item, i) => (
              <li key={i} className="text-foreground/90" dangerouslySetInnerHTML={{ 
                __html: item
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                  .replace(/`(.*?)`/g, '<code class="code-inline">$1</code>')
              }} />
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, i) => {
      // Headers
      if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full" />
            {line.slice(4)}
          </h3>
        );
      }
      // Unordered list
      else if (line.startsWith('- ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(line.slice(2));
      }
      // Ordered list
      else if (/^\d+\.\s/.test(line)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(line.replace(/^\d+\.\s/, ''));
      }
      // Code blocks
      else if (line.startsWith('```')) {
        flushList();
        // Skip code blocks in content (handled separately)
      }
      // Regular paragraphs
      else if (line.trim()) {
        flushList();
        elements.push(
          <p 
            key={i} 
            className="text-foreground/80 leading-relaxed my-4"
            dangerouslySetInnerHTML={{ 
              __html: line
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                .replace(/`(.*?)`/g, '<code class="code-inline">$1</code>')
            }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="animate-fade-in">
      {/* Chapter Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <span className="text-sm">Chapitre {chapter.number}</span>
          <ChevronRight size={14} />
          <span className="text-sm text-primary">{chapter.title}</span>
        </div>
        
        <div className="flex items-start gap-6">
          <div className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0",
            "bg-gradient-to-br from-primary/20 to-accent/20 text-primary",
            "glow-green"
          )}>
            {iconMap[chapter.icon]}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-3">
              {chapter.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {chapter.description}
            </p>
          </div>
        </div>
      </header>

      {/* Sections */}
      <div className="space-y-12">
        {chapter.sections.map((section, index) => (
          <section 
            key={section.id} 
            id={section.id}
            className="chapter-card animate-slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                {index + 1}
              </span>
              {section.title}
            </h2>
            
            <div className="prose-custom">
              {renderContent(section.content)}
            </div>

            {section.code && section.code.map((codeExample, codeIndex) => (
              <CodeBlock
                key={codeIndex}
                code={codeExample.code}
                language={codeExample.language}
                description={codeExample.description}
              />
            ))}
          </section>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
        {hasPrev ? (
          <button
            onClick={onPrevChapter}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <ChevronRight size={18} className="rotate-180" />
            <span>Chapitre précédent</span>
          </button>
        ) : <div />}
        
        {hasNext ? (
          <button
            onClick={onNextChapter}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors glow-green"
          >
            <span>Chapitre suivant</span>
            <ChevronRight size={18} />
          </button>
        ) : (
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <Award size={18} />
            <span>Tutoriel terminé ! 🎉</span>
          </div>
        )}
      </div>
    </div>
  );
}

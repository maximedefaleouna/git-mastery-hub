import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  description?: string;
}

export function CodeBlock({ code, language = "bash", description }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting for common patterns
  const highlightCode = (code: string) => {
    return code
      .split('\n')
      .map((line, i) => {
        // Comments
        if (line.trim().startsWith('#')) {
          return <span key={i} className="text-muted-foreground">{line}</span>;
        }
        
        // Keywords
        let highlighted = line
          .replace(/(git|npm|brew|sudo|ssh|eval|cat|mkdir|cd|xcode-select)/g, '<span class="text-primary">$1</span>')
          .replace(/(-[a-zA-Z]+)/g, '<span class="text-github-orange">$1</span>')
          .replace(/(origin|main|HEAD|master)/g, '<span class="text-accent">$1</span>')
          .replace(/(".*?")/g, '<span class="text-green-400">$1</span>');
        
        return <span key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />;
      })
      .reduce((acc: React.ReactNode[], line, i, arr) => {
        acc.push(line);
        if (i < arr.length - 1) acc.push('\n');
        return acc;
      }, []);
  };

  return (
    <div className="group relative my-4">
      {description && (
        <p className="text-sm text-muted-foreground mb-2 italic">{description}</p>
      )}
      <div className="code-block relative">
        <div className="absolute top-2 right-2 flex items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase">{language}</span>
          <button
            onClick={handleCopy}
            className={cn(
              "p-1.5 rounded-md transition-all",
              "bg-secondary/50 hover:bg-secondary",
              copied && "bg-primary/20 text-primary"
            )}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="text-sm leading-relaxed overflow-x-auto">
          <code>{highlightCode(code)}</code>
        </pre>
      </div>
    </div>
  );
}

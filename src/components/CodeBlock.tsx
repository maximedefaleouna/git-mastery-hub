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
      
      {/* Terminal Window */}
      <div className="rounded-lg overflow-hidden border border-border bg-[hsl(220,20%,8%)] shadow-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[hsl(220,18%,12%)] border-b border-border">
          {/* Window Controls */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          
          {/* Title */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-mono uppercase">{language}</span>
          </div>
          
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-all",
              "hover:bg-secondary/50",
              copied ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {copied ? (
              <>
                <Check size={12} />
                <span>Copié!</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copier</span>
              </>
            )}
          </button>
        </div>
        
        {/* Terminal Content */}
        <div className="p-4 overflow-x-auto scrollbar-thin">
          <pre className="text-sm leading-relaxed font-mono">
            <code>{highlightCode(code)}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

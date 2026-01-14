import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  description?: string;
}

interface Token {
  type: 'keyword' | 'flag' | 'string' | 'branch' | 'comment' | 'text';
  value: string;
}

export function CodeBlock({ code, language = "bash", description }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tokenizeLine = (line: string): Token[] => {
    // If it's a comment, return the whole line as comment
    if (line.trim().startsWith('#')) {
      return [{ type: 'comment', value: line }];
    }

    const tokens: Token[] = [];
    const keywords = ['git', 'npm', 'brew', 'sudo', 'ssh', 'eval', 'cat', 'mkdir', 'cd', 'xcode-select', 'ssh-keygen', 'ssh-add'];
    const branches = ['origin', 'main', 'HEAD', 'master', 'develop'];
    
    // Split by spaces but keep strings together
    const parts = line.match(/("[^"]*")|('[^']*')|(\S+)/g) || [];
    
    parts.forEach((part, index) => {
      if (index > 0) {
        tokens.push({ type: 'text', value: ' ' });
      }
      
      // Check if it's a string
      if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'"))) {
        tokens.push({ type: 'string', value: part });
      }
      // Check if it's a flag
      else if (part.startsWith('-') || part.startsWith('--')) {
        tokens.push({ type: 'flag', value: part });
      }
      // Check if it's a keyword
      else if (keywords.includes(part)) {
        tokens.push({ type: 'keyword', value: part });
      }
      // Check if it's a branch name
      else if (branches.includes(part)) {
        tokens.push({ type: 'branch', value: part });
      }
      // Regular text
      else {
        tokens.push({ type: 'text', value: part });
      }
    });

    return tokens;
  };

  const getTokenClass = (type: Token['type']): string => {
    switch (type) {
      case 'keyword': return 'text-primary font-semibold';
      case 'flag': return 'text-github-orange';
      case 'string': return 'text-green-400';
      case 'branch': return 'text-accent';
      case 'comment': return 'text-muted-foreground italic';
      default: return 'text-foreground/90';
    }
  };

  const renderLine = (line: string, lineIndex: number) => {
    const tokens = tokenizeLine(line);
    return (
      <span key={lineIndex}>
        {tokens.map((token, i) => (
          <span key={i} className={getTokenClass(token.type)}>
            {token.value}
          </span>
        ))}
      </span>
    );
  };

  const lines = code.split('\n');

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
            <code>
              {lines.map((line, i) => (
                <span key={i}>
                  {renderLine(line, i)}
                  {i < lines.length - 1 && '\n'}
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

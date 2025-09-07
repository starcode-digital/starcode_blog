'use client';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";

export default function TextTools({ editor }: { editor: any }) {
  if (!editor) return null;

  // Função de toggle mais segura
  const toggleHeading = (level: number) => {
    editor.chain().focus().toggleHeading({ level }).run();
  };

  return (
    <div className="flex gap-2">
      <ToggleGroup variant="outline" type="single">
        {[1, 2, 3].map((level) => (
          <ToggleGroupItem
            key={level}
            value={`h${level}`}
            className={`text-sm font-bold px-2 py-1 rounded`}
            onClick={() => toggleHeading(level)}
          >
            H{level}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}

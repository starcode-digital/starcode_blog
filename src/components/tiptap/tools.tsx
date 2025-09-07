import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Strikethrough, Code, List, ListOrdered, Quote} from "lucide-react"

export default function Tools({ editor }: { editor: any }) {

  if (!editor) return null
  
  return(
    <div>
      <ToggleGroup variant="outline" type="multiple">
        <ToggleGroupItem value="bold" onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold size={16}/>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic size={16}/>
        </ToggleGroupItem>
        <ToggleGroupItem value="strike" onClick={() => editor.chain().focus().toggleStrike().run()}>
          <Strikethrough size={16}/>
        </ToggleGroupItem>
        <ToggleGroupItem value="code" onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          <Code size={16}/>
        </ToggleGroupItem>
        <ToggleGroupItem value="bullet" onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <List size={16}/>
        </ToggleGroupItem>
        <ToggleGroupItem value="ordered" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered size={16}/>
        </ToggleGroupItem>
        <ToggleGroupItem value="quote" onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <Quote size={16}/>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
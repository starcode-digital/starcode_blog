"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Upload } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { useCallback, useState } from "react"

export default function UploadButton({ editor }: { editor?: any }) {
  const [open, setOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  const addImage = useCallback(() => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run()
      setImageUrl("") // limpa o input
      setOpen(false) // fecha o Dialog
    }
  }, [editor, imageUrl])

  if (!editor) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="h-8" onClick={() => setOpen(true)}>
          Importar imagem <Upload />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload de Imagem</DialogTitle>
          <DialogDescription>
            Insira a URL da imagem que deseja adicionar ao artigo.
          </DialogDescription>

          <Input
            placeholder="https://exemplo.com/imagem.jpg"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <Button className="mt-4" onClick={addImage}>
            Adicionar Imagem
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

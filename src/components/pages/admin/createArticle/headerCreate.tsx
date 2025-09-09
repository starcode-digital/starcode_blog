import { Button } from "@/components/ui/button"
import { ArrowLeft, SquarePen, Save } from "lucide-react"

import Link from "next/link"

export function HeaderCreate({ editor, handleSave }: { editor: any, handleSave: any }) {
  return (
    <header className="border-b border-border bg-black/70 dark:bg-zinc-900/10 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 px-2 sm:px-10 py-2 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Link href="/admin/users" className="flex gap-2 items-center text-zinc-400 py-3 hover:text-white">
          <ArrowLeft size={18}/>
          Painel Admin
        </Link>
        <span className="text-bold text-zinc-400">/</span>
        <span className="text-white font-bold">Criar Artigo</span>
      </div>
      <div className="hidden sm:flex sm:gap-2">
        <Button variant={'outline'}>
          <Save/>
          Salvar rascunho
        </Button>
        <Button onClick={() => handleSave(editor)}>
          <SquarePen />
          Publicar
        </Button>
      </div>
      <div className="sm:hidden">

      </div>
    </header>
  )
}
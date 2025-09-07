'use client'

import { EditorContent } from '@tiptap/react'
import { Trash2, SquarePen } from "lucide-react"
import { Button } from '@/components/ui/button'

import Tools from './tools'
import UploadButton from './uploadButton'
import TextTools from './textTools'

export default function Tiptap({ editor, handleSave }: { editor: any, handleSave: any }) {

  return (
    <div>
      <div className="toolbar mb-2 flex flex-col-reverse gap-2 sm:flex-row items-center justify-between md:items-start">
        <div className='flex flex-col justify-center items-center gap-2 mb-2 sm:flex-row '>
          <Tools editor={editor}></Tools>
          <TextTools editor={editor}></TextTools>
        </div>
        <UploadButton editor={editor}></UploadButton>
      </div>
      <EditorContent 
        editor={editor} 
        className="outline-none focus:outline-none p-4 border rounded h-96 text-white overflow-y-auto break-words" 
      />
      <div className='flex gap-2'>
        <span className='text-sm text-zinc-500'>Dica: Use markdown para formatação (# para títulos, **negrito**, *itálico*, etc.)</span>
      </div>
    </div>
  )
}

import { Input } from "@/components/ui/input";
import { Label } from '@radix-ui/react-menubar';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

import Tiptap from "@/src/components/tiptap/tiptap";

import { PenLine, FileText, Tag, User, Folder, Plus, FileImage, FileTextIcon, Save, SquarePen } from 'lucide-react';
import React from "react";

// block flex-col border rounded-sm p-4 bg-zinc-950 w-3/4 z-1
export default function FormArticle({
  editor, 
  handleSave,
  setTitle,
  setDescription,
  setAuthor,
  setCategory,
  setImageUrl
} : {
  editor: any, 
  handleSave: () => void,
  setTitle: (value: string) => void,
  setDescription: (value: string) => void,
  setAuthor: (value: string) => void,
  setCategory: (value: string) => void,
  setImageUrl: (value: string) => void,
}) {

  return(
    <div className="block flex-col border rounded-sm p-4 bg-zinc-950 md:w-3/4 z-1">
      <p className='flex items-center gap-2 text-base mb-4 font-bold text-foreground'>
        <PenLine size={20}/>
        Editor de Artigo
      </p>

      <div>
        <p className='flex text-zinc-500 gap-2 text-sm mb-2 font-bold mt-10'>
          <FileText size={18}/>
          INFORMAÇÕES BÁSICAS
        </p>
        <div>
          <Label>Título do Artigo</Label>
          <Input
            type="text"
            placeholder="Título do Artigo"
            className="mb-4 bg-zinc-900 text-white border border-border focus:border-primary focus:ring-0"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Label>Descrição</Label>
          <Textarea
            placeholder="Descrição do artigo"
            className="mb-4 bg-zinc-900 text-white border border-border focus:border-primary focus:ring-0"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Separator/>
        <div>
          <p className='flex text-zinc-500 gap-2 text-sm mb-5 font-bold mt-7'>
            <Tag size={18}/>
            CLASSIFICAÇÃO
          </p>
          <div className='flex justify-between'>
            <div className='w-full mx4'>
              <Label className='flex gap-3 mb-1'>
                <User size={20}/>
                Autor
              </Label>
              <Input placeholder='Seu nome...' required onChange={(e) => setAuthor(e.target.value)}></Input>
            </div>
            <div className='w-full mx-4'>
              <Label className='flex gap-3 mb-1'>
                <Folder size={20}/>
                Categoria
              </Label>
              <Select                       
                onValueChange={(value) => {
                    console.log('Categoria selecionada:', value);
                  }}
                required
                >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ia">Inteligencia Artificial</SelectItem>
                  <SelectItem value="web">Desenvolvimento Web</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="devops">DevOps</SelectItem>
                  <SelectItem value="cyber">CyberSecurity</SelectItem>
                  <SelectItem value="linux">Linux/OS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <Label className='flex gap-3'>
              <Tag size={20}/>
              Tags
            </Label>
            <div className='flex gap-2 items-center '>
              <Input
                placeholder="Digite uma tag..."
                />
              <Button type="button" variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Separator className='my-5'/>
          <div className='mb-4'>
            <p className='flex text-zinc-500 gap-2 text-sm mb-5 font-bold mt-7'>
              <FileImage size={18}/>
              IMAGEM DE CAPA
            </p>
            <Label className='mb-2'>URL da Imagem</Label>
            <Input placeholder='https://exemplo.com/imagem.jpg' className='mb-4 bg-zinc-900 text-white border border-border focus:border-primary focus:ring-0' required onChange={(e) => setImageUrl(e.target.value)}/>
          </div>
        </div>
        <Separator className='my-5'/>
        <div className="h-auto overflow-visible">
          <p className='flex text-zinc-500 gap-2 text-sm mb-5 font-bold mt-3'>
            <FileTextIcon size={18}/>
            CONTEÚDO
          </p>
          <Tiptap handleSave={handleSave} editor={editor} />
          <div className="flex justify-end gap-2 mt-4 mb-2 sm:hidden">
            <Button variant={'outline'}>
              <Save/>
              Salvar rascunho
            </Button>
            <Button type="button" onClick={() => handleSave()}>
              <SquarePen />
              Publicar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

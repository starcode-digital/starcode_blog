import { Eye, User, Calendar, Tags } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Arch from '../../../icons/arch';

export default function RendersHTML({ 
  html,
  title,
  description,
  author,
  category,
  imageUrl
} : { 
  html: string,
  title: string,
  description: string,
  author: string,
  category: string,
  imageUrl: string,
}) {
  return (
    <div className="block flex-col border rounded-sm p-4 bg-zinc-950 md:w-3/4 sticky top-24 overflow-auto max-h-[100vh] z-1">
      <p className='flex items-center gap-2 text-base mb-4 font-bold text-foreground'>
        <Eye size={20}/>
        Preview do Artigo
      </p>
      <div className="">
          <div className="inline-flex px-2 py-1 rounded-full bg-black/30 border border-border text-foreground text-sm mb-3 mt-3 gap-2">
            <Arch size={18}/>
            Linux
          </div>
        {imageUrl && <img src={imageUrl} alt="Capa do artigo"/> || <div className='w-full h-48 flex items-center justify-center text-zinc-700 border-dashed border-3'>Imagem de capa aparecerá aqui</div>}
        <h1>{title || "Título do artigo"}</h1>
        <p className='text-zinc-400'>{description || "Descrição aparecerá aqui"}</p>
        <div className='flex gap-5 mt-2 mb-1'>
          <p className='flex gap-2 text-zinc-500 text-sm'>
            <User size={16}/> {author || "Nome do Autor"}
          </p>
          <p className='flex gap-2 text-zinc-500 text-sm'>
            <Calendar size={16}/> 06/09/2025
          </p>
        </div>
        <Separator className='my-4'/>

        <div 
          className="" 
          dangerouslySetInnerHTML={{__html: html}} 
        />
      </div>
    </div>
  )
}
"use client";
import Arch from "@/src/components/icons/arch";
import { Separator } from "@/components/ui/separator";
import { Calendar, User } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { Header } from "@/src/components/body/header";
import Footer from "@/src/components/body/footer";

export default function PreviewArticle(){
  const [data, setData] = React.useState<{
    html: string,
    title: string,
    description: string,
    author: string,
    category: string,
    imageUrl: string,
  } | null>(null);

  useEffect(() => {
    const previewData = localStorage.getItem('articlePreview');
    if (previewData) {
      setData(JSON.parse(previewData));
    }
  }, []);

  if (!data) return <div>Carregando prévia...</div>;

  return(
    <div className="bg-black grid-pattern">
      <Header></Header>
      <div className="flex flex-col px-4 py-6 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
        <div className="inline-flex px-2 py-1 w-20 rounded-full bg-black/30 border border-border text-foreground text-sm mb-3 mt-3 gap-2">
          <Arch size={18}/>
          Linux
        </div>
        {data.imageUrl && <img src={data.imageUrl} alt="Capa do artigo"/>}
        <h1>{data.title || "Título do artigo"}</h1>
        <p className='text-zinc-400'>{data.description || "Descrição aparecerá aqui"}</p>
        <div className='flex gap-5 mt-2 mb-1'>
          <p className='flex gap-2 text-zinc-500 text-sm'>
            <User size={16}/> {data.author}
          </p>
          <p className='flex gap-2 text-zinc-500 text-sm'>
            <Calendar size={16}/> 06/09/2025
          </p>
        </div>
        <Separator className='my-7'/>

        <div 
          className="flex flex-col gap-4 prose prose-invert max-w-none" 
          dangerouslySetInnerHTML={{__html: data.html}} 
        />
      </div>
      <Footer></Footer>
    </div>
  )
}
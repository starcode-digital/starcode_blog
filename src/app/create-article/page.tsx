'use client';
import StarterKit from '@tiptap/starter-kit';
import CodeBlock from '@tiptap/extension-code-block';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Heading from '@tiptap/extension-heading';
import { useEditor } from '@tiptap/react';
import Image from '@tiptap/extension-image';
import HardBreak from '@tiptap/extension-hard-break'
import Paragraph from '@tiptap/extension-paragraph';
import Link from '@tiptap/extension-link';
import { Editor } from '@tiptap/react';

import { useState } from "react";
import { useEffect } from "react";

import RendersHTML from "@/src/components/pages/createArticle/rendersHTML";
import FormArticle from '@/src/components/pages/createArticle/formArticle';
import { HeaderCreate } from '@/src/components/pages/createArticle/headerCreate';
import React from 'react';

export default function CreateArticle() {
  const [html, setHtml] = useState("");
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('https://i.pinimg.com/736x/cf/7f/ae/cf7fae2198ea24e6bfc14abc56016de1.jpg');


  const handleSave = (editorInstance?: Editor) => {
    if (editorInstance) {
      setHtml(editorInstance.getHTML());
      console.log(editorInstance.getHTML());
    }
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlock,
      ListItem,
      BulletList,
      OrderedList,
      Image,
      Heading.configure({ levels: [1, 2, 3] }),
      HardBreak.configure({
        HTMLAttributes: {
          class: 'my-custom-class',
        },
      }),
      Paragraph,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
        protocols: ['http', 'https'],
        isAllowedUri: (url, ctx) => {
          try {
            const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`)

            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false
            }

            const disallowedProtocols = ['ftp', 'file', 'mailto']
            const protocol = parsedUrl.protocol.replace(':', '')

            if (disallowedProtocols.includes(protocol)) {
              return false
            }

            const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme))

            if (!allowedProtocols.includes(protocol)) {
              return false
            }

            const disallowedDomains = ['example-phishing.com', 'malicious-site.net']
            const domain = parsedUrl.hostname

            if (disallowedDomains.includes(domain)) {
              return false
            }

            return true
          } catch {
            return false
          }
        },
        shouldAutoLink: url => {
          try {
            const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`)

            const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com']
            const domain = parsedUrl.hostname

            return !disallowedDomains.includes(domain)
          } catch {
            return false
          }
        },
      }),
    ],
    content: `
      <img src="https://i.ytimg.com/vi/YPrhIfm3VJs/maxresdefault.jpg" alt="" />
      <h1>Arch Linux: O Sistema Operacional dos Hackers da Matrix</h1><p>Quando falamos de Linux, muitos lembram de distribuições “user-friendly” como Ubuntu, Fedora ou Mint. Mas existe uma distro que carrega a fama de ser ao mesmo tempo minimalista, poderosa e intimidadora: o <strong>Arch Linux</strong>.</p><p>Se o Linux fosse um RPG, o Arch seria o modo “Hardcore” — sem tutoriais, sem facilidades, apenas você, a documentação e a linha de comando.</p><h2>Filosofia do Arch</h2><p>O Arch é construído sobre um princípio simples: <strong>KISS (Keep It Simple, Stupid)</strong>. Isso não significa que ele é fácil, mas sim que é <strong>direto, limpo e sem camadas desnecessárias</strong>.<br>Você instala apenas o essencial e, a partir daí, molda o sistema de acordo com suas necessidades. Nada de pacotes extras que você nunca vai usar.</p><h2>O Pacman e o AUR</h2><p>O gerenciador de pacotes do Arch, o <strong>Pacman</strong>, é rápido e eficiente. Mas o verdadeiro diferencial é o <strong>AUR (Arch User Repository)</strong>, um repositório mantido pela comunidade onde praticamente qualquer software imaginável pode ser encontrado. Quer instalar algo obscuro que não existe em outras distros? Provavelmente está no AUR.</p><h2>Rolling Release</h2><p>Outra característica marcante do Arch é ser uma distro <strong>rolling release</strong>. Isso significa que você sempre terá as versões mais recentes dos pacotes, sem precisar formatar ou migrar de versão. Seu sistema está em constante evolução, como se fosse um organismo vivo.</p><h2>Para quem é o Arch?</h2><p>O Arch não é feito para quem quer “apenas usar” o computador. Ele é ideal para quem gosta de <strong>entender como as coisas funcionam por baixo da superfície</strong>, configurar cada detalhe e ter controle total. É um playground para desenvolvedores, sysadmins, entusiastas de segurança e curiosos da Matrix.</p><h2>Conclusão</h2><p>O Arch Linux é mais do que um sistema operacional. Ele é um convite ao aprendizado, um portal para um nível mais profundo de controle e liberdade digital. Sim, a instalação pode parecer um <strong>boss fight</strong> no começo, mas a recompensa é um sistema limpo, rápido e feito sob medida para você.</p><p>Como dizem os iniciados:<br><strong>“I use Arch, btw.”</strong></p><p></p><p></p>
      `,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'outline-none focus:outline-none p-4 min-h-[300px]',
        spellcheck: 'false',
      },
    },
    onUpdate({ editor }) {
      handleSave(editor);
    },
  });

  useEffect(() => {
    if (editor) {
      setHtml(editor.getHTML());
    }
  }, [editor]);

  return (
    <form className="bg-black grid-pattern">
      <HeaderCreate editor={editor} handleSave={handleSave}></HeaderCreate>
      <section className="flex flex-col lg:flex-row lg:items-start lg:p-15  justify-center items-center md:py-5 gap-5">
        <FormArticle
          setTitle={setTitle}
          setDescription={setDescription}
          setAuthor={setAuthor}
          setCategory={setCategory}
          setImageUrl={setImageUrl}
          editor={editor} handleSave={handleSave}>
        </FormArticle>
        <RendersHTML 
          html={html}
          title={title} 
          description={description} 
          author={author}
          category={category}
          imageUrl={imageUrl}>
        </RendersHTML>
      </section>
    </form>
  );
}
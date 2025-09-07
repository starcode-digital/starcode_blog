import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Discord } from "../icons/discord"

import { Menu, Newspaper, BookOpenText, Zap, Info } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="border-b border-border bg-black/70 dark:bg-zinc-900/10 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 px-4 py-3 flex justify-between">
      <div className="flex gap-6 items-center">
        <Link className="flex gap-2" href="/">
          <img src="/logo.svg" width={38} height={38} alt="Logo StarCode Digital"/>
          <span className="text-xl font-bold text-white">StarCode</span>
        </Link>
        <div className="hidden lg:flex gap-4">
          <a href="/" className="text-zinc-400 font-medium hover:bg-transparent hover:text-zinc-100">
            Artigos
          </a>
          <a className="text-zinc-400 font-medium hover:bg-transparent hover:text-zinc-100">
            Tutoriais
          </a>
          <a className="text-zinc-400 font-medium hover:bg-transparent hover:text-zinc-100">
            Reviews
          </a>
          <a className="text-zinc-400 font-medium hover:bg-transparent hover:text-zinc-100">
            Sobre
          </a>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="hidden md:flex gap-4 items-center">
          <div className="flex items-center">
            <Input placeholder="Pesquisar" className="w-[300px] md:w-[200px] lg:w-[300px]" />
            <Button variant={"ghost"} className="-ml-10">
              <Search/>
            </Button>
          </div>
          <a href="https://discord.gg/N4BXGnrhGr" target="_blank" rel="noopener noreferrer">
            <Button variant={"default"} >
              <Discord size={100}/>
              Discord
            </Button>
          </a>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="p-2 rounded-md hover:bg-zinc-800/50">
              <Menu/>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  Menu
                </SheetTitle>
                <SheetDescription>
                  Selecione uma opção abaixo
                </SheetDescription>
              </SheetHeader>
                <div className="flex flex-col p-3">
                  <a href="">
                    <Button variant={"outline"} className="w-full mt-4 gap-2 text-white">
                      <Newspaper/>
                      Artigos
                    </Button>
                  </a>
                  <a href="">
                    <Button variant={"outline"} className="w-full mt-4 gap-2 text-white">
                      <BookOpenText/>
                      Tutoriais
                    </Button>
                  </a>
                  <a href="">
                    <Button variant={"outline"} className="w-full mt-4 gap-2 text-white">
                      <Zap/>
                      Reviews
                    </Button>
                  </a>
                  <a href="">
                    <Button variant={"outline"} className="w-full mt-4 gap-2 text-white">
                      <Info/>
                      Sobre
                    </Button>
                  </a>
                </div>
                <SheetFooter className="mt-4 w-full">
                  <a href="https://discord.gg/N4BXGnrhGr" target="_blank" className="w-full">
                    <Button variant={"default"} className="w-full gap-2">
                      <Discord size={100}/>
                      Junte-se ao Discord
                    </Button>
                  </a>
                </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
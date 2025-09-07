import { Zap, ArrowRight, CodeXml, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Discord } from "../../icons/discord";

export function MainSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto gap-4 p-10">
          <div className="inline-flex items-center px-3 py-2 rounded-full bg-black/30 border border-border text-foreground text-xs sm:text-sm mb-6">
            <Zap className="w-4 h-4 mr-2"/>
            Comunidade que compartilha conhecimento
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-foreground">Tecnologia que transforma aprendizado em evolução.</h1>
          <p className="text-xl mb-6 text-zinc-500 max-w-2xl mx-auto text-pretty">No Blog da StarCode Digital, hackeamos as regras: programação sem filtros, Linux como arma e tutoriais que mostram os bastidores do código que move o futuro.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-8" variant={"default"}>
              Explorar Artigos
              <ArrowRight/>
            </Button>
            <a href="https://discord.gg/N4BXGnrhGr" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 text-white w-full" variant={"outline"}>
                Junte-se ao Discord
                <Discord/>
              </Button>
            </a>
          </div>
          <div className="sm:mt-12 sm:mx-20 sm:flex-nowrap flex justify-center items-center flex-wrap gap-6 mt-5">
            <div className="flex gap-2 items-center text-zinc-400">
              <CodeXml className="text-zinc-200"/>
              <p>Artigos técnicos</p>
            </div>
            <div className="flex gap-2 items-center text-zinc-400">
              <Zap className="text-zinc-200"/>
              <p>Últimas tendências</p>
            </div>
            <div className="flex gap-2 items-center text-zinc-400">
              <Users className="text-zinc-200"/>
              <p>Comunidade ativa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
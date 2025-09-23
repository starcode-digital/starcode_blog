import { Input } from "@/components/ui/input"
import Footer from "@/src/components/body/footer"
import { Header } from "@/src/components/body/header"
import { Search} from "lucide-react"

export default function ArticlesPage() {
  return(
    <div className="min-h-screen bg-black grid-pattern">
      <Header></Header>
      <main className="h-screen flex flex-col items-center gap-5">
        <div className="flex flex-col items-center my-5 gap-2">
          <h1 className="text-5xl">Artigos de Tecnologia</h1>
          <p className="text-[1.2rem]">Explore os últimos insights, tutoriais e tendências do mundo da tecnologia e desenvolvimento.</p>
        </div>
        <div className="flex justify-around w-full bg-black p-5 border-y border-border">
          <div className="relative">
            <Search className="absolute top-1 left-1 text-zinc-400"/>
            <Input>
            </Input>
          </div>
          <div className="relative">
            <Search className="absolute top-1 left-1 text-zinc-400"/>
            <Input>
            </Input>
          </div>
          <div className="relative">
            <Search className="absolute top-1 left-1 text-zinc-400"/>
            <Input>
            </Input>
          </div>
        </div>
        <section>

        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}
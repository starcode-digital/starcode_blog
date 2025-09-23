import { Funnel, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";

export default function FilterUsers() {
  return (
    <div className="flex flex-col border rounded-sm p-5 bg-zinc-950 -z-0 gap-5">
      <div className="flex items-center gap-2 text-base mb-4 font-bold text-foreground">
        <Funnel/>
        <p>Filtros e Busca</p>
      </div>
      <div className="flex gap-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16}/>
          <Input className="pl-9" placeholder="Busca por nome ou e-mail..."></Input>
        </div>
        <Select defaultValue="default">
          <SelectTrigger className="w-[180px]">
            <SelectValue/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Todas as funções</SelectItem>
            <SelectItem value="admin">Administrado</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="viewer">Visualizador</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="default">
          <SelectTrigger className="w-[180px]">
            <SelectValue/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Todas os status</SelectItem>
            <SelectItem value="active">Ativo</SelectItem>
            <SelectItem value="inactive">Inativo</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
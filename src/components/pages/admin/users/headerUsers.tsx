import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function UsersPageHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="mb-8">
        <h1>Gerenciador de Usuários</h1>
        <p className="text-zinc-500">Crie e gerencie usuários do sistema</p>
      </div>
      <Dialog>
        <DialogTrigger>
          <Button>
            <UserPlus className="mr-2"/>
            Adicionar Usuário
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-black/50">
          <DialogHeader>
            <DialogTitle className="m-0">Crie um novo usuário</DialogTitle>
            <DialogDescription>
              Preencha os dados para criar um novo usuário no sistema
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-1 py-2">
            <div>
              <Label className="my-1 block">Nome Completo</Label>
              <Input type="text" placeholder="Digite o nome completo" required></Input>
            </div>
            <div>
              <Label className="my-1 mt-1 block">E-mail</Label>
              <Input type="email" placeholder="Digite o e-mail" required></Input>
            </div>
            <div>
              <Label className="my-1 mt-1 block">Senha</Label>
              <Input type="password" placeholder="Digite senha" required></Input>
            </div>
            <div>
              <Label className="my-1 mt-1 block">Função</Label>
              <Select required defaultValue="admin">
                <SelectTrigger className="w-[180px]">
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Visualizador</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-4 justify-end mt-4">
              <Button variant="outline">Cancelar</Button>
              <Button type="submit">Criar Usuário</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
import { IUsers } from "@/src/Interfaces/users.interface";
import { Users, Shield, PenSquare, Eye, Ellipsis } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export default function usersList(){

  const users:IUsers[] = [
    {
      id: 1,
      name: "Arthur Sousa",
      email: "arthur@email.com",
      role: "Administrador",
      status: "Ativo",
      date: new Date("2023-01-01"),
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@email.com",
      role: "Editor",
      status: "Ativo",
      date: new Date("2023-02-15"),
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@email.com",
      role: "Visualizador",
      status: "Inativo",
      date: new Date("2023-03-10"),
    },
  ]

  return(
    <div className="flex flex-col border rounded-sm p-5 bg-zinc-950 z-1 gap-5">
      <div>
        <div className="flex items-center gap-2 text-base mb-4 font-bold text-foreground">
          <Users/>
          <p>Lista de Usuários</p>
        </div>
          <p className="text-sm text-zinc-500">{users.length} Usuário(s) encontrado(s)</p>
      </div>
      <Table>
        <TableCaption>Lista de usuários do sistema</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"><Checkbox></Checkbox></TableHead>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Função</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data de Criação</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="w-[100px]"><Checkbox></Checkbox></TableCell>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={user.role === "Administrador" ? "default" : user.role === "Editor" ? "secondary" : "outline"}>
                {user.role === "Administrador" ? <Shield/> : user.role === "Editor" ? <PenSquare/> : <Eye/>}
                {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={user.status === "Ativo" ? "default" : "secondary"}>
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>{user.date?.toLocaleDateString()}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Ellipsis/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
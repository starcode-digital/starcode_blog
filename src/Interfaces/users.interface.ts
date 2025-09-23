export interface IUsers{
  id: number;
  name?: string;
  email?: string;
  role?: "Administrador" | "Editor" | "Visualizador";
  status?: "Ativo" | "Inativo";
  date?: Date;
}
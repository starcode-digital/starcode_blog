import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@radix-ui/react-label";

import { ArrowLeft, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2 bg-black grid-pattern">
        <a href="/" className="flex text-zinc-500 text-bs items-start gap-2 w-full max-w-md mb-4 hover:text-zinc-400">
          <ArrowLeft/>
          Voltar ao Blog
        </a>
        <Card className="p-8 bg-zinc-900/10 border border-white/10 flex justify-center items-center gap-4">
          <div className="flex flex-col items-center text-center">
            <div className="border-2 p-3 rounded-full">
              <Lock size={24}/>
            </div>
            <h1 className="text-2xl font-bold mt-4 mb-2">Entrar na sua conta</h1>
            <p className="text-sm text-zinc-500">Digite suas credenciais para acessar o painel administrativo</p>
          </div>
          <form className="flex flex-col gap-3 w-full">
            <div>
              <Label className="text-sm m-1">E-mail</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16}></Mail>
                <Input placeholder="seu@email.com" type="email" className="pl-10 pr-10 "></Input>
              </div>
            </div>
            <div>
              <Label className="text-sm m-1">Senha</Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16}></Lock>
                <Input type="password" placeholder="••••••••" className="pl-10 pr-10 "></Input>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <Checkbox id="remember" className="mr-2"/>
                <Label htmlFor="remember" className="text-sm select-none text-zinc-500">Lembrar de mim</Label>
              </div>
              <a href="#" className="text-sm text-zinc-200 underline hover:text-zinc-400 float-right">Esqueceu a senha?</a>
            </div>
            <Button type="submit" className="w-full mt-4" variant={"default"}>Entrar</Button>
          </form>
        </Card>
    </section>
  );
}

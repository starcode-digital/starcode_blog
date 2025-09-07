"use client"

import { createLucideIcon, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Discord } from "../icons/discord";
import style from "./footer.module.css"

export default function Footer() {
  const XIcon = createLucideIcon("X", [
    [
      "path",
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
        stroke: "none",
        fill: "currentColor",
      },
    ],
  ]);

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold">
              <Image src="/logo.svg" alt="logo" width={48} height={48} className="object-contain" />
              <span>StarCode</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformamos suas ideias em soluções digitais. Desenvolvimento sob medida, consultoria técnica e suporte contínuo.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                <Github />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">X</span>
                <Instagram />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">X</span>
                <Discord/>
              </Link>
            </div>
          </div>

          <div className={`space-y-4`}>
            <h4 className="text-sm font-bold">Serviços</h4>
            <ul className={`${style.footerList} space-y-2 text-sm`}>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projetos Sob Medida
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Consultoria Técnica
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Integrações & APIs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Suporte Contínuo
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold">Recursos</h4>
            <ul className={`${style.footerList} space-y-2 text-sm`}>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog Técnico
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold">Suporte</h4>
            <ul className={`${style.footerList} {style.footerList} space-y-2 text-sm`}>
              <li>
                <Link href="https://discord.com/invite/xj7RHynxYy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Comunidade no Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold">Sobre</h4>
            <ul className={`${style.footerList} space-y-2 text-sm`}>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} StarCode. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

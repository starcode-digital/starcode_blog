"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, FileText, BarChart3, Settings, Shield, Plus, Menu, X, Eye, MessageSquare, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface AdminSidebarProps {
  className?: string
}

const adminMenuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: BarChart3,
    badge: null,
  },
  {
    title: "Artigos",
    href: "/admin/artigos",
    icon: FileText,
    badge: null,
  },
  {
    title: "Usuários",
    href: "/admin/users",
    icon: Users,
    badge: null,
  },
  {
    title: "Categorias",
    href: "/admin/categorias",
    icon: Tag,
    badge: null,
  },
  {
    title: "Configurações",
    href: "/admin/configuracoes",
    icon: Settings,
    badge: null,
  },
]

const quickActions = [
  {
    title: "Novo Artigo",
    href: "/admin/create-article",
    icon: Plus,
  },
  {
    title: "Ver Site",
    href: "/",
    icon: Eye,
  },
]

export function AdminSidebar({ className }: AdminSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "flex h-screen bg-zinc-950 border-r border-sidebar-border transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className,
      )}
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="font-semibold text-sidebar-foreground">Admin Panel</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        {!isCollapsed && (
          <div className="p-4 border-b border-sidebar-border">
            <h3 className="text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider mb-3 m-0">
              Ações Rápidas
            </h3>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Link key={action.href} href={action.href}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full my-1 justify-start gap-2 text-sidebar-foreground border-sidebar-border hover:bg-sidebar-accent bg-transparent"
                  >
                    <action.icon className="h-4 w-4" />
                    {action.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}

        <nav className="flex-1 p-4">
          {!isCollapsed && (
            <h3 className="text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider mb-3">Navegação</h3>
          )}
          <div className="space-y-1">
            {adminMenuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                      isActive
                        ? "bg-white text-black"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      isCollapsed && "justify-center",
                    )}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 font-medium">{item.title}</span>
                        {item.badge && (
                          <Badge
                            variant="secondary"
                            className="bg-sidebar-accent text-sidebar-accent-foreground text-xs"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          {!isCollapsed ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-sidebar-primary-foreground">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">Admin User</p>
                <p className="text-xs text-sidebar-foreground/70 truncate">admin@blog.com</p>
              </div>
              <Button variant="ghost" size="sm" className="text-sidebar-foreground hover:bg-sidebar-accent">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-sidebar-primary-foreground">A</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar

"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Award,
  Bell,
  BookOpen,
  Bookmark,
  Brush,
  Camera,
  ChevronDown,
  Cloud,
  Code,
  Crown,
  Download,
  FileText,
  Grid,
  Heart,
  Home,
  ImageIcon,
  Layers,
  LayoutGrid,
  Lightbulb,
  Menu,
  MessageSquare,
  Palette,
  PanelLeft,
  Play,
  Plus,
  Search,
  Settings,
  Share2,
  Sparkles,
  Star,
  Trash,
  TrendingUp,
  Users,
  Video,
  Wand2,
  Clock,
  Eye,
  Archive,
  ArrowUpDown,
  MoreHorizontal,
  Type,
  CuboidIcon,
  X,
  CardSimIcon,
  CreditCardIcon,
  User,
  LogOut,
  ClipboardPlusIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
// import { CardMinusIcon, CardPlusIcon, GetMenuIcon } from "@/utils/icons"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { destroyTokens } from "@/lib/auth"
import { useConfirm } from "@/context/confirm-modal-context"

const menu = [
  {
    name:"захиалга",
    link: "admin/order"
  },
  {
    name:"бүтээгдэхүүн",
    link: "admin/products"
  },
]

export default function MainLayout({children}) {
 
  const [notifications, setNotifications] = useState(5)
  const [activeTab, setActiveTab] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState({})
  const pathname = usePathname();
  const confirm = useConfirm()
  const [userInfo, setUserInfo] = useState(null)

  const toggleExpanded = (title) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

 const checkMenuIsActive = (link) => {
  if (!link) return false;
  const normalize = (url) => String(url).replace(/\/+$/, '');
  const current = normalize(pathname);
  const target = normalize(link);
  return current === target || current.startsWith(`${target}/`);
};

const onLogout = () => {
  confirm({
        title: "Анхааруулга",
        message: "Та гарахдаа итгэлтэй байна уу?",
        confirmText: "Тийм",
        cancelText: "Үгүй",
        onConfirm: () => {
          destroyTokens()
        }
      })
}


  return (
    <div className="relative min-h-screen overflow-hidden bg-background shadow-[0_0_24px_0_#0E0E0E1F]">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 30% 70%, rgba(233, 30, 99, 0.5) 0%, rgba(81, 45, 168, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 70% 30%, rgba(76, 175, 80, 0.5) 0%, rgba(32, 119, 188, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
          ],
        }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar - Mobile */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-background transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col border-r">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-linear-to-br from-purple-600 to-blue-600 text-white">
                <Image className="rounded-xl" src={'/homepage/logo.png'} width={380} height={380} alt="booked logo" />
              </div>
              <div>
                <h2 className="font-semibold">Vistaline</h2>
                <p className="text-xs text-muted-foreground">Онлайн дэлгүүр</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {menu?.map((item, i) => (
                <div key={i} className="mb-1 ">
                  <Link
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                      item.isActive ? "aspect-square bg-linear-to-br from-purple-600 to-blue-600 bg-primary/10 text-primary" : "hover:bg-muted",
                    )}
                    // onClick={() => item.items && toggleExpanded(item.title)}
                    href={item?.link ?? '/'}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                    {item.items && (
                      <ChevronDown
                        className={cn(
                          "ml-2 h-4 w-4 transition-transform",
                          expandedItems[item.title] ? "rotate-180" : "",
                        )}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="space-y-1">
              <Link href={'/billing'}>
                <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                  <ClipboardPlusIcon className="h-5 w-5" />
                  <span>Багц</span>
                </button>
              </Link>
              <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={"https://thebooked.cloud/uploads/"+userInfo?.avatar} alt="User" />
                    <AvatarFallback>{userInfo?.name
                      ? userInfo.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                      : "JD"}</AvatarFallback>
                  </Avatar>
                  <span>{userInfo?.name}</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Pro
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-12 items-center justify-center rounded-2xl bg-linear-to-br text-white">
                <Image className="rounded-xl" src={'/homepage/logo.png'} width={380} height={380} alt="booked logo" />
              </div>
              <div>
                <h2 className="font-semibold">Vistaline</h2>
                <p className="text-xs text-muted-foreground">Дэлгүүр</p>
              </div>
            </div>
          </div>


          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {menu?.map((item) => {
          const hasChildren = item.children && item.children.length > 0
          const isActive = checkMenuIsActive(item.link, item.children)
          const isExpanded = expandedItems[item.id]
          const badgeCount = item.cnt > 0 ? item.cnt : null

          return (
            <div key={item.id} className="mb-1">
              <div className={cn("rounded-2xl transition-colors", isActive && "bg-purple-50 dark:bg-purple-950/20")}>
                {hasChildren ? (
                  <button
                    type="button"
                    onClick={() => toggleExpanded(item.id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-purple-600" : "hover:bg-muted/50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {badgeCount && (
                        <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                          {badgeCount}
                        </Badge>
                      )}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded ? "rotate-180" : "")} />
                    </div>
                  </button>
                ) : (
                  <Link
                    href={item?.link ?? "#"}
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-purple-600" : "hover:bg-muted/50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.name}</span>
                    </div>
                    {badgeCount && (
                      <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                        {badgeCount}
                      </Badge>
                    )}
                  </Link>
                )}
              </div>

              {hasChildren && isExpanded && (
                <div className="mt-1 ml-6 space-y-1 border-l pl-3 border-border/50">
                  {item.children?.map((subItem) => {
                    const isChildActive = pathname === subItem.link || pathname.startsWith(subItem.link + "/")
                    const childBadgeCount = subItem.cnt > 0 ? subItem.cnt : null

                    return (
                      <Link
                        key={subItem.id}
                        href={subItem.link ?? "#"}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-3 py-2 text-sm transition-colors",
                          isChildActive ? "bg-muted text-purple-600 font-medium" : "hover:bg-muted/50",
                        )}
                      >
                        <span>{subItem.name}</span>
                        {childBadgeCount && (
                          <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                            {childBadgeCount}
                          </Badge>
                        )}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="space-y-1">
              <Link href={'/billing'}>
                <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <CreditCardIcon className="h-5 w-5" />
                <span>Багц</span>
              </button>
              </Link>
              <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={"https://thebooked.cloud/uploads/"+userInfo?.avatar} alt="User" />
                    <AvatarFallback>{userInfo?.name
                      ? userInfo.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                      : "JD"}</AvatarFallback>
                  </Avatar>
                  <span>{userInfo?.name}</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Pro
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn("min-h-screen transition-all duration-300 ease-in-out", sidebarOpen ? "md:pl-64" : "md:pl-0")}>
        <div className="">
        <main className="p-4 md:p-6 lg:p-8">{children}</main>
      </div>
      </div>
    </div>
  )
}

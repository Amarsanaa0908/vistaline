"use client"

import { FileX, Inbox, Search, Package, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmptyState({
  icon = "inbox",
  title = "Хоосон байна",
  description = "There are no items to display at the moment.",
  actionLabel,
  onAction,
  className = "",
}) {
  const icons = {
    inbox: Inbox,
    search: Search,
    package: Package,
    users: Users,
    calendar: Calendar,
    file: FileX,
  }

  const Icon = icons[icon] || Inbox

  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}>
      <div className="rounded-full bg-muted p-6 mb-4">
        <Icon className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="mt-2">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

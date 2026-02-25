"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface HintProps {
  label: string
  children: React.ReactNode
  side?: "top" | "bottom" | "left" | "right"
  align?: "start" | "center" | "end"
  sideOffset?: number
  asChild?: boolean
}

export function Hint({
  label,
  children,
  side = "top",
  align = "center",
  sideOffset = 6,
  asChild = true,
}: HintProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align} sideOffset={sideOffset}>
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

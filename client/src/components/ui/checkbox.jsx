import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-violet-500 bg-black shadow transition-colors",
      "hover:border-violet-400",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-violet-600 data-[state=checked]:border-violet-600",
      "data-[state=checked]:hover:bg-violet-500 data-[state=checked]:hover:border-violet-500",
      className
    )}
    {...props}>
    <CheckboxPrimitive.Indicator 
      className={cn(
        "flex items-center justify-center text-violet-50",
        "data-[state=checked]:animate-in data-[state=checked]:fade-in-0"
      )}>
      <CheckIcon className="w-4 h-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
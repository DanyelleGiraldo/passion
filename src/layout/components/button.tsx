import { type ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

// Función simple para combinar clases
function combineClasses(...classes: (string | undefined | boolean | null)[]) {
  return classes.filter(Boolean).join(" ")
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

    // Clases para variantes
    const variantClasses = {
      default: "bg-pink-600 text-white hover:bg-pink-700",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }

    // Clases para tamaños
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }

    const classes = combineClasses(baseClasses, variantClasses[variant], sizeClasses[size], className)

    return <button className={classes} ref={ref} {...props} />
  },
)

Button.displayName = "Button"

export { Button }


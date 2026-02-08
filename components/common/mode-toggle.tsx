"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/components"

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    const iconSize = {
        width: `clamp(0.75rem, 0.75rem + 0.25 * ((100vw - 23.4375rem) / 96.5625), 1rem)`,
        height: `clamp(0.75rem, 0.75rem + 0.25 * ((100vw - 23.4375rem) / 96.5625), 1rem)`,
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="hover:scale-110 transition-transform text-muted-foreground hover:text-foreground relative shrink-0"
            style={{
                padding: `clamp(0.375rem, 0.375rem + 0.125 * ((100vw - 23.4375rem) / 96.5625), 0.5rem)`,
            }}
        >
            {/* Sol */}
            <Sun
                className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                style={iconSize}
            />

            {/* Lua */}
            <Moon
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                style={iconSize}
            />
            <span className="sr-only">Alternar tema</span>
        </Button>
    )
}
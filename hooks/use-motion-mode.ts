"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

export function useMotionMode() {
  const isMobile = useIsMobile()
  const prefersReducedMotion = useReducedMotion()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return {
    isMobile,
    reduceMotion: !hasMounted || isMobile || prefersReducedMotion,
  }
}

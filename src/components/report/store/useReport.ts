import { useStore } from "@nanostores/react"
import { $report } from "./report"
import { useColoredShapes } from "store/useShapes"

export const useReport = () => useStore($report)

export const useIsEmpty = () => {
  const coloredShapes = useColoredShapes()
  return coloredShapes.length === 0
}

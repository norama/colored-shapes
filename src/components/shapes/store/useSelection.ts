import { useStore } from "@nanostores/react"
import { $selectedColoredShape, $selectedId } from "./selection"

export const useSelectedId = () => useStore($selectedId)

export const useSelectedColoredShape = () => useStore($selectedColoredShape)

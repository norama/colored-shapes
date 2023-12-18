import { useStore } from "@nanostores/react"
import { $coloredShapes } from "./shapes"
import { TColoredShape } from "@ts/shapes"

export const useColoredShapes = () => useStore($coloredShapes)

export const useColoredShape = (id: number | null) => {
  const coloredShapes = useColoredShapes()

  if (id === null) {
    return null
  }

  return coloredShapes.find((x) => x.id === id) as TColoredShape | undefined
}

import { useStore } from "@nanostores/react"
import { $coloredShapes } from "@store/shapes"

export const useColoredShapes = () => useStore($coloredShapes)

export const useGetColoredShape = () => {
  const coloredShapes = useColoredShapes()

  return (id: number) => coloredShapes.find((x) => x.id === id)
}

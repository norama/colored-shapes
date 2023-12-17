import { useStore } from "@nanostores/react"
import { $coloredShapes } from "@store/shapes"

export const useGetColoredShape = () => {
  const coloredShapes = useStore($coloredShapes)

  return (id: number) => coloredShapes.find((x) => x.id === id)
}

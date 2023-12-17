"use client"

import ColoredShapeImage from "./ColoredShapeImage"
import { useGetColoredShape } from "@store/useShapes"

interface ColoredShapeProps {
  id: number
  size?: number
}

const ColoredShape = ({ id, size = 112 }: ColoredShapeProps) => {
  const getColoredShape = useGetColoredShape()
  const coloredShape = getColoredShape(id)

  if (!coloredShape) {
    throw new Error(`Colored Shape (${id}) is not found.`)
  }

  return <ColoredShapeImage coloredShape={coloredShape} size={size} />
}

export default ColoredShape

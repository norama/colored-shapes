"use client"

import { ListItemButton } from "@mui/material"
import ColoredShapeImage from "./ColoredShapeImage"
import { useColoredShape } from "@store/useShapes"
import { useState } from "react"

interface ColoredShapeProps {
  id: number
  hoveredContent?: React.ReactNode
  size?: number
}

const ColoredShape = ({ id, hoveredContent = "", size = 56 }: ColoredShapeProps) => {
  const coloredShape = useColoredShape(id)
  const [content, setContent] = useState<React.ReactNode>("")

  if (!coloredShape) {
    throw new Error(`Colored Shape (${id}) is not found.`)
  }

  return (
    <ListItemButton
      sx={{ width: "fit-content" }}
      onMouseEnter={() => setContent(hoveredContent)}
      onMouseLeave={() => setContent("")}
    >
      <ColoredShapeImage coloredShape={coloredShape} content={content} size={size} />
    </ListItemButton>
  )
}

export default ColoredShape

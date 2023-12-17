"use client"

import { ListItemButton } from "@mui/material"
import { Edit as EditIcon } from "@mui/icons-material"
import ColoredShapeImage from "./ColoredShapeImage"
import { useGetColoredShape } from "@store/useShapes"
import { useState } from "react"

interface ColoredShapeProps {
  id: number
  size?: number
}

const ColoredShape = ({ id, size = 112 }: ColoredShapeProps) => {
  const getColoredShape = useGetColoredShape()
  const coloredShape = getColoredShape(id)
  const [content, setContent] = useState<React.ReactNode>("")

  if (!coloredShape) {
    throw new Error(`Colored Shape (${id}) is not found.`)
  }

  return (
    <ListItemButton
      sx={{ width: "fit-content" }}
      onMouseEnter={() => setContent(<EditIcon />)}
      onMouseLeave={() => setContent("")}
    >
      <ColoredShapeImage coloredShape={coloredShape} content={content} size={size} />
    </ListItemButton>
  )
}

export default ColoredShape

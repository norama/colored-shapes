import { ListItemButton } from "@mui/material"
import ColoredShapeImage from "./ColoredShapeImage"
import { useState } from "react"
import { TColoredShapeTemplate } from "@ts/shapes"

interface ColoredShapeProps {
  coloredShape: TColoredShapeTemplate
  onClick?: () => void
  hoveredContent?: React.ReactNode
  size?: number
}

const ColoredShape = ({
  coloredShape,
  onClick,
  hoveredContent = "",
  size = 56,
}: ColoredShapeProps) => {
  const [content, setContent] = useState<React.ReactNode>("")

  return (
    <ListItemButton
      sx={{ width: "fit-content" }}
      onMouseEnter={() => setContent(hoveredContent)}
      onMouseLeave={() => setContent("")}
      onClick={onClick}
    >
      <ColoredShapeImage coloredShape={coloredShape} content={content} size={size} />
    </ListItemButton>
  )
}

export default ColoredShape

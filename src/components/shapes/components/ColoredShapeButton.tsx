import { Box, ListItemButton } from "@mui/material"
import ColoredShapeImage from "./ColoredShapeImage"
import { useState } from "react"
import { TColoredShapeTemplate } from "@ts/shapes"

interface ColoredShapeProps {
  coloredShape: TColoredShapeTemplate
  onClick?: () => void
  content?: React.ReactNode
  hoveredContent?: React.ReactNode
  size?: number
}

const ColoredShape = ({
  coloredShape,
  onClick,
  content = "",
  hoveredContent = "",
  size = 56,
}: ColoredShapeProps) => {
  const [currentContent, setCurrentContent] = useState<React.ReactNode>(content)

  return (
    <ListItemButton
      onMouseEnter={() => setCurrentContent(hoveredContent ? hoveredContent : content)}
      onMouseLeave={() => setCurrentContent(content)}
      onClick={onClick}
    >
      <Box display="flex" justifyContent="center" width="100%">
        <ColoredShapeImage coloredShape={coloredShape} content={currentContent} size={size} />
      </Box>
    </ListItemButton>
  )
}

export default ColoredShape

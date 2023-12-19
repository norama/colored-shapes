import { Box, Button } from "@mui/material"
import ColoredShapeImage from "./ColoredShapeImage"
import { useState } from "react"
import { TColoredShapeTemplate } from "@ts/shapes"

interface ColoredShapeProps {
  coloredShape: TColoredShapeTemplate
  onClick?: () => void
  content?: React.ReactNode
  hoveredContent?: React.ReactNode
  size?: number
  disabled?: boolean
}

const ColoredShape = ({
  coloredShape,
  onClick,
  content = "",
  hoveredContent = "",
  size = 56,
  disabled = false,
}: ColoredShapeProps) => {
  const [currentContent, setCurrentContent] = useState<React.ReactNode>(content)

  const handleEnter = () => setCurrentContent(hoveredContent ? hoveredContent : content)
  const handleLeave = () => setCurrentContent(content)

  return (
    <Button
      onMouseEnter={handleEnter}
      onTouchStart={handleEnter}
      onMouseLeave={handleLeave}
      onTouchEnd={handleLeave}
      onClick={onClick}
      disabled={disabled}
      sx={{ padding: "1rem", backgroundColor: disabled ? "transparent" : "whitesmoke" }}
    >
      <Box display="flex" justifyContent="center" width="100%">
        <ColoredShapeImage coloredShape={coloredShape} content={currentContent} size={size} />
      </Box>
    </Button>
  )
}

export default ColoredShape

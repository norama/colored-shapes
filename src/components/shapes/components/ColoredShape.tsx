import { ListItemButton } from "@mui/material"
import ColoredShapeImage from "./ColoredShapeImage"
import { useColoredShape } from "@store/useShapes"
import ColoredShapeButton from "./ColoredShapeButton"

interface ColoredShapeProps {
  id: number
  onClick?: () => void
  hoveredContent?: React.ReactNode
  size?: number
}

const ColoredShape = ({ id, onClick, hoveredContent = "", size = 56 }: ColoredShapeProps) => {
  const coloredShape = useColoredShape(id)

  if (!coloredShape) {
    throw new Error(`Colored Shape (${id}) is not found.`)
  }

  return (
    <ColoredShapeButton
      coloredShape={coloredShape}
      onClick={onClick}
      hoveredContent={hoveredContent}
      size={size}
    />
  )
}

export default ColoredShape

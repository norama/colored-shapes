import { useColoredShape } from "store/useShapes"
import ColoredShapeButton from "components/global/page/ColoredShapeButton"

interface ColoredShapeProps {
  id: number
  onClick?: () => void
  content?: React.ReactNode
  hoveredContent?: React.ReactNode
  size?: number
}

const ColoredShape = ({
  id,
  onClick,
  content = "",
  hoveredContent = "",
  size = 56,
}: ColoredShapeProps) => {
  const coloredShape = useColoredShape(id)

  if (!coloredShape) {
    throw new Error(`Colored Shape (${id}) is not found.`)
  }

  return (
    <ColoredShapeButton
      coloredShape={coloredShape}
      onClick={onClick}
      content={content}
      hoveredContent={hoveredContent}
      size={size}
    />
  )
}

export default ColoredShape

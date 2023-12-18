import ColoredShapeImage from "./ColoredShapeImage"
import { useSelectedColoredShape } from "./store/useSelection"

const ColoredShapeEditor = () => {
  const coloredShape = useSelectedColoredShape()

  return coloredShape && <ColoredShapeImage coloredShape={coloredShape} />
}

export default ColoredShapeEditor

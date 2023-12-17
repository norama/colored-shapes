import { Avatar } from "@mui/material"
import { TColoredShape } from "@ts/shapes"

interface ColoredShapeProps {
  coloredShape: TColoredShape
  size?: number
}

const ColoredShape = ({ coloredShape, size = 56 }: ColoredShapeProps) => {
  const { color, shape } = coloredShape

  return (
    <Avatar sx={{ width: size, height: size, background: color }} variant={shape}>
      &nbsp;
    </Avatar>
  )
}

export default ColoredShape

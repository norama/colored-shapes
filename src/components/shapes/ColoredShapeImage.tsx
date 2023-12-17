import { Avatar } from "@mui/material"
import { TColoredShape } from "@ts/shapes"

interface ColoredShapeImageProps {
  coloredShape: TColoredShape
  size?: number
}

const ColoredShapeImage = ({ coloredShape, size = 56 }: ColoredShapeImageProps) => {
  const { color, shape } = coloredShape

  return (
    <Avatar sx={{ width: size, height: size, background: color }} variant={shape}>
      &nbsp;
    </Avatar>
  )
}

export default ColoredShapeImage

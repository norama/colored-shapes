import { Avatar } from "@mui/material"
import type { TColoredShapeButtonTemplate } from "types/index"

interface ColoredShapeImageProps {
  coloredShape: TColoredShapeButtonTemplate
  content?: React.ReactNode
  size?: number
}

const ColoredShapeImage = ({ coloredShape, content = "", size = 56 }: ColoredShapeImageProps) => {
  const { color, shape } = coloredShape

  return (
    <Avatar sx={{ width: size, height: size, background: color }} variant={shape}>
      {content}
    </Avatar>
  )
}

export default ColoredShapeImage

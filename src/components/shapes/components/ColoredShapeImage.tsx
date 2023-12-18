import { Avatar } from "@mui/material"
import { TColoredShape } from "@ts/shapes"
import React from "react"

interface ColoredShapeImageProps {
  coloredShape: TColoredShape
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

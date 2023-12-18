export type TShape = "square" | "circular"
export type TColor = "red" | "green" | "blue" | "gold" | undefined

export type TColoredShapeTemplate = {
  shape: TShape
  color: TColor
}

export type TColoredShape = TColoredShapeTemplate & {
  id: number
}

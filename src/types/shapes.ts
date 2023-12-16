export type TShape = "square" | "circular"
export type TColor = "red" | "green" | "blue" | "yellow"

export type TColoredShape = {
  id: number
  shape: TShape
  color: TColor
}

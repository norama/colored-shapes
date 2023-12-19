import { computed } from "nanostores"
import { $coloredShapes } from "store/shapes"

export const $report = computed($coloredShapes, (coloredShapes) =>
  coloredShapes.reduce(
    (acc, coloredShape) => {
      acc[coloredShape.shape][coloredShape.color]++
      acc[coloredShape.color][coloredShape.shape]++
      acc[coloredShape.shape].ALL++
      acc[coloredShape.color].ALL++
      acc.ALL++
      return acc
    },
    {
      square: { red: 0, green: 0, blue: 0, gold: 0, ALL: 0 },
      circular: { red: 0, green: 0, blue: 0, gold: 0, ALL: 0 },
      red: { square: 0, circular: 0, ALL: 0 },
      green: { square: 0, circular: 0, ALL: 0 },
      blue: { square: 0, circular: 0, ALL: 0 },
      gold: { square: 0, circular: 0, ALL: 0 },
      ALL: 0,
    },
  ),
)

import type { TColor, TColoredShape, TShape } from "@ts/shapes"
import { atom, computed } from "nanostores"

export const $coloredShapes = atom<TColoredShape[]>([])

const $maxId = computed($coloredShapes, (coloredShapes) =>
  Math.max(0, ...coloredShapes.map((x) => x.id)),
)

export const addColoredShape = (
  coloredShape = { id: $maxId.get() + 1, shape: "square" as TShape, color: "red" as TColor },
) => {
  $coloredShapes.set([...$coloredShapes.get(), coloredShape])
}

export const removeColoredShape = (id: number) => {
  $coloredShapes.set($coloredShapes.get().filter((x) => x.id !== id))
}

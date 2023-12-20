import type { TColor, TShape, TColoredShape, TColoredShapeTemplate } from "types/index"
import { atom, computed } from "nanostores"
import { emitter, stopTransmitter } from "transmitter"

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

export const updateColoredShape = (id: number, template: TColoredShapeTemplate) => {
  const updated = [...$coloredShapes.get()]
  const index = updated.findIndex((x) => x.id === id)
  if (index === -1) {
    return
  }
  updated[index] = { id, ...template }
  $coloredShapes.set(updated)
}

export const startTransmitter = () => {
  stopTransmitter()

  emitter.on("add", () => {
    console.log("ADD")
    addColoredShape()
  })

  emitter.on("remove", (id) => {
    console.log("REMOVE")
    removeColoredShape(id)
  })

  emitter.on("update", (id, coloredShape) => {
    console.log("UPDATE")
    updateColoredShape(id, coloredShape)
  })
}

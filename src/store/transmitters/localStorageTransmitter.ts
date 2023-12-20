import {
  $coloredShapes,
  addColoredShape,
  removeColoredShape,
  updateColoredShape,
} from "store/shapes"
import { emitter, stopTransmitter } from "transmitter"
import { TColoredShape } from "types"

const STORAGE_KEY = "coloredShapes"

const load = () => {
  const coloredShapesString = localStorage.getItem(STORAGE_KEY)
  if (coloredShapesString) {
    $coloredShapes.set(JSON.parse(coloredShapesString) as TColoredShape[])
  }
}

const save = () => {
  const coloredShapes = $coloredShapes.get()
  localStorage.setItem(STORAGE_KEY, JSON.stringify(coloredShapes))
}

export const startTransmitter = () => {
  stopTransmitter()

  load()

  emitter.on("add", () => {
    console.log("ADD")
    addColoredShape()
    save()
  })

  emitter.on("remove", (id) => {
    console.log("REMOVE")
    removeColoredShape(id)
    save()
  })

  emitter.on("update", (id, coloredShape) => {
    console.log("UPDATE")
    updateColoredShape(id, coloredShape)
    save()
  })
}

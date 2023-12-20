import { addColoredShape, removeColoredShape, updateColoredShape } from "store/shapes"
import { emitter, stopTransmitter } from "transmitter"

export const startTransmitter = () => {
  stopTransmitter()

  emitter.on("add", () => {
    addColoredShape()
  })

  emitter.on("remove", (id) => {
    removeColoredShape(id)
  })

  emitter.on("update", (id, coloredShape) => {
    updateColoredShape(id, coloredShape)
  })
}

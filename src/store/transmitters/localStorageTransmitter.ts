import { addColoredShape, removeColoredShape, updateColoredShape } from "store/shapes"
import { emitter, stopTransmitter } from "transmitter"

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

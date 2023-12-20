import { createNanoEvents } from "nanoevents"
import { addColoredShape, removeColoredShape, updateColoredShape } from "store/shapes"
import { TColoredShape, TColoredShapeTemplate } from "types"

interface Events {
  add: () => void
  remove: (id: number) => void
  update: (id: number, coloredShape: TColoredShapeTemplate) => void
}

const emitter = createNanoEvents<Events>()

export const startTransmitter = () => {
  console.log("START TRANSMITTER")

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

export const stopTransmitter = () => {
  console.log("STOP TRANSMITTER")

  emitter.events = {}
}

export const emitAdd = () => {
  emitter.emit("add")
}

export const emitRemove = (id: number) => {
  emitter.emit("remove", id)
}

export const emitUpdate = (id: number, coloredShape: TColoredShapeTemplate) => {
  emitter.emit("update", id, coloredShape)
}
